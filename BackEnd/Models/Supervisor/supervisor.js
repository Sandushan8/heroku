const mongoose = require('mongoose');

const supervisorSchema = new mongoose.Schema({

    s_name:{
        type:String
        
    },
    s_id:{
        type:String,
        unique:true
        
    },
    faculty:{
        type:String
    },
    position:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    contact:{
        type:String
    },
    area:{
        type:String
    },
    about:{
        type:String
    }

});

const Supervisors = new mongoose.model("Supervisors", supervisorSchema);

module.exports = Supervisors;
