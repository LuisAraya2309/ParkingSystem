const { default: mongoose } = require("mongoose");

const BookingSchema = new mongoose.Schema({
    
    parkingName:{
        type:String,
        required:true,
    },

    slotId:{
        type:String,
        required:true,
    },

    userId:{
        type:Number,
        required:true,
    },

    vehicle:{
        type:String,
        required:true,
    },

    schedule:{
        type:String,
        required:false,
    },

    date:{
        type:String,
        required:true,
    },

    visitorId:{
        type:Number,
        required:false,
    },

    visitorMatter:{
        type:String,
        required:false,
    },

    visitLocation:{
        type:String,
        required:false,
    },

    vehicleModel:{
        type:String,
        required:false,
    },

    vehicleColor:{
        type:String,
        required:false,
    },

    vehicleDriver:{
        type:String,
        required:false,
    },

    expired:{
        type:Boolean,
        required:true,
    }

});

const BookingModel = mongoose.model("bookings",BookingSchema)
module.exports = BookingModel