const router = require('express').Router();
const UserModel = require('../models/Users')
//Login page

router.post("/",async(req,res)=>{


})


router.get("/getUsers",(req,res) => {
    UserModel.find({}, (err,result) =>{
        if (err){
            res.json(err)
        } else {
            res.json(result)
        }
    })
})


router.post("/getUserByEmail", async (req,res) => {
    UserModel.aggregate([{$match:{email:{$eq:req.body.username}}}], (err,result) =>{
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


router.post("/createUser", async (req,res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)
})


router.post("/login", async (req,res) => {
    
    const user = {
        "email":req.body.email,
        "password":req.body.password,
        "type":""
    }
    
    UserModel.aggregate([{$match:{email:{$eq:user.email}}},{$match:{password:{$eq:user.password}}}], (err,result) =>{
        if (err){
            res.status(404).send('User invalid')
        }
        if(result[0] === undefined){
            res.status(404).send('User invalid')
        }
        else{
            user.type = result[0].type
            res.json(user)
        }
    })
})

router.post("/createCompleteUser", async (req,res) => {
    const user = req.body;
    const newUser = new CompleteUserModel(user);
    await newUser.save();

    res.json(user)
})

router.post("/deleteById", async (req,res) => {
    
    const idUser = {"ID":req.body.ID}
    
    CompleteUserModel.remove({"ID":idUser.ID}, (err,result) =>{
        if (err){
            res.status(404).send('User not found')
        }
        if(result[0] === undefined){
            res.status(404).send('User not found')
        }
        else{
            res.json(idUser)
        }
    })
})

router.post("/updateById", async (req,res) => {
    
    const user = {
        "identification":req.body.id,
        "newAttribute":req.dody.newAttribute
    }
    
    CompleteUserModel.update({identification:user.identification},{$set: {newAttribute: user.newAttribute}},(err,result) =>{
        if (err){
            res.status(404).send('User not found')
        }
        if(result[0] === undefined){
            res.status(404).send('User not found')
        }
        else{
            res.json(user)
        }
    })
})

router.post("/modifySchedule", async (req,res)=>{

    const user = {
        "user" : "sebas123@itcr.ac.cr"//req.body[1]
    }

    const newSchedule = {
        "schedule" : req.body[0].schedule,
        "days" : req.body[0].days,
        "user" : req.body[1] //req.body[1]
    }

    UserModel.findOne({user},(err,result)=>{
        let foundUser ={}
        foundUser = result
        let oldSchedule = result.schedule
        console.log(Object.keys(oldSchedule))
        console.log(newSchedule.days)
        newDays = newSchedule.days
        oldDays = Object.keys(oldSchedule)
        console.log(oldSchedule)
        newDays.forEach(function(day,index){
           if(oldDays.includes(day)){
               
               oldSchedule[day].push(newSchedule.schedule) 
           }
           else{
            oldSchedule[day] = [newSchedule.schedule]

           } 
        })
        console.log(oldSchedule)
        
    })
   
});


module.exports = router;