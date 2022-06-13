//import React,{Fragment} from 'react';
//import axios from 'axios';

export function notAvailableSlots(bookingList, start_hour, finish_hour){

    let notAvailable = [];
    const startNewHours = parseInt((start_hour).split(':')[0]);
    const finishNewHours = parseInt((finish_hour).split(':')[0]);
    // eslint-disable-next-line
    bookingList.map((booking) =>{

        const [startSaveHour, finishSaveHour] = (booking.schedule).split(' - ');
        const startSaveHours = parseInt((startSaveHour).split(':')[0]);
        const finishSaveHours = parseInt((finishSaveHour).split(':')[0]);

        if(startNewHours>startSaveHours & startNewHours<finishSaveHours){
            notAvailable.push(booking.slotId);
        }else if(finishNewHours>startSaveHours & finishNewHours<finishSaveHours){
            notAvailable.push(booking.slotId);
        }else if(startNewHours<startSaveHours & finishNewHours>finishSaveHours){
            notAvailable.push(booking.slotId);
        }
    })
    return notAvailable

}

export function AvailableList(notAvailable, totalSlots, userType){

    let availableSlotsList = [];
    let newSlot;
    let slotNumber = 1;
    while (slotNumber <= totalSlots) {
        let invalidSlot = false;
        newSlot = userType + slotNumber.toString();
        for(const notAvailableSlot in notAvailable){
            if(newSlot === notAvailable[notAvailableSlot]){
                
                invalidSlot = true;
                break;
            }
        }
        if(!invalidSlot){
            availableSlotsList.push(newSlot);
        }
        slotNumber++;
    }
    return availableSlotsList
}