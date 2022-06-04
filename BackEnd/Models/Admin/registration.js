const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({

    staff_type:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const RegisterStaff = new mongoose.model("Staff", registerSchema);

module.exports = RegisterStaff;