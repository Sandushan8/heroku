const mongoose = require('mongoose');

const evaluateSchema = new mongoose.Schema({

    projectID:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true
    },
    documents:{
        type:String,
        required:true,
    },
    projectTopic:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
    }
});

const Projects = new mongoose.model("ProjectEvaluate", evaluateSchema);

module.exports = Projects;