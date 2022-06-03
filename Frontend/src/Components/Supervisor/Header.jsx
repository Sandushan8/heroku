import React from "react";
// import '../styles/header.css';
import '../../css/Supervisor/header.css';
// import {   faUserGraduate } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <div className="header-body">
            <div className="header">
                <div className="header-logo">
                {/* <FontAwesomeIcon icon={faUserGraduate} className="h-icon" /> */}
                <div className="logo-name">Research Project Management Tool</div>
                </div>
                <nav>
                    <ul className="nav_links">
                        {/* <li><a href="/home">Dashboard</a></li> */}
                        <li><a href="/myAccount">User</a></li>
                        <li><a href="/request">Request</a></li>
                        <li><a href="/topicEvaluate">Feedback</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;



