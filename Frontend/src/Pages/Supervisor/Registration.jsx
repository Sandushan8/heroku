import React, { useState } from "react";
// import '../styles/register.css';
import '../../css/Supervisor/register.css';
import axios from 'axios';

function Registration() {

    const [type, setType] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function saveUser() {
        const user = {
            staff_type:type,username,email,password
        }

        axios.post('http://localhost:8000/users/staff', user).then((res) => {
            alert(res.data);
            setType("");
            setUsername("");
            setEmail("");
            setPassword("");
            window.location.href = '/login';

        }).catch((err) => {
            alert(err);
        })

    }


    return (

        <div className="reg-body">
            <div className="register-container">

                <h2 className="reg-title">Sign Up</h2>

                <div className="reg-type-container">
                    <label className="type">Type</label>
                    <select name="subject" className="staff-Type" value={type} onChange={(e) => setType(e.target.value)}
                    required>
                        <option value="select-type" >Select Type</option>
                        <option value="supervisor" >Supervisor</option>
                        <option value="co-supervisor" >Co-Supervisor</option>
                        <option value="panel-member" >Panel-member</option>
                    </select>
                </div>

                <div className="reg-input-container">
                    <input type="text" 
                    className="register-details" 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div className="reg-input-container">
                    <input type="email" 
                    className="register-details" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="reg-input-container">
                    <input type="password" 
                    className="register-details" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="signup-btn-container">
                    <button className="signup-btn" onClick={saveUser}>SIGNUP</button>
                </div>

                <div className="reg-description">
                    <p className="ques">Already have an account? Login <a href="/login">here</a></p>
                </div>

            </div>
        </div>
    );
}

export default Registration;