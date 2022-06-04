const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    
    Name:{
        type:String,
        require:true
    },
    position:{
        type:String,
        require:true
    },
    GrpID:{
        type:String,
        require:true
    },
    Topic:{
        type:String,
        require:true
    },
    TopicDiscription:{
        type:String,
        require:true
    },
    submitdate:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
       
    
})
const Data = mongoose.model("student_Requests",requestSchema);
module.exports = Data;