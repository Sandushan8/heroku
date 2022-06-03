import React,{useState} from "react";
import "../../css/Student/supervisorRequest.css";
import Footter from "../../Components/Student/footter";
import NavBar from "../../Components/Student/navBar";
import SupervisorDetail from "../../Components/Student/supervisorDetail";
import RequestForm from "../../Components/Student/requestForm";


function SupervisorRequest() {
    const [name,setName]=useState("Mr Frank N. Stein")
    const id=(sessionStorage.getItem('mySessionData'));
    const position="Supervisor"
  

    return (
        <div className="student_body">
            <NavBar />
            <div className="supervisorDetailWrapper">
                <div className="filterDetailsWrapper">
                    <input type="search" className="supervisorNameSearch" placeholder=" Search Supervisor Name..." />
                    <h3 className="heading">Supervisors</h3>
                    <input type="search" className="re-areaSearch" placeholder="Search Supervisor's Research Area..." />
                </div>
                <div className="supervisorsDetails clearFix" >
                    <SupervisorDetail Name={name} ID={id} Reqposition={position}/>
                    <SupervisorDetail Name={name} ID={id} Reqposition={position}/>
                    <SupervisorDetail Name={name} ID={id} Reqposition={position}/>
                    <SupervisorDetail Name={name} ID={id} Reqposition={position}/>
                </div>

                 

            </div>
            <Footter />
        </div>
    )
}

export default SupervisorRequest;