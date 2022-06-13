const { default: mongoose } = require("mongoose");

const ParkingSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:false,
    },

    type:{
        type:String,
        required:false,
    },

    location:{
        type:String,
        required:false,
    },

    schedule:{
        type:Object,
        required:false,
    },

    slotsAvailable:{
        type:Object,
        required:false,
    },

    nonAvailability:{
        type:String,
        required:false,
    },

    contract:{
        type:String,
        required:false,
    }
});

const ParkingModel = mongoose.model("parkings",ParkingSchema)
module.exports = ParkingModel