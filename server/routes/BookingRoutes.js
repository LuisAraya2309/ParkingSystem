const router = require('express').Router();
const BookingModel = require('../models/Bookings')
const UserModel = require('../models/Users')

router.post("/createBooking", async (req,res) => {
    const newSlots = BookingModel(req.body)
    newSlots.save()
})

router.post("/deleteBookingByParking", async (req,res) => {
    
    BookingModel.deleteOne({parkingName:req.body.parkingName} , (err,result) =>{
        
        const validName = result[0] === undefined
        if(!validName){
            res.status(404).send('Slots not found')
        }
        else{
            res.json(result[0])
        }
    });
})

router.post("/updateByParking", async (req,res) => {

    const setAttributes = {'expired':true};

    BookingModel.updateOne({parkingName:req.body.parkingName, slotId: req.body.slotId, expired:false},{$set:setAttributes},(err,result) =>{

        const validName = result[0] === undefined
        if(!validName){
            res.status(404).send('Booking not found')
        }
        else{
            res.json(result[0])
        }
    })
})

router.post("/getBookingsByParking" , async (req,res) => {
    BookingModel.aggregate([{$match:{parkingName:{$eq:req.body.parkingName}, expired:{$eq:false}}}], (err,result) =>{
        if (err){
            res.status(404).send('Parking invalid')
        }
        if(result[0] === undefined){
            res.status(404).send('Parking invalid')
        }
        else{
            res.json(result)
        }
    })
})

router.get("/getBookings",(req,res) => {
    
    BookingModel.aggregate([{$match:{expired:{$eq:false}}}], (err,result) =>{
        if (err){
            res.status(404).send('Expired booking')
        }
        if(result[0] === undefined){
            res.status(404).send('Expired booking')
        }
        else{
            res.json(result)
        }
    })
})
    

router.post("/bookingBySlotType" , async (req,res) => {

    let bookings = await BookingModel.aggregate([{$match:{parkingName:{$eq:req.body.parkingName}, expired:{$eq:false}}}])
    let perSlotType = {userSlot: 0, chiefSlot : 0,preferentialSlot : 0, tecVehicleSlot : 0, visitorSlot : 0}
    const slotsTypes = {U:'userSlot',C:'chiefSlot',P:'preferentialSlot',T:'tecVehicleSlot',V:'visitorSlot'}
    let perDepartment = {}

    for (const booking of bookings){
        let slotType = booking.slotId[0]    
        let user = await UserModel.aggregate([{$match:{ID:booking.userId}}])
        let department = user[0]['department']
        perDepartment[department] === undefined ? perDepartment[department] = 1 : perDepartment[department]++
        perSlotType[slotsTypes[slotType]]++;
    }

    res.json({perDepartment:perDepartment, perSlotType:perSlotType})
    
})

const getDepartment = async (userId) =>{

    let userFound = await UserModel.find({ID:userId})
    return (userFound[0].department)

}

router.post("/parkingsByDeparment" , async (req,res) => {
    const departmentSplitted = req.body.departmentName.split(' ')
    const departmentFilter = departmentSplitted[0][0] + departmentSplitted[2][0] + departmentSplitted[4][0]
    
    
    let bookings = await BookingModel.find({})
    let parkingsUsage = {}
    
    for(const booking of bookings){
        let bookingDepartment = await UserModel.find({ID:booking.userId})
        bookingDepartment = bookingDepartment[0].department
        if(bookingDepartment === departmentFilter){
            parkingsUsage[booking.parkingName] === undefined ? parkingsUsage[booking.parkingName] = 1 : parkingsUsage[booking.parkingName]++;
            
        }
    }
    const parkingsToAnalyze = Object.keys(parkingsUsage)
    let percentageByParking = {}
    for(let parking of parkingsToAnalyze){
        let bookingsPerParking = await BookingModel.aggregate([{$match:{parkingName:{$eq:parking}, expired:{$eq:false}}}])
        percentageByParking[parking] = (parkingsUsage[parking]*100) / bookingsPerParking.length 
    }
    res.json(percentageByParking)

    
})  


module.exports = router;


