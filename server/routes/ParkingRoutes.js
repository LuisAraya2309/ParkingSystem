const router = require('express').Router();
const ParkingModel = require('../models/Parking')

router.post("/",async(req,res)=>{

})

router.post("/createParking", async (req,res) => {

    const newParking = req.body;
    const newParkingName = req.body.name
    ParkingModel.aggregate([{$match:{name:{$eq:newParkingName}}}],(err,result)=>{
        const validName = result[0] === undefined
        if(!validName){
            res.status(404).send()
        }
    });
    console.log(newParking)
    const newValidParking = ParkingModel(newParking)
    console.log(newValidParking)
    newValidParking.save()
})

router.post("/deleteParkingByName", async (req,res) => {
    
    ParkingModel.deleteOne({name:req.body.name} , (err,result) =>{
        
        const validName = result[0] === undefined
        if(!validName){
            res.status(404).send('Parking not found')
        }
        else{
            res.json(result[0])
        }
    });
})

router.post("/updateByName", async (req,res) => {

    const setAttributes = {name: req.body.parkingInfo.name, type: req.body.parkingInfo.type, location: req.body.parkingInfo.location, schedule:req.body.parkingInfo.schedule,
        slotsAvailable: req.body.parkingInfo.slotsAvailable, nonAvailability:req.body.parkingInfo.nonAvailability, contract:req.body.parkingInfo.contract};

    ParkingModel.updateOne({name:req.body.nameOrg},{$set:setAttributes},(err,result) =>{

        const validName = result[0] === undefined
        if(!validName){
            res.status(404).send('Parking not found')
        }
        else{
            res.json(result[0])
        }
    })
})

router.get("/getParking",(req,res) => {
    ParkingModel.find({}, (err,result) =>{
        if (err){
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

router.post("/getParkingByName", async (req,res) => {
    ParkingModel.aggregate([{$match:{name:{$eq:req.body.name}}}], (err,result) =>{
        if (err){
            res.status(404).send('User invalid')
        }
        if(result[0] === undefined){
            res.status(404).send('User invalid')
        }
        else{
            console.log('funciona')
            res.json(result[0])
        }
    })
})


router.post("/getParkingByLocation", async (req,res) => {
    ParkingModel.aggregate([{$match:{location:{$eq:req.body.location}}}], (err,result) =>{
        if (err){
            res.status(404).send('Parking invalid')
        }
        if(result[0] === undefined){
            res.status(404).send('Parking invalid')
        }
        else{
            console.log('funciona')
            res.json(result[0])
        }
    })
})

router.post("/getParkingBySchedule", async (req,res) => {
    const opening_hour = req.body.opening_hour
    const closing_time = req.body.closing_time
    ParkingModel.aggregate([{$match:{schedule:{$eq:opening_hour}}},{$match:{schedule:{$eq:closing_time}}}],(err,result) =>{
        if (err){
            res.status(404).send('Parking invalid 1')
        }
        if(result[0] === undefined){
            res.status(404).send('Parking invalid')
        }
        else{
            console.log('funciona')
            res.json(result[0])
        }
    })
})
//missing final schedule model
module.exports = router;