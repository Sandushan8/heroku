const router = require("express").Router();
const studentg = require('../../Models/Student/studentReg')
const student = require('../../Models/Admin/Student')
const staff = require('../../Models/Admin/registration')
const supervisor = require('../../Models/Supervisor/supervisor')
//student
router.route('/studentdetes').post((req,res)=>{
    const data = new student({
        ID:req.body.ID, 
        Name:req.body.Name,
        Email:req.body.Email, 
        Contact:req.body.Contact,
        Faculty:req.body.Faculty
    })
    data
        .save(data)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message||"Error in create"
            })
        })

})
router.route('/studentdetes').get((req,res)=>{
    student.find().then(data=>{
        res.json(data)
    })
})


router.route('/studentdetes/:id').put((req,res)=>{
    let id =req.params.id
    student.findByIdAndUpdate(id,req.body)
    .then(data=>{
        res.send(data)
    })
})
router.route('/studentdetes/:id').delete((req,res)=>{
    let id = req.params.id
    student.findByIdAndDelete(id)
    .then(
        res.send('Successfully deleted') 
    )
})



//staff
//supervisor
router.route("/supervisor").get((req, res) => {
    supervisor.find().then(data=>{
        res.json(data)
    })
})
router.route('/supervisor/:id').delete((req,res)=>{
    let id = req.params.id
    supervisor.findByIdAndDelete(id)
    .then(
        res.send('Successfully deleted') 
    )
})
router.route('/supervisor/:id').put((req,res)=>{
    let id =req.params.id
    supervisor.findByIdAndUpdate(id,req.body)
    .then(data=>{
        res.send(data)
    })
    console.log(req.body)
})

//cosupervisor
router.route("/cosupervisor").get((req, res) => {
    staff.find({staff_type:'Co-Supervisor'}).then(data=>{
        res.json(data)
    })
})
//panelmember
router.route("/panelmember").get((req, res) => {
    staff.find({staff_type:'Panel Member'}).then(data=>{
        res.json(data)
    })
})

router.route("/staff").get((req, res) => {
    staff.find().then(data=>{
        res.json(data)
    })
})

router.route('/staff/:id').put((req,res)=>{
    let id =req.params.id
    staff.findByIdAndUpdate(id,req.body)
    .then(data=>{
        res.send(data)
    })
})

router.route('/staff/:id').delete((req,res) =>{
    let id = req.params.id
    staff.findByIdAndDelete(id)
    .then(
        res.send('Successfully deleted') 
    )
})

router.route('/staff').post((req,res)=>{
    const data = new staff({
        staff_type:req.body.staff_type, 
        username:req.body.username,
        email:req.body.email, 
        password:req.body.password 
    })
    data
        .save(data)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message||"Error in create"
            })
        })
})

//fetch student groups
router.route("/student").get((req, res) => {
    studentg.find().then((data)=>{
        res.json(data)
    })
   })
//assign panel members
router.route('/student/:gid/:pmid').patch((req,res)=>{
    let groupid = req.params.gid
    let panelmid = req.params.pmid
    console.log(groupid,panelmid)
    studentg.updateOne({GrpID:groupid},{$set:{PanelM:panelmid}})
    .then((data)=>{
        res.json(data)
    })
})

module.exports = router