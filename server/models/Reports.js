const { default: mongoose } = require("mongoose");

const ReportsSchema = new mongoose.Schema({
    Day:{
        type:String
    },
    usage:{
        type:Number
    }

    
});

const ReportModel = mongoose.model("reports",ReportsSchema)
module.exports = ReportModel