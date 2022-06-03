const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    Title:{
        type:String   
    },
    Type:{
        type:String
    },
    Details:{
        type:String
    },
    MarksA:{
        type:String
    },
    SpecialI:{
        type:String
    }
})

const marking = mongoose.model('markingscheme',schema)
module.exports=marking