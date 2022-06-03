import React, { useState } from 'react';
import '../../css/Supervisor/supervisorProfile';
import Avatar from '../../Images/Supervisor/avatar.png';
import Header from '../../Components/Supervisor/Header';
import axios from 'axios';

function SupervisorProfile() {

    const [s_name, setS_Name] = useState('');
    const [s_id, setS_ID] = useState('');
    const [faculty, setFaculty] = useState('');
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [area, setArea] = useState('');
    const [about, setAbout] = useState('');

    function saveSupervisor() {

        const supervisor_data = {
            s_name,
            s_id,
            faculty,
            position,
            email,
            contact,
            area,
            about
        }

        axios.post("http://localhost:8000/supervisor/add", supervisor_data)
            .then((res) => {
                console.log(res.supervisor_data);
                alert(res.data);
                //alert("Supervisor successfully added!");
                setS_Name("");
                setS_ID("");
                setFaculty("");
                setPosition("");
                setEmail("");
                setContact("");
                setArea("");
                setAbout("");

            }).catch(err => {
                console.log(err)
                alert("Faild!")
            });
};

    return (

        <div>
        <Header/>

        <div className='profilebody'>

            <div className="mainContainer">

                <div className="main-wrapper">

                    <h2 className="profile-title">My Profile</h2>

                    <div className="left-wrapper">

                        <img src={Avatar} className="profileimg" width="130px" alt="profile picture" /><br />

                        {/* <div className="btnContainer">
                            <button className="uploadbtn" type='submit'>Select an image</button>
                        </div> */}

                    </div>


                    <div className="right-wrapper">

                        <div className="inputContainer">
                            <input type="text" className="profile-details" placeholder='Name' onChange={e => { setS_Name(e.target.value) }}/>
                        </div>
                        <div className="inputContainer">
                            <input type="text" className="profile-details" placeholder='ID' onChange={e => { setS_ID(e.target.value) }}/>
                        </div>
                        <div className="inputContainer">
                            <input type="text" className="profile-details" placeholder='Faculty name' onChange={e => { setFaculty(e.target.value) }}/>
                        </div>
                        <div className="inputContainer">
                            <input type="text" className="profile-details" placeholder='Position' onChange={e => { setPosition(e.target.value) }}/>
                        </div>
                        <div className="inputContainer">
                            <input type="text" className="profile-details" placeholder='Email' onChange={e => { setEmail(e.target.value) }}/>
                        </div>
                        <div className="inputContainer">
                            <input type="text" className="profile-details" placeholder='Mobile No' onChange={e => { setContact(e.target.value) }}/>
                        </div>

                        <div className="inputContainer">
                            <textarea className='textdetails' id="" cols="30" rows="8" placeholder='Research Area' onChange={e => { setArea(e.target.value) }}></textarea>
                        </div>
                        <div className="inputContainer">
                            <textarea className='textdetails' id="" cols="30" rows="8" placeholder='About me' onChange={e => { setAbout(e.target.value) }}></textarea>
                        </div>


                        <div className="insertbtnContainer">
                            <button className="insertbtn" type='submit' onClick={saveSupervisor}>SAVE</button>
                        </div>


                    </div>

                </div>

            </div>
        </div>

    </div>
    );
}

export default SupervisorProfile;