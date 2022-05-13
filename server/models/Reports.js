const { default: mongoose } = require("mongoose");

const ReportsSchema = new mongoose.Schema({
    Day:{
        type:String,
        required:false
    },
    usage:{
        type:Number,
        required:false
    }

});

const ReportModel = mongoose.model("reports",ReportsSchema)
module.exports = ReportModel