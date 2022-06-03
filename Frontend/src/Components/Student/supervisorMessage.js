import React from "react";
import '../../css/Student/supervisorMessage.css'


function SupervisorMessage(props){
    const type=props.type;
    return(
        <div>
            <div className="smessageWrapper" id={type}>
                <p className="studentMes">{props.mes}</p>
            </div>
        </div>
    )
}
export default SupervisorMessage;