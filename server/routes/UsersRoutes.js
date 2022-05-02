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
        "password":req.body.password
    }
    
    UserModel.aggregate([{$match:{email:{$eq:user.email}}},{$match:{password:{$eq:user.password}}}], (err,result) =>{
        if (err){
            res.status(404).send('User invalid')
        }
        if(result[0] === undefined){
            res.status(404).send('User invalid')
        }
        else{
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

router.post("/deleteByName", async (req,res) => {
    
    const idUser = {"name":req.body.name}
    
    CompleteUserModel.remove({"name":idUser.name}, (err,result) =>{
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

module.exports = router;