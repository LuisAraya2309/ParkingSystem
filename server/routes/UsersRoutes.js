const router = require('express').Router();
const UserModel = require('../models/Users')
const ReportClientModel = require('../models/ReportsClient')
const ReportAdminModel = require('../models/ReportsAdmin')
const ReportModel = require('../models/Reports')
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
    UserModel.aggregate([{$match:{email:{$eq:req.body.email}}}], (err,result) =>{
        if (err){
            res.status(404).send('User invalid')
        }
        if(result[0] === undefined){
            res.status(404).send('User invalid')
        }
        else{
            res.json(result[0])
        }
    })
})

router.post("/deleteUserByEmail", async (req,res) => {

    UserModel.deleteOne({email:req.body.email}, (err,result) =>{
        
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
    newUser['vehicles'] = []
    newUser['schedule'] = {}
    const newValidUser = UserModel(newUser)
    newValidUser.save()
})


router.post("/login", async (req,res) => {
    
    const user = {
        "email":req.body.email,
        "password":req.body.password,
        "type":"",
        "parkingName":""
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
            user.parkingName = result[0].parkingName
            res.json(user)
        }
    })
})


router.post("/updateByID", async (req,res) => {
    console.log('entre');
    console.log(req.body);
    const setAttributes = {discapacity: req.body.discapacity, name: req.body.name, lastname1: req.body.lastname1, lastname2: req.body.lastname2, password: req.body.password,
        altEmail: req.body.altEmail, department:req.body.department, phone:req.body.phone, vehicles:[req.body.vehicles]};

    console.log(setAttributes);
    UserModel.aggregate([{$match:{ID:{$eq:req.body.ID}}}], (err,result) =>{
        if (err){
            res.status(404).send('User invalid')
        }
        if(result[0] === undefined){
            res.status(404).send('User invalid')
        }
        else{
            console.log(result)
            console.log(result[0].ID)
            UserModel.findOneAndUpdate({ID:result[0].ID},{setAttributes},{new:true},(err,result) =>{})
        }
    })
})


router.post("/updateUsers", async (req,res) => {

    const setAttributes = {discapacity: req.body.discapacity, name: req.body.name, lastname1: req.body.lastname1, lastname2: req.body.lastname2, password: req.body.password,
        altEmail: req.body.altEmail, department:req.body.department, phone:req.body.phone, vehicles:[req.body.vehicles]};

    UserModel.updateOne({email:req.body.email},{$set:setAttributes},(err,result) =>{

        const validName = result[0] === undefined
        if(!validName){
            res.status(404).send('User not found')
        }
        else{
            res.json(result[0])
        }
    })
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



    const searchZone = (hour) =>{
        const ceroAdded = (hour.toString().length===2) ? (""):("0")
        if((parseInt(hour,10)%2)===0){
            hour -=1
            let endHour = hour+2
            let newHour = ceroAdded+hour.toString() + ":00-" + endHour.toString()+":00" 
            return newHour
        }
        let endHour = hour + 2
        return (ceroAdded+hour.toString() + ":00-" + endHour.toString()+":00")
    }



    UserModel.findOne({email:user.email},(err,result)=>{
        let foundUser ={}
        foundUser = result
        let oldSchedule = result.schedule
        let newDays = newSchedule.days
        let oldDays = Object.keys(oldSchedule)

        const isAdmin = "admin" == foundUser.type

        newDays.forEach(function(day){
           if(oldDays.includes(day)){
               oldSchedule[day].push(newSchedule.schedule)
           }
           else{
            oldSchedule[day] = [newSchedule.schedule]
           }
           
           
           ReportModel.findOneAndUpdate({Day:day},{$inc:{usage:1}},{new:true},(err,result)=>{
                if(err){
                    res.status(404).send('Error incrementando el usage')
                }
           })
           

           

        })

        const firstHour = newSchedule.schedule.split(':')[0]
        const zoneDesigned = searchZone(parseInt(firstHour,10))

        console.log(zoneDesigned)

        if(isAdmin){
            ReportAdminModel.findOneAndUpdate({zone:zoneDesigned},{$inc:{usage:1}},{new:true},(err,result)=>{
                if(err){
                    res.status(404).send('Error incrementando el usage')
                }
                console.log(result)
            })
            
        }else{  //then is client
           
            ReportClientModel.findOneAndUpdate({zone:zoneDesigned},{$inc:{usage:1}},{new:true},(err,result)=>{
                if(err){
                    res.status(404).send('Error incrementando el usage')
                }
                console.log(result)
            })
            
            
        }
        
        

        
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