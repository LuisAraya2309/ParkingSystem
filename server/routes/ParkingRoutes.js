const router = require('express').Router();
const ParkingModel = require('../models/Parking')

router.post("/",async(req,res)=>{

})

router.post("/createParking", async (req,res) => {
    const parking = req.body;
    const newParking = new CompleteParkingModel(parking);
    await newParking.save();

    res.json(parking)
})

router.post("/deleteParkingByName", async (req,res) => {
    
    ParkingModel.remove([{$match:{name:{$eq:req.body.name}}}], (err,result) =>{
        if (err){
            res.status(404).send('User not found')
        }
        if(result[0] === undefined){
            res.status(404).send('User not found')
        }
        else{
            res.json(result[0])
        }
    })
})

router.post("/updateByName", async (req,res) => {
    
    const parking = {
        "name":req.body.name,
        "newAttribute":req.dody.newAttribute
    }
    
    ParkingModel.update({identification:parking.name},{$set: {newAttribute: parking.newAttribute}},(err,result) =>{
        if (err){
            res.status(404).send('User not found')
        }
        if(result[0] === undefined){
            res.status(404).send('User not found')
        }
        else{
            res.json(parking)
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
/*
router.post("/getParkingBySchedule", async (req,res) => {
    ParkingModel.aggregate([{$match:{location:{$eq:req.body.Schedule.opening_hour}}},{$match:{location:{$eq:req.body.Schedule.closing_time}}}],(err,result) =>{
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
})*/
//missing final schedule model
module.exports = router;