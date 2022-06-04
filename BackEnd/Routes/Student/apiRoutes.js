const router = require("express").Router();
const StudentChat = require("../../Models/Student/Chat") 
// const LeaderReg = require("../Models/Student/leaderReg")
const StudentReg = require("../../Models/Student/studentReg")
const StudentRequest = require("../../Models/Student/requests")
const File = require("../../Models/Student/topicRequest")

//-------------------  Thivanka -  Student API Start -------------------------------------------------------------------------------------------------------

//chat routes
router.route("/messenger").post((req, res) => {
    const { groupID, messages } = req.body
    const chat = new StudentChat({ groupID: groupID, messages: messages })
    chat.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        return res.status(200).json({
            data: data
        })
    })
})

router.route("/chat/update/:groupID").put((req, res) => {
    let groupID = req.params.groupID;
    const messages = req.body;
    StudentChat.findOneAndUpdate({ groupID: groupID }, { $push: { messages: messages } })
        .then((data) => {
            res.json(data)
        }).catch((err) => {
            res.json(err)
        })
})

router.route("/one/:groupID").get((req, res) => {
    let groupID = req.params.groupID;
    StudentChat.find({ groupID: groupID })
        .then((data) => {
            res.json(data)
        }).catch((err) => {
            res.json(err)
        })
})

router.route("/chat").get((req, res) => {
    StudentChat.find()
        .then((data) => {
            res.json(data)
        }).catch((err) => {
            res.json(err)
        })
})

// student Registration

// router.route("/leader/register").post((req, res) => {
//     const { LeaderRegNo, LeaderName, LeaderEmail, LeaderContact, faculty } = req.body
//     const register = new LeaderReg({ LeaderRegNo: LeaderRegNo, LeaderName: LeaderName, LeaderEmail: LeaderEmail, LeaderContact: LeaderContact, faculty: faculty })
//     register.save((err, data) => {
//         if (err) {
//             return res.status(400).json({
//                 error: err
//             })
//         }
//         return res.status(200).json({
//             data: data
//         })
//     })
// })

router.route("/reg/:grpId/:id").post((req, res) => {
    let grpId = req.params.grpId;
    let id = req.params.id;
    const { LeaderRegNo, LeaderName, LeaderEmail, LeaderContact, faculty, password } = req.body
    const register = new StudentReg({ GrpID: grpId, ID: id, FistrMemberRegNo: LeaderRegNo, FistrMemberName: LeaderName, FistrMemberEmail: LeaderEmail, FistrMemberContact: LeaderContact, faculty: faculty, password: password })
    register.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        return res.status(200).json({
            data: data
        })
    })
})
//request a id 
router.route("/request/id").get((req, res) => {
    StudentReg.find()
        .exec(function (err, details) {
            var tot = 0;
            var max = 0;
            var newId = 1;
            while (tot < details.length) {
                if (max < details[tot].ID) {
                    max = details[tot].ID;
                }
                tot++;
            }
            newId = newId + parseInt(max);
            res.json(String(newId));
        })
})
// student login
router.route("/login/:id/:password").get((req, res) => {
    let id = req.params.id;
    let pass = req.params.password;
    StudentReg.find({ $and: [{ GrpID: { $eq: id } }, { password: { $eq: pass } }] })
        .exec(function (err, details) {
            res.json(details.length);
        })
})
// get leader's id
router.route("/leader/id/:id").get((req, res) => {
    let id = req.params.id;
    StudentReg.findOne({ GrpID: { $eq: id } })
        .exec(function (err, details) {
            res.json(details.FistrMemberRegNo);
        })
})
// get leader's name
router.route("/leader/name/:id").get((req, res) => {
    let id = req.params.id;
    StudentReg.findOne({ GrpID: { $eq: id } })
        .exec(function (err, details) {
            res.json(details.FistrMemberName);
        })
})


router.route("/second/id/:id").get((req, res) => {
    let id = req.params.id;
    StudentReg.findOne({ GrpID: { $eq: id } })
        .exec(function (err, details) {
            res.json(details.secondMemberRegNo);
        })
})

router.route("/second/name/:id").get((req, res) => {
    let id = req.params.id;
    StudentReg.findOne({ GrpID: { $eq: id } })
        .exec(function (err, details) {
            res.json(details.secondMemberName);
        })
})

router.route("/third/id/:id").get((req, res) => {
    let id = req.params.id;
    StudentReg.findOne({ GrpID: { $eq: id } })
        .exec(function (err, details) {
            res.json(details.thirdMemberRegNo);
        })
})

router.route("/third/name/:id").get((req, res) => {
    let id = req.params.id;
    StudentReg.findOne({ GrpID: { $eq: id } })
        .exec(function (err, details) {
            res.json(details.thirdMemberName);
        })
})

router.route("/fourth/id/:id").get((req, res) => {
    let id = req.params.id;
    StudentReg.findOne({ GrpID: { $eq: id } })
        .exec(function (err, details) {
            res.json(details.fourthMemberRegNo);
        })
})

