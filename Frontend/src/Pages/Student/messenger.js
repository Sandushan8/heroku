import React, { useEffect, useState } from "react";
import "../../css/Student/messenger.css"
import profileImg from '../../Images/Student/avatar.png'
import NavBar from "../../Components/Student/navBar";
import Footter from "../../Components/Student/footter";
import Message from "../../Components/Student/message";
import axios from "axios";

import { io } from "socket.io-client";
const socket = io.connect("http://localhost:3001")

function Messenger() {
    const [messageComponent, setMessageComponent] = useState();

    const [chat, setChat] = useState([]);
    const [message, setstudetnMessage] = useState();
    const [room, setRoom] = useState(sessionStorage.getItem('mySessionData'));
    const [sender, setSender] = useState("student");
    const [active, setActive] = useState(false)
    const [details, setDetails] = useState("")

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


    const studentMesSend = () => {
        if (room !== "") {
            socket.emit("join_room", room);
        }
        socket.emit("send_message", { message, room });

        //data send to backEnd from here
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

        axios.get(`http://localhost:8000/details/group/${room}`)
            .then(res => {
                setDetails(res.data)
            })
            .catch(() => {
                alert('Login faild!!!');
            });




    }, [socket])

    return (
        <div className="student_body">
            <NavBar />
            <div className="messagerWrapper clearfix" >
                {/* <button className="close">X</button> */}
                <div className="chatArea">
                    <div className="chatHeader clearfix">
                        <center><h4 className="grpID">{room}</h4></center>
                        <img src={details.Img} width="30px" className="proPic" />
                    </div>

                    <div className="messageArea">
                        <div >
                            {chat.map((users) => (
                                <div>
                                    {
                                        (typeof (users.messages) == 'object') ?
                                            <div>
                                                {users.messages.map((subrow) =>
                                                    <div>
                                                        <Message mes={subrow.message} type={subrow.sender} />
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

                    <div className="typing">
                        <input type="text" placeholder="Type something..." onChange={(event) => { setstudetnMessage(event.target.value), setActive(true) }} />
                        {active ? <button className="send" onClick={studentMesSend}>Send</button> : null}
                    </div>
                </div>
            </div >
            <Footter />
        </div >
    )
}
export default Messenger;