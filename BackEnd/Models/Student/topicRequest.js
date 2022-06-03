const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FileSchema = new Schema({
     
    ID:{
        type:String,
        require:true
    },
    Faculty:{
        type:String,
        require:true
    },
    Topic:{
        type:String,
        require:true
    },
    Discription:{
        type:String,
        require:true
    },
    
    avatar:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true
    },

    
})
const Data = mongoose.model("topic_Request",FileSchema);
module.exports = Data;