const { default: mongoose } = require("mongoose");

const ReportsClientSchema = new mongoose.Schema({
    zone:{
        type:String,
        required:false
    },
    usage:{
        type:Number,
        required:false
    }

});

const ReportClientModel = mongoose.model("reportsbyclient",ReportsClientSchema,"reportsbyclient")
module.exports = ReportClientModel