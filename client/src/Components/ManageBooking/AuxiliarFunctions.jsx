export function notAvailableSlots(bookingList, start_hour, finish_hour){

    let notAvailable = [];
    const startNewHours = parseInt((start_hour).split(':')[0]);
    const startNewMinutes = parseInt((start_hour).split(':')[1]);

    const finishNewHours = parseInt((finish_hour).split(':')[0]);
    const finishNewMinutes = parseInt((finish_hour).split(':')[1]);
    // eslint-disable-next-line
    bookingList.map((booking) =>{

        const [startSaveHour, finishSaveHour] = (booking.schedule).split(' - ');

        const startSaveHours = parseInt((startSaveHour).split(':')[0]);
        const startSaveMinutes = parseInt((startSaveHour).split(':')[1]);

        const finishSaveHours = parseInt((finishSaveHour).split(':')[0]);
        const finishSaveMinutes = parseInt((finishSaveHour).split(':')[1]);

        if(startNewHours>=startSaveHours & startNewHours<=finishSaveHours){

            if(startNewHours === startSaveHours){
                if(startNewMinutes>=startSaveMinutes){
                    notAvailable.push(booking.slotId);
                }
            }else if(startNewHours === finishSaveHours){
                if(startNewMinutes<=finishSaveMinutes){
                    notAvailable.push(booking.slotId);
                }
            }else{
                notAvailable.push(booking.slotId);
            }

        }
        else if(finishNewHours>=startSaveHours & finishNewHours<=finishSaveHours){

            if(finishNewHours === startSaveHours){
                if(finishNewMinutes>=startSaveMinutes){
                    notAvailable.push(booking.slotId);
                }
            }else if(finishNewHours === finishSaveHours){
                if(finishNewMinutes<=finishSaveMinutes){
                    notAvailable.push(booking.slotId);
                }
            }else{
                notAvailable.push(booking.slotId);
            }

        }
        else if(startNewHours<=startSaveHours & finishNewHours>=finishSaveHours){

            if(startNewHours === startSaveHours){
                if(startNewMinutes<=startSaveMinutes){
                    notAvailable.push(booking.slotId);
                }
            }else if(finishNewHours === finishSaveHours){
                if(finishNewMinutes>=finishSaveMinutes){
                    notAvailable.push(booking.slotId);
                }
            }else{
                notAvailable.push(booking.slotId);
            }
        }
    })
    return notAvailable

}

export function AvailableList(notAvailable, totalSlots, userType){

    const typesDicc = {'User':'U','Chief':'C','Preferential':'P','TecDriver':'T', 'Visitor':'V'}
    let availableSlotsList = [];
    let newSlot;
    let slotNumber = 1;
    while (slotNumber <= totalSlots) {
        let invalidSlot = false;
        newSlot = typesDicc[userType] + slotNumber.toString();
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