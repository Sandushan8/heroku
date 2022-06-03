const router = require("express").Router();
const File = require("../../Models/Student/topicRequest")
const ProfilePic = require("../../Models/Student/studentReg")
const clodinary = require('../../middleware/cloudinary')


router.route("/request/save").post((req, res) => {
    const { ID } = req.body
    const { Faculty } = req.body
    const { Topic } = req.body
    const { Discription } = req.body
    const paths = req.file.path
    clodinary.uploader.upload(paths,
        function (error, result) {
            if (error) {
                console.log(error)
            }
            else {
                let links = result.secure_url
                saveData(ID, Faculty, Topic, Discription, paths, links)
            }
        }
    );
    function saveData(Id, faculty, topic, discription, path, url) {
        const files = new File({ ID: Id, Faculty: faculty, Topic: topic, Discription: discription, avatar: path, url: url })
        files.save()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    }
})
//insert a profile pic


router.route("/profilepic/update/:groupID").put((req, res) => {
    let GrpID = req.params.groupID;
    const paths = req.file.path
    clodinary.uploader.upload(paths,
        function (error, result) {
            if (error) {
                console.log(error)
            }
            else {
                let links = result.secure_url
                saveProPic(GrpID, links)
            }
        }
    );
    function saveProPic(Id, url) {
        ProfilePic.findOneAndUpdate({ GrpID: Id }, { Img: url})
            .then((data) => {
                res.json(data)
            }).catch((err) => {
                res.json(err)
            })
    }

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

module.exports = router;