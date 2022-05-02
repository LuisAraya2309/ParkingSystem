const { default: mongoose } = require("mongoose");

const ParkingSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
    },

    type:{
        type:String,
        required:true,
    },

    location:{
        type:String,
        required:true,
    },

    schedule:{
        type:Object,
        required:true,
    },

    slotsAvailable:{
        type:Number,
        required:true,
    },

    nonAvailability:{
        type:String,
        required:true,
    },
});

const ParkingModel = mongoose.model("parkings",ParkingSchema)
module.exports = ParkingModel