const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    
    
    ID:{
        type:Number,
        required:false,
    },

    altEmail:{
        type:String,
        required:false,
    },

    department:{
        type:String,
        required:false,
    },

    discapacity:{
        type:Boolean,
        required:false,
    },

    email:{
        type:String,
        required:false,
    },

    lastname1:{
        type:String,
        required:false,
    },

    lastname2:{
        type:String,
        required:false,
    },

    name:{
        type:String,
        required:false,
    },

    password:{
        type:String,
        required:false,
    },

    phone:{
        type:Number,
        required:false,
    },

    vehicles:{
        type:Array,
        required:false,
    },

    type:{
        type:String,
        required:false
    },
    schedule:{
        type:Object,
        required : false
    },
    parkingName:{
        type:String,
        required : false
    }
});

const UserModel = mongoose.model("users",UserSchema,"users")
module.exports = UserModel