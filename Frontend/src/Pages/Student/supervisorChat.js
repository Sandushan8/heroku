import "../../css/Student/supervisorChat.css"
import profileImg from '../../Images/Student/avatar.png'
import NavBar from "../../Components/Student/navBar";
import Footter from "../../Components/Student/footter";
import SMessage from "../../Components/Student/supervisorMessage";
import StudentList from "../../Components/Student/studentList";
import { useEffect, useState,React } from "react";


import axios from "axios";

import { io } from "socket.io-client";
const socket = io.connect("http://localhost:3001")

function SupervisorChat() {
    // socket io impl
    const [groups, setGroups] = useState([]);

    const [message, setsupervisorMessage] = useState();
    const [chat, setChat] = useState([]);
    const [room, setRoom] = useState("SE1020");
    const [sender, setSender] = useState("supervisor");

    const messages = {
        sender,
        message
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/details/one/${room}`)
            .then(res => {
                setChat(res.data)
            })
            .catch(() => {
                alert('Error retrieving data!!!');
            });
    }, [chat])

    useEffect(() => {
        axios.get('http://localhost:8000/details/chat')
            .then(res => {
                setGroups(res.data)
            })
            .catch(() => {
                alert('Error retrieving data!!!');
            });
    }, [])

    const supervisorMesSend = () => {
        if (room !== "") {
            socket.emit("join_room", room);
        }
        socket.emit("send_message", { message, room });

        axios.put(`http://localhost:8000/details/chat/update/${room}`, messages)
            .then(() => {
                axios.get(`http://localhost:8000/details/one/${room}`)
                    .then(res => {
                        setChat(res.data)
                    })
                    .catch(() => {
                        alert('Error retrieving data!');
                    });
            })
            .catch(() => {
                alert('Message could not send!');
            });
    };

    useEffect(() => {
        socket.on("receive_message", () => {
            
            axios.get(`http://localhost:8000/details/one/${room}`)
                .then(res => {
                    setChat(res.data)
                })
                .catch(() => {
                    alert('Error retrieving data!!!');
                });
        })
    }, [socket])


    return (
        <div>
            <NavBar />
            <div className="smessagerWrapper clearfix" >
                
                <div className="chatBody">
                    <div className="studentGroupList">
                        <div className="searchHeader">
                            <input type="search" placeholder="Search student groups...." className="listSearch" />
                        </div>
                        <div className="list">
                            
                        {groups.map((detail) => (
                            <StudentList Id={detail.groupID} />                          
                        ))}
                        </div>
                    </div>
                    <div className="schatArea">
                        <div className="schatHeader clearfix">
                            <center><h4 className="grpID">{room}</h4></center>
                            <img src={profileImg} width="30px" className="sproPic" />
                        </div>
                        <div className="smessageArea">
                            <div >
                                {chat.map((users) => (
                                    <div>
                                        {
                                            (typeof (users.messages) == 'object') ?
                                                <div>
                                                    {users.messages.map((subrow) =>
                                                        <div>
                                                            <SMessage mes={subrow.message} type={subrow.sender} />
                                                        </div>
                                                    )
                                                    }
                                                </div>
                                                :
                                                null
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="styping">
                            <input type="text" placeholder="Type something..." onChange={(event) => { setsupervisorMessage(event.target.value) }} />
                            <button className="ssend" onClick={supervisorMesSend}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footter />
        </div>
    )
}
export default SupervisorChat;