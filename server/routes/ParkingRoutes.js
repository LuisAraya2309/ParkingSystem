const router = require('express').Router();
const UserModel = require('../models/Parking')

router.post("/",async(req,res)=>{

})

router.post("/createParking", async (req,res) => {
    const parking = req.body;
    const newParking = new CompleteUserModel(parking);
    await newParking.save();

    res.json(parking)
})

router.post("/deleteByName", async (req,res) => {
    
    const parkingName = "name":req.body.name
    
    ParkingModel.remove({"name",parkingName.name}, (err,result) =>{
        if (err){
            res.status(404).send('User not found')
        }
        if(result[0] === undefined){
            res.status(404).send('User not found')
        }
        else{
            res.json(parkingName)
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

module.exports = router;