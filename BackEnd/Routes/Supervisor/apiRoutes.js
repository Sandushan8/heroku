const router = require('express').Router();
let Supervisors = require('../../Models/Supervisor/supervisor.js');
let RegisterStaff = require('../../Models/Admin/registration.js');
let Request = require('../../Models/Student/requests.js'); 
let Projects = require('../../Models/Supervisor/evaluate.js');


//Staff Handle part.

//Staff Registration
router.post('/register/save', async(req, res) => {
    const { staff_type,username,email,password } = req.body;
    console.log(req.body) 

    if(!staff_type || !username || !email || !password){
        res.status(404).json('Please fill the data');
    }

     try {

        const prestaff = await RegisterStaff.findOne({email:email});
        console.log(prestaff);

        if(prestaff){
            res.status(404).json('This email is already used!')
        }
        else{
            const addStaff = new RegisterStaff({
                staff_type,
                username,
                email,
                password
            });
             console.log(addStaff);

            await addStaff.save().then(() => {
                res.json('Staff member added!');

            }).catch((err) => {
                console.log(err);
            })
        }
         
     } catch (error) {
         res.status(404).json(error);
         
     }
});




//get staff member using by id
router.route('/staff/:id').get((req, res) => {
    RegisterStaff.findById(req.params.id)
    .then(supervisor => res.json(supervisor))
    .catch(err => res.status(400).json('Error: ' + err));
});

//get staff member using by email
router.route('/getsupervisor/:email').get((req, res) => {
    const email = req.params.email
    Supervisors.findOne({email})
    .then(supervisor => res.json(supervisor))
    .catch(err => res.status(400).json('Error: ' + err));
});



//Supervisor Handle Profile part.

//Add Supervisors.
router.route('/add').post(async (req, res) => {
    const { s_name, s_id, faculty, position, email, contact, area, about } = req.body;
    const supervisor = new Supervisors({

        s_name: s_name,
        s_id: s_id,
        faculty: faculty,
        position: position,
        email: email,
        contact: contact,
        area: area,
        about: about});

    await supervisor.save()
    .then((data) => {
       res.json('Your Profile is Created!')
    })
    .catch((err) =>{
        res.status(400).json('Error: ' + err)
    })
});

//Get all Supervisors
router.route('/').get((req, res) => {
    Supervisors.find()
    .then(supervisor => res.json(supervisor))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Get single Supervisor
router.route('/:id').get((req, res) => {
    Supervisors.findById(req.params.id)
    .then(supervisor => res.json(supervisor))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Supervisor
router.route('/:id').delete((req, res) => {
    Supervisors.findByIdAndDelete(req.params.id)
    .then(() => res.json('Supervisor Deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update Supervisor
router.route("/update/:id").put(async (req, res)=>{
    let uid = req.params.id;
    const {s_name, faculty, position, email, contact, area, about} = req.body;

    const updateUser = {s_name, faculty, position, email, contact, area, about}

    

    await Supervisors.findByIdAndUpdate(uid, updateUser).then(()=>{
        res.status(200).send({status: "User updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    });
});


//login supervisor
router.route("/staff/login").post(async (req, res) =>{
    const { email, password } = req.body;
    const supervisor = await RegisterStaff.findOne({ email:email });
    
    if(supervisor && (password == supervisor.password)){
       return res.json({ status: 'ok', supervisor: supervisor})
    }else {
       res.status(400);
       return res.json({ status: 'failed'})
   }

} );




//Supervisor Request part.

//Add request
router.route("/request/save").post(async (req, res) => {
    const { groupid,email,topic,status } = req.body;

    const request = new Request({
        GrpID: groupid,
        email: email,
        Topic: topic,
        status: status
    });

    await request.save()
     .then((data) => {
         res.json('Successfully added')

     })
     .catch((err) => {
         console.log(err);
     })
});


//Get all request
router.route('/get/request').get(async (req, res) => {
    
    await Request.find()
    .then((request) => {
        
        res.json(request)
    })
    .catch((err) => {
        console.log(err)
    })
});


//Get single request
router.route('/get/request/:id').get((req, res) => {
    Request.findById(req.params.id)
    .then(requests => res.json(requests))
    .catch(err => res.status(400).json('Error: ' + err));
});


//Get requests by email
router.route('/get/myrequest/:email').get((req, res) => {
    const email = req.params.email
    Request.find({email})
    .then(supervisor => res.json(supervisor))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update Request

router.route("/update/request/:id").put(async (req, res)=>{
    let rid = req.params.id;
    const { status } = req.body;

    const updateRequest = {status}

    await Request.findByIdAndUpdate(rid, updateRequest).then(()=>{
        res.status(200).send({status: "Request updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    });
});




//Supervisor Evaluate part.

//Add Evaluate details.
router.route("/project/add").post(async (req, res) => {
    const { projectID, documents, email, projectTopic, feedback } =req.body;

    const evaluate = new Projects({
        projectID: projectID,
        documents: documents,
        email: email,
        projectTopic: projectTopic,
        feedback: feedback
    });

    await evaluate.save()
     .then((data) => {
        res.json('Successfully added');

     }).catch((err) => {
         console.log(err);
     })
});


//Get all Evaluate details
router.route('/get/evaluates').get((req, res) => {
    Projects.find()
    .then(evaluate => res.json(evaluate))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Get single evaluate detail
router.route('/get/evaluate/:id').get((req, res) => {
    Projects.findById(req.params.id)
    .then(evaluates => res.json(evaluates))
    .catch(err => res.status(400).json('Error: ' + err));
});

//get projects by email
router.route('/get/project/:email').get((req, res) => {
    const email = req.params.email
    Projects.find({email})
    .then(evaluate => res.json(evaluate))
    .catch(err => res.status(400).json('Error: ' + err)) ;
});


//update feedback
router.route("/update/evaluate/:id").put(async (req, res)=>{
    let eid = req.params.id;
    const { feedback } = req.body;

    const updateEvaluate = {feedback}

    await Projects.findByIdAndUpdate(eid, updateEvaluate).then(()=>{
        res.status(200).send({status: "Request updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    });
});


module.exports = router;