router.route("/fourth/name/:id").get((req, res) => {
    let id = req.params.id;
    StudentReg.findOne({ GrpID: { $eq: id } })
        .exec(function (err, details) {
            res.json(details.fourthMemberName);
        })
})

router.route("/fifth/id/:id").get((req, res) => {
    let id = req.params.id;
    StudentReg.findOne({ GrpID: { $eq: id } })
        .exec(function (err, details) {
            res.json(details.fivthMemberRegNo);
        })
})

router.route("/fifth/name/:id").get((req, res) => {
    let id = req.params.id;
    StudentReg.findOne({ GrpID: { $eq: id } })
        .exec(function (err, details) {
            res.json(details.fivthMemberName);
        })
})

router.route("/sixth/id/:id").get((req, res) => {
    let id = req.params.id;
    StudentReg.findOne({ GrpID: { $eq: id } })
        .exec(function (err, details) {
            res.json(details.sixthMemberRegNo);
        })
})

router.route("/sixth/name/:id").get((req, res) => {
    let id = req.params.id;
    StudentReg.findOne({ GrpID: { $eq: id } })
        .exec(function (err, details) {
            res.json(details.sixthMemberName);
        })
})



// other members registration
router.route("/group/reg/:groupID").put((req, res) => {
    let GrpID = req.params.groupID;
    const { secondMemberRegNo, secondMemberName, thirdMemberRegNo, thirdMemberName, fourthMemberRegNo, fourthMemberName, fivthMemberRegNo, fivthMemberName, sixthMemberRegNo, sixthMemberName } = req.body;
    StudentReg.findOneAndUpdate({ GrpID: GrpID }, { secondMemberRegNo: secondMemberRegNo, secondMemberName: secondMemberName, thirdMemberRegNo: thirdMemberRegNo, thirdMemberName: thirdMemberName, fourthMemberRegNo: fourthMemberRegNo, fourthMemberName: fourthMemberName, fivthMemberRegNo: fivthMemberRegNo, fivthMemberName: fivthMemberName, sixthMemberRegNo: sixthMemberRegNo, sixthMemberName: sixthMemberName })
        .then((data) => {
            res.json(data)
        }).catch((err) => {
            res.json(err)
        })
})
// get gorup details
router.route("/group/:id").get((req, res) => {
    let id = req.params.id;
    StudentReg.findOne({ GrpID: { $eq: id } })
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
})

//student Request save  
router.route("/request/save").post((req, res) => {
    const { name, position, id, topic, topicDis, submitdate, email, status } = req.body
    const register = new StudentRequest({ Name: name, position: position, GrpID: id, Topic: topic, TopicDiscription: topicDis, submitdate: submitdate, email: email, status: status })
    register.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        return res.status(200).json({
            data: data
        })
    })
})
//find student request
router.route("/get/studentRequest/:id").get((req, res) => {
    let id = req.params.id;
    StudentRequest.find({ GrpID: { $eq: id } })
        .then(result => res.send(result))
        .catch((err) => {
            console.log(err);
        })
})

//delete requests

router.route("/remove/studentRequest/:id/:name").get((req, res) => {
    let id = req.params.id;
    let name = req.params.name;
    StudentRequest.deleteOne({ $and: [{ GrpID: { $eq: id } }, { Name: { $eq: name } }] })
        .then((curds) => {
            res.json(curds)
        })
        .catch((errr) => {
            res.json(errr);
        })
})

//topic request details

router.route("/request/save").post((req, res) => {
    const { ID } = req.body
    const { Faculty } = req.body
    const { Topic } = req.body
    const { Discription } = req.body
    const paths = req.file.path

    console.log("ID")

    const files = new File({ ID: ID,Faculty:Faculty,Topic:Topic,Discription:Discription,avatar: paths })
    files.save()
        .then((data) => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

//get topic request details

router.route("/file/get").get((req, res) => {
    File.find()
        .then((data) => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

//delete members findOneAndDelete  { FistrMemberName: { $eq: name },FistrMemberRegNo: { $eq: regNo } }||{ secondMemberName: { $eq: name },secondMemberRegNo: { $eq: regNo } }||{ thirdMemberName: { $eq: name },thirdMemberRegNo: { $eq: regNo } }||{ fourthMemberName: { $eq: name },fourthMemberRegNo: { $eq: regNo } }||{ fivthMemberName: { $eq: name },fivthMemberRegNo: { $eq: regNo } }|| { sixthMemberName: { $eq: name },sixthMemberRegNo: { $eq: regNo } }

// router.route("/student/delete/:id/:name/:reg").get((req, res) => {
//     let id = req.params.id;
//     let name = req.params.name;
//     let regNo=req.params.reg;

//     StudentReg.findByIdAndUpdate({$replaceOne: { input: "$FistrMemberName", find: name, replacement: "" }})
//         .then((data) => { 
//             res.json(data)
//         })
//         .catch(err => {
//             res.json(err)
//         })
// })

//-------------------  Thivanka - Student API End -------------------------------------------------------------------------------------------------------




module.exports = router;