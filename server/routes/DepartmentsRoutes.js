const router = require('express').Router();
const DepartmentModel = require('../models/Departments')


router.get("/getDepartments",(req,res) => {
    
    DepartmentModel.find({}, (err,result) =>{
        if (err){
            res.json(err)
        } else {
            res.json(result)
        }
    })
})


module.exports = router;