const { default: mongoose } = require("mongoose");
const DepartmentsSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
    },
    code:{
        type:String,
        required:true,
    },
});

const DepartmentModel = mongoose.model("departments",DepartmentsSchema)
module.exports = DepartmentModel