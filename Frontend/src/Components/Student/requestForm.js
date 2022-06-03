import React,{ useState } from "react";
import "../../css/Student/requestForm.css"
import { useHistory } from "react-router-dom";
import axios from "axios"

function RequestForm(props) {
    const history=useHistory();
    const name = props.Name;
    const submitdate="2022.02.03";
    const id=sessionStorage.getItem('mySessionData');
    const [topic,setTopic]=useState();
    const [topicDis,setTopicDis]=useState();
    const position=props.ReqPosition;

    const data = {
        name,
        position,
        id,
        topic,
        topicDis,
        submitdate
    }

    const requestSentHandler = () => {
        axios.post('http://localhost:8000/details/request/save', data)
            .then(() => {
                alert("Request Send Successfull!");
                history.push("/myRequest")
            })
            .catch(() => {
                alert("try again later!");
            })        
    }

    return (props.trigger) ? (
        <div>
            <div className="reqFormWrapper">

                {props.children}
                <div className="reqInputWrapper">
                    <input type="text" placeholder="Name....." className="requestInputs" value={props.Name} /><br />
                    <input type="text" placeholder="Group ID...." className="requestInputs" value={id} /><br />
                    <input type="text" placeholder="Topic...." className="requestInputs" onChange={(event)=>setTopic(event.target.value)}/><br />
                    <textarea rows="7" cols="50" placeholder="Topic Discription...." className="requesttxtarea" onChange={(event)=>setTopicDis(event.target.value)}/><br />
                    <input type="button" value="Send" className="reqBtn" onClick={requestSentHandler} />
                </div>
            </div>
        </div>
    ) : "";
}
export default RequestForm;