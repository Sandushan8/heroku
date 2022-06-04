const router = require("express").Router();
const submission = require('../../Models/Admin/SubmissionT')
const markingscheme = require('../../Models/Admin/MarkingScheme')


//submission
router.route('/sub').get((req,res)=>{
    submission.find().then(sub=>{
        res.json(sub)
    })

    
})
router.route('/sub').post((req,res)=>{
    const sub = new submission({
        ID:req.body.ID, 
        Type:req.body.Type,
        Details:req.body.Details, 
        Deadline:req.body.Deadline, 
        Marks:req.body.Marks
    })
    sub
        .save(sub)
        .then(data=>{
            res.json(data)
        })
    
})
router.route('/sub/:id').put((req,res)=>{
    if(!req.body){
        return res.json({message:'Empty'})
    }
    
    const id = req.params.id
    submission.findByIdAndUpdate(id, req.body)
    .then(data=>{
            res.json(data)   
    })

})
router.route('/sub/:id').delete((req,res)=>{
    if(!req.body){
        return res.json({message:'Empty'})
    }
    
    const id = req.params.id
    submission.findByIdAndDelete(id)
    .then(
            res.json('Successfully deleted') 
    )
})

//marking scheme
router.route('/mark').get((req,res)=>{
    markingscheme.find().then(sub=>{
        res.json(sub)
    })
})
router.route('/mark').post((req,res)=>{
    const mscheme = new markingscheme({
        Title:req.body.Title, 
        Type:req.body.Type,
        Details:req.body.Details, 
        MarksA:req.body.MarksA, 
        SpecialI:req.body.SpecialI
    })
    mscheme
        .save(mscheme)
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.status(500).json({
                message:err.message||"Error in create"
            })
        })

})
router.route('/mark/:id').put((req,res)=>{
    if(!req.body){
        return res.send({message:'Empty'})
    }
    const id = req.params.id
    markingscheme.findByIdAndUpdate(id, req.body)
    .then(data=>{
            res.json(data)   
    })

})
router.route('/mark/:id').delete((req,res)=>{
    if(!req.body){
        return res.json({message:'Empty'})
    }
    const id = req.params.id
    markingscheme.findByIdAndDelete(id)
    .then(
            res.json('Successfully deleted') 
    )
})


module.exports = router