import React from "react";
import { Link } from "react-router-dom";
import "../../css/Student/homePage.css"
import Notices from "../../Components/Student/notice.js";
import NavBar from "../../Components/Student/navBar";
import Footter from "../../Components/Student/footter";


function HomePage() {
   
    return (
        <div className="student_body">
            <NavBar />
            
            <div className="registration clearfix">
                <div className="registration-Links ">
                <Link to="/topicRegister"><a className="a1">Topics Registrations</a></Link>
                    <Link to="/supervisorRequest"><a className="a2">Request a Supervisor </a></Link>
                    <Link to="/studentGroup"> <a className="a3">Create student groups </a></Link><br /><br /><br />
                    <Link to="/memberRegistration"> <a className="a4">Members Registration</a></Link>
                    <Link to="/coSupervisorRequest"> <a className="a5">Request a co-supervisor </a></Link>
                    <Link to="/studentProfile"> <a className="a6">Edit student details </a></Link>
                </div>
            </div>
            <div className="announcement">
                <h4>SPECIAL ANNOUNCEMENT... </h4>
            </div>
            <div>
                <Notices />
                <Notices />
                <Notices />
                <Notices />
            </div>

            <Footter />



        </div>
    )

}
export default HomePage;