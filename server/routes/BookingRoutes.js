const router = require('express').Router();
const BookingModel = require('../models/Bookings')

router.post("/createBooking", async (req,res) => {
    console.log(req.body);
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

/*
router.post("/updateByParking", async (req,res) => {

    const setAttributes = {userSlot:req.body.userSlot, chiefSlot:req.body.chiefSlot};

    BookingModel.updateOne({parkingName:req.body.parkingName},{$set:setAttributes},(err,result) =>{

        const validName = result[0] === undefined
        if(!validName){
            res.status(404).send('Slots not found')
        }
        else{
            res.json(result[0])
        }
    })
})*/

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

module.exports = router;