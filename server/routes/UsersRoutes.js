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

router.post("/deleteUserByEmail", async (req,res) => {

    UserModel.deleteOne({email:req.body.username}, (err,result) =>{
        
        const validName = result[0] === undefined
        if(!validName){
            res.status(404).send('Parking not found')
        }
        else{
            res.json(result[0])
        }
    });
})


router.post("/createUser", async (req,res) => {

    const newUser = req.body;
    const newEmail = req.body.email
    UserModel.aggregate([{$match:{email:{$eq:newEmail}}}],(err,result)=>{
        const validEmail = result[0] === undefined
        if(!validEmail){
            res.status(404).send()
        }
    });
    newUser['type'] = "client"
    newUser['vehicles'] = []
    newUser['schedule'] = {}
    const newValidUser = UserModel(newUser)
    newValidUser.save()
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


router.post("/updateByID", async (req,res) => {
    
    const setAttributes = {name: req.body.name, lastname1: req.body.lastname1, lastname2: req.body.lastname2, password: req.body.password,
        altEmail: req.body.altEmail, department:req.body.department, phone:req.body.phone, vehicles:[req.body.vehicles]};
    
    UserModel.findOneAndUpdate({_id:req.body._id},{setAttributes},{new:true},(err,result) =>{
        console.log(result)
    })
    
    console.log(req.body)
})

router.post("/modifySchedule", async (req,res)=>{

    const user = {
        "email" : req.body[1]
    }

    const newSchedule = {
        "schedule" : (req.body[0].scheduleB + '-' +  req.body[0].scheduleE),
        "days" : req.body[0].days,
        "email" : req.body[1] //req.body[1]
    }

    UserModel.findOne({user},(err,result)=>{
        let foundUser ={}
        foundUser = result
        let oldSchedule = result.schedule
        let newDays = newSchedule.days
        let oldDays = Object.keys(oldSchedule)
        newDays.forEach(function(day){
           if(oldDays.includes(day)){
               oldSchedule[day].push(newSchedule.schedule)
           }
           else{
            oldSchedule[day] = [newSchedule.schedule]
           } 
        })
        //console.log(oldSchedule)

        UserModel.findOneAndUpdate({email:user.email},{schedule:oldSchedule},{new:true},(error,data)=>{
            if(error){
                res.status(404).send('Horario inválido')

            }else{
                res.json(data)
            }
        })
        
    })
   
});


module.exports = router;