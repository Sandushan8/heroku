import React from "react";
import "../../css/Student/logOutNav.css"
import { Link } from "react-router-dom";

function LogOutNavBar(){
    return(
        <div className="navi clearfix">
                <div className="navLinks">
                    <ul>
                        <Link to="/"><li>HOME</li> </Link>
                        <li>NOTICES</li>
                        <li>SUBMISSIONS</li>
                        <li>DOWNLOADS</li>
                    </ul>
                </div>
                <div className="Login " >
                <Link to="/signin"><button className="signin">Sign in</button></Link>
                <Link to="/signup"><button className="signup">Sign up</button></Link> 
                </div>
            </div>
    )
}
export default LogOutNavBar;