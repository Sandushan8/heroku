import React, { useState, useEffect } from "react";
import '../../css/Supervisor/supervisorProfile.css';
import Avatar from "../../Images/Supervisor/avatar.png";
import axios from "axios";
import Header from "../../Components/Supervisor/Header";

function MyAccount() {

    const [name, setName] = useState();
    const [eid, setEid] = useState();
    const [id, setId] = useState();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const [position, setPosition] = useState();
    const [faculty, setFaculty] = useState();
    const [area, setArea] = useState();
    const [about, setAbout] = useState();

    useEffect(() => {

        setEmail(localStorage.getItem('staffEmail'))
        setId(localStorage.getItem('sid'))
        getStaff();
        getSupervisor();

    }, [])

    function getStaff() {


        axios.get('http://localhost:8000/supervisor/staff/' + localStorage.getItem('sid')).then((res) => {
            console.log(res.data)
            setName(res.data.username)

        }).catch((err) => {
            alert(err);
        })
    }

    function getSupervisor() {

        axios.get('http://localhost:8000/supervisor/getsupervisor/' + localStorage.getItem('staffEmail')).then((res) => {

            if (res.data != null) {
                setEid(res.data.s_id)
                setFaculty(res.data.faculty)
                setPosition(res.data.position)
                setContact(res.data.contact)
                setArea(res.data.area)
                setAbout(res.data.about)
            }

        }).catch((err) => {
            alert(err);
        })


    }




    return (

        <div>

            <Header />

            <div className='account-body'>

                <div className="account-container">

                    <div className="account-wrapper">

                        <div className="header-container">
                            <h2 className="account-title">Welcome {name} </h2>
                            <div className="btn-btn">
                                <button className="editbtn" onClick={(e) => { window.location.href = '/supervisorProfile' }}>EDIT</button>

                            </div>
                        </div>

                        <div className="Leftwrapper">
                            <img src={Avatar} className="profilephoto" width="130px" alt="profile picture" /><br /><br />
                            <a href="#" className="email"><b>{email}</b></a>
                            <p className="contact"><b>{contact}</b></p>
                        </div>

                        <div className="Rightwrapper">
                            <h3 className="sliit-ID">{eid}</h3>
                            <h4 className="position">{position}</h4>
                            <h4 className="faculty">{faculty}</h4>

                            <h5 className="heading1">Research Area</h5>
                            <p className="data1">{area}</p>

                            <h5 className="heading2">About me</h5>
                            <p className="data1">{about}</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}



export default MyAccount;









