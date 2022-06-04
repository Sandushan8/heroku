const router = require("express").Router();
const mongoose = require("mongoose");
const {GridFsStorage} = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const multer = require('multer')
require("dotenv").config();


const URL = process.env.DB_URL;

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
});
const connection = mongoose.connection;
let gfs
connection.once('open',()=>{
    console.log('Grid also connected')
    gfs = Grid(connection.db, mongoose.mongo)
    gfs.collection('uploads')
})

var storage = new GridFsStorage({
    url:URL,
    file: (req,file) =>{
        return new Promise((res,rej)=>{
            const filename = file.originalname
            const fileInfo = {
                filename: filename,
                bucketName:'uploads'
            }
            res(fileInfo)
        })
    }
})
const upload = multer({storage})

router.route('/upload').post(upload.single('file'),(req,res)=>{
    
    res.json({file: req.file})
})

router.route('/down').get((req,res)=>{
    gfs.files.findOne().then((files)=>{
        res.json(files)
    })
})

module.exports = router