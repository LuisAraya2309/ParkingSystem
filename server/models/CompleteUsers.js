const { default: mongoose } = require("mongoose");

const CompleteUserSchema = new mongoose.Schema({
    
    id:{
        type:Number,
        required:true,
    },

    altEmail:{
        type:String,
        required:true,
    },

    department:{
        type:Number,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },

    lastname1:{
        type:String,
        required:true,
    },

    lastname2:{
        type:String,
        required:true,
    },

    name:{
        type:String,
        required:true,
    },

    password:{
        type:String,
        required:true,
    },

    phone:{
        type:Number,
        required:true,
    },

    vehicles:{
        type:String,
        required:true,
    },
});

const CompleteUserModel = mongoose.model("users",CompleteUserSchema)
module.exports = CompleteUserModel