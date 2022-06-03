const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    GrpID:{
        type:String,
        require:true
    }, 
    Img:{
        type:String,
        require:true
    },  
    ID:{
        type:String,
        require:true
    },
    FistrMemberRegNo:{
        type:String,
        require:true
    },
    FistrMemberName:{
        type:String,
        require:true
    },
    FistrMemberEmail:{
        type:String,
        require:true
    },
    FistrMemberContact:{
        type:String,
        require:true
    },
    secondMemberRegNo:{
        type:String,
        require:true
    },
    secondMemberName:{
        type:String,
        require:true
    },
    thirdMemberRegNo:{
        type:String,
        require:true
    },
    thirdMemberName:{
        type:String,
        require:true
    },
    fourthMemberRegNo:{
        type:String,
        require:true
    },
    fourthMemberName:{
        type:String,
        require:true
    },
    fivthMemberRegNo:{
        type:String,
        require:true
    },
    fivthMemberName:{
        type:String,
        require:true
    },
    sixthMemberRegNo:{
        type:String,
        require:true
    },
    sixthMemberName:{
        type:String,
        require:true
    },
    faculty:{
        type:String,
        require:true
    }, 
    password:{
        type:String,
        require:true
    },
    PanelM:{
        type:String,
        require:true
    }   
    
    
})
const Data = mongoose.model("members_Registeration",userSchema);
module.exports = Data;