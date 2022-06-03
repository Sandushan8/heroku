import React,{ useState } from "react";
import "../../css/Student/supervisorDetail.css"
import Avatar from "../../Images/Student/avatar.png"
import RequestForm from "./requestForm";


function SupervisorDetail(props) {    
    const [btnpopup, Setbtnpopup] = useState(false)
    const [ReqbtnEffect, SetReqbtnEffect] = useState("Request")
 
    const reqFormHandler = () => {
        if (btnpopup === false) {
            Setbtnpopup(true);
            SetReqbtnEffect("Close")
        }
        else {
            Setbtnpopup(false);
            SetReqbtnEffect("Request")
        }
    }

    return (
        <div className="detailWrapper clearFix">
            <div className="supervisorAvatarWraper ">
                <img src={Avatar} className="supervisorAvatar" width="60px" />
                <textarea rows="1" cols="32" className="supervisorName" disabled>Mr Frank N. Stein</textarea>
                <textarea rows="2" cols="32" className="supervisorName" disabled>frankNStein111@gmail.com </textarea>
            </div>
            <div className="supervisorInfoWraper">
                <h4 className="re-Heading">Biological and Biotechnological Sciences</h4>
                <textarea rows="6" cols="65" className="re-Discription" disabled>An academic discipline or field of study is known as a branch of knowledge. It is taught as an accredited part of higher education. A scholar's discipline is commonly defined and recognized by a university faculty. That person will be accredited by learned societies to which they belong along with the academic journals in which they publish. However, no formal criteria exist for defining an academic discipline.</textarea>
                <input type="button" className="requestBtn" value={ReqbtnEffect} onClick={reqFormHandler} />
            </div>

            <RequestForm trigger={btnpopup} Name={props.Name} Id={props.ID} ReqPosition={props.Reqposition}/>

        </div>
    )
}
export default SupervisorDetail;