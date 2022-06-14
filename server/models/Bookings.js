const { default: mongoose } = require("mongoose");

const BookingSchema = new mongoose.Schema({
    
    parkingName:{
        type:String,
        required:false,
    },

    slotId:{
        type:String,
        required:false,
    },

    userId:{
        type:Number,
        required:false,
    },

    vehicle:{
        type:String,
        required:false,
    },

    schedule:{
        type:String,
        required:false,
    },

    duration:{
        type:Number,
        required:false,
    },

    expired:{
        type:Boolean,
        required:false,
    }

});

const BookingModel = mongoose.model("bookings",BookingSchema)
module.exports = BookingModel