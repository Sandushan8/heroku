const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chat=new Schema({
    sender:String,
    message:String
})

const chatSchema = new Schema({
    groupID:{
        type:String,
        require:true
    },
    messages:[chat]
    
})
const Data = mongoose.model("chat",chatSchema);
module.exports = Data;