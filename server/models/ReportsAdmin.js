const { default: mongoose } = require("mongoose");

const ReportsAdminSchema = new mongoose.Schema({
    zone:{
        type:String,
        required:false
    },
    usage:{
        type:Number,
        required:false
    }

});

const ReportAdminModel = mongoose.model("reportsbyadmin",ReportsAdminSchema,"reportsbyadmin")
module.exports = ReportAdminModel