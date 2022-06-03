const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
 
    ID:{
        type:String,
        require:true
    },
    Name:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Contact:{
        type:String,
        require:true
    },
    Faculty:{
        type:String,
        require:true
    }
})
const Data = mongoose.model("student",userSchema);
module.exports = Data;