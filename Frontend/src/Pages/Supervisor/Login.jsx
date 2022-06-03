import React, { useState } from "react";
// import '../styles/signin.css';
import '../../css/Supervisor/signin.css';
import axios from 'axios';



function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function authUser() {

        const staff = { email, password }

        axios.post('http://localhost:8000/supervisor/staff/login', staff).then((res) => {
            localStorage.setItem('staffEmail', res.data.supervisor.email);
            localStorage.setItem('sid', res.data.supervisor._id);
            alert("Login Success!");
            window.location.href = '/myAccount';

        }).catch((err)=>{
            alert(err);
        })

    }

    return (  
        <div className="body">

            <div className="main-container">
                 <h2 className="title">WelCome</h2>

                 <div className="input-container">
                     <input type="email" 
                     className="login-details" 
                     placeholder="Email"
                     onChange={(e)=> setEmail(e.target.value)}/>
                 </div>

                 <div className="input-container">
                     <input type="password" 
                     className="login-details" 
                     placeholder="Password"
                     onChange={(e)=> setPassword(e.target.value)} />
                 </div>

                 <div className="btn-container">
                     <button className="login-btn" onClick={authUser}>LOGIN</button>
                 </div>

            </div>
           
        </div>
    );
}

export default Login;
