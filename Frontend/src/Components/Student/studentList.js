import React from "react";
import "../../css/Student/studentList.css"
import profileImg from '../../Images/Student/avatar.png'

function StudentList(props){
    return(
        <div className="grpNameWrapper">
            <img src={profileImg} width="30px" className="grpProfileImg" />
            <h4 className="grpName">{props.Id}</h4>
        </div>
    )
}
export default StudentList;