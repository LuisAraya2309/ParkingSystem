const { default: mongoose } = require("mongoose");

const SlotsSchema = new mongoose.Schema({
    
    userSlot:{
        type:Object,
        required:false,
    },

    chiefSlot:{
        type:Object,
        required:false,
    },

    preferencialSlot:{
        type:Object,
        required:false,
    },

    tecVehicleSlot:{
        type:Object,
        required:false,
    },

    parkingName:{
        type:String,
        required:false,
    },

    visitorSlot:{
        type:Object,
        required:false,
    }
});

const SlotsModel = mongoose.model("slots",SlotsSchema)
module.exports = SlotsModel