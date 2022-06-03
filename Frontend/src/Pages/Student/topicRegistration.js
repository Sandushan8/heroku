import React, { useState } from "react";
import NavBar from "../../Components/Student/navBar";
import Footter from "../../Components/Student/footter";
import "../../css/Student/topicRegistration.css"
import axios from 'axios'


import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function TopicRegister() {
    const Id = (sessionStorage.getItem('mySessionData'))
    const [faculty, setfaculty] = useState();
    const [dis, setDis] = useState();
    const [topic, setTopic] = useState('');
    const [file, setFile] = useState('');
    const [loader, setLoader] = useState();
    const [alerts, setAlerts] = useState()

    const topicRegHandler = () => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 10000)
        const data = new FormData();
        data.append("ID", Id)
        data.append("Faculty", faculty)
        data.append("Topic", topic)
        data.append("Discription", dis)
        data.append("avatar", file)

        axios.post('http://localhost:8000/topic/request/save', data)

            .then((res) => {
                console.log(res.data)
                setAlerts(true)
                if(res){
                    setLoader(false)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="student_body">
            <div>
                <NavBar />
            </div>
            <center> {alerts ? <Stack sx={{ width: '95%' }} spacing={2}><Alert severity="success" onClose={() => { setAlerts(false) }}>Successfully Registered!</Alert></Stack> : null}</center>
            <div className="topicRegWrapper">
                <div className="inputWrapper">
                    <input type="text" placeholder="Group Id..." value={Id} className="inputArea" /> <br />
                    <select className="facSelect" onChange={(event) => { setfaculty(event.target.value) }} >
                        <option value="0" className="optBack">-Faculties-</option>
                        <option value="Business Management" className="optBack">Business Management </option>
                        <option value="Faculty of Engineering" className="optBack">Faculty of Engineering </option>
                        <option value="Faculty of Computing" className="optBack">Faculty of Computing</option>
                    </select><br />
                    <input type="text" placeholder="Topic..." className="inputArea" onChange={(event) => { setTopic(event.target.value) }} /><br />
                    <textarea rows="15" cols="57" className="topicDiscription" placeholder="Topic Discription..." onChange={((event) => { setDis(event.target.value) })} /><br />
                    <input type="file" className="fileSelect" onChange={(e) => { setFile(e.target.files[0]) }} /> <br />
                    <input type="button" onClick={topicRegHandler} className="topicRegbtn" value="Send" />
                </div>
                {loader ? <Backdrop sx={{ color: '#e09d39' }} open><CircularProgress color="inherit" /></Backdrop> : null}
            </div>
            <Footter />
        </div>
    )
}
export default TopicRegister;