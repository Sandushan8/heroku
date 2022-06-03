const express = require("express");
const mogoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

//Ihill files
const iroutes = require('./Routes/Admin/Adminfunctions')

const app = express();
const upload = require("./middleware/upload")

//port Number Assign
const port = process.env.port || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
//Database Connection URL
const URL = process.env.DB_URL;

mogoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
});

//Check the database connection
const connection = mogoose.connection;
connection.once("open",()=>{
    console.log("This database is Connection success!");
})
app.use('/',(req,res)=>{
    res.send("Server started")
})

 app.use("/details",require("./Routes/Student/apiRoutes"));
 app.use("/topic",upload.single('avatar'),require("./Routes/Student/topicReg"));
 

//Thivanka Routes
app.use("/details",require("./Routes/Student/apiRoutes"));

//Punsisi Supervisor-Routes
const supervisorRouter = require('./Routes/Supervisor/apiRoutes.js');

app.use('/supervisor', supervisorRouter);

//Ihill Routes
//submission type & marking schemes
app.use('/submark',require('./Routes/Admin/Adminfunctions'))
//-------------------
//file uploads
app.use('/files',require('./Routes/Admin/Upload'))
//-------------------
//user routes
app.use('/users',require('./Routes/Admin/Users'))

//Display the working port
app.listen(port,()=>{
    console.log(`This Server is running in this ${port} port`)
})