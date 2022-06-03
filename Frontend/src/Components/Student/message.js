import React from "react";
import '../../css/Student/message.css'

function Message(props){
    const type=props.type;
    return(
        <div>
            <div className="messageWrapper" id={type}>
                <p>{props.mes}</p>
            </div>
        </div>
    )
}
export default Message;