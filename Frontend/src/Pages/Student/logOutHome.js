import React from "react";
import "../../css/Student/logOutHome.css"
import Logo from '../../Images/Student/edu.jpg'
import { Link } from "react-router-dom";
import Footter from "../../Components/Student/footter";
import LogOutNavBar from "../../Components/Student/LogOutNavBar";

const myBackground = {
    backgroundImage: `url(${Logo})`,
    backgroundSize: 'cover',
}

function LogOutHome() {
    return (
        <div className="student_body">
            <LogOutNavBar />

            <div style={myBackground} className="displayImage">
                <h2>“Education is not preparation for life,<br /> education is life itself.”</h2>
                <p>– John Dewey –</p>
                <div className="Login2 " >
                    <Link to="/signin"><button className="signin">Sign in</button></Link>
                    <Link to="/signup"><button className="signup">Sign up</button></Link>
                </div>
            </div>

            <Footter />


        </div>
    )
}
export default LogOutHome;