import React, { useState, useRef } from "react";
import "../../css/Student/registration.css"
import Footter from "../../Components/Student/footter";
import LogOutNavBar from "../../Components/Student/LogOutNavBar";
import axios from "axios";


import emailjs from '@emailjs/browser';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Registration() {

    const [LeaderRegNo, setLeaderRegNo] = useState();
    const [LeaderName, setLeaderName] = useState();
    const [LeaderEmail, setLeaderEmail] = useState();
    const [LeaderContact, setLeaderContact] = useState();
    const [faculty, setfaculty] = useState();
    const [userID, setUserID] = useState();
    const [password, setPassword] = useState();
    const [loader, setLoader] = useState()
    const [alerts, setAlerts] = useState()



    const form = useRef();

    const data = {
        LeaderRegNo,
        LeaderName,
        LeaderEmail,
        LeaderContact,
        faculty,
        password
    }

    const registerHandler = () => {
        axios.get('http://localhost:8000/details/request/id')
            .then((res) => {
                register(res.data);
                setLoader(true)
            })
            .catch(() => {
                alert('Opss! Error in id');
            })
    }

    const register = (a) => {

        setTimeout(() => {
            setLoader(false)
        }, 5000)

        var id = "2022_REG_" + a
        setUserID(id);

        emailjs.sendForm('service_s5a6fro', 'template_yvadsjq', form.current, '4h9YOGTb2jqtSeqUW')
            .then((result) => {
                if (result.text == "OK") {
                    alert(`Your login credintials send to ${LeaderEmail}`);

                    axios.post(`http://localhost:8000/details/reg/${id}/${a}`, data)
                        .then(() => {
                            setLoader(false)
                            setAlerts(true)
                        })
                        .catch(() => {
                            alert('Opss! Error in reg');
                        })
                }
                else {
                    alert("Please try again!")
                }
            }, (error) => {
                alert(error.text);
            });


    }

    return (
        <div className="student_body">
            <div>
                <LogOutNavBar />
            </div>
            <center> {alerts? <Stack sx={{ width: '95%' }} spacing={2}><Alert severity="success" onClose={() => {setAlerts(false)}}>Successfully Registered!</Alert></Stack> : null}</center>
            <div className="RegistrationWrapper">
                <div className="inputFieldArea">
                    <input type="text" className="regInputFields" placeholder="Student Reg No(Leader)..." onChange={(event) => { setLeaderRegNo(event.target.value) }} /><br />
                    <input type="text" className="regInputFields" placeholder="Student Name..." onChange={(event) => { setLeaderName(event.target.value) }} /><br />
                    <input type="email" className="regInputFields" placeholder="Student Email(Personal)..." onChange={(event) => { setLeaderEmail(event.target.value) }} /><br />
                    <input type="tel" className="regInputFields" placeholder="Student Contact..." onChange={(event) => { setLeaderContact(event.target.value) }} /><br />
                    <input type="password" className="regInputFields" placeholder="Password..." /><br />
                    <input type="password" className="regInputFields" placeholder="Re-Password..." onChange={(event) => { setPassword(event.target.value) }} /><br />
                    <select className="regOption" onChange={(event) => { setfaculty(event.target.value) }} >
                        <option value="0" className="optBack">-Faculties-</option>
                        <option value="Business Management" className="optBack">Business Management </option>
                        <option value="Faculty of Engineering" className="optBack">Faculty of Engineering </option>
                        <option value="Faculty of Computing" className="optBack">Faculty of Computing</option>
                    </select>
                    <button className="registerbtn" onClick={registerHandler}>Register</button>
                    <form ref={form}>
                        <input type="hidden" value={userID} name="user_ID" /><br />
                        <input type="hidden" value={LeaderRegNo} name="studentReg" /><br />
                        <input type="hidden" value={LeaderName} name="name" /><br />
                        <input type="hidden" value={LeaderEmail} name="email" /><br />
                        <input type="hidden" value={password} name="password" /><br />
                    </form>

                </div>
                {loader ? <Backdrop sx={{ color: '#e09d39' }} open><CircularProgress color="inherit" /></Backdrop> : null}
            </div>
            <div>
                <Footter />
            </div>
        </div>
    )
}
export default Registration;