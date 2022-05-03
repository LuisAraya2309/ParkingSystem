const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:false,
    },
    type:{
        type:String,
        required:false
    },
    schedule:{
        type:Object,
        required:false
    }
});

const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel