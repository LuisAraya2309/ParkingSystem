const router = require('express').Router();
const SlotsModel = require('../models/Slots')


router.post("/createSlots", async (req,res) => {

    const newSlots = SlotsModel(req.body)
    newSlots.save()
})

router.post("/deleteSlotsByParking", async (req,res) => {
    
    SlotsModel.deleteOne({parkingName:req.body.name} , (err,result) =>{
        
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

    SlotsModel.updateOne({parkingName:req.body.parkingName},{$set:setAttributes},(err,result) =>{

        const validName = result[0] === undefined
        if(!validName){
            res.status(404).send('Slots not found')
        }
        else{
            res.json(result[0])
        }
    })
})*/


router.post("/getSlotsByParking" , async (req,res) => {
    SlotsModel.aggregate([{$match:{parkingName:{$eq:req.body.parkingName}}}], (err,result) =>{
        if (err){
            res.status(404).send('Parking invalid')
        }
        if(result[0] === undefined){
            res.status(404).send('Parking invalid')
        }
        else{
            res.json(result[0])
        }
    })
})


router.get("/getSlots",(req,res) => {
    
    SlotsModel.find({}, (err,result) =>{
        if (err){
            res.json(err)
        } else {
            res.json(result)
        }
    })
})


module.exports = router;