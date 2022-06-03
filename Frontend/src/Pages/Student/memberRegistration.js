import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import '../../css/Student/memberRegistration.css';
import NavBar from "../../Components/Student/navBar";
import Footter from "../../Components/Student/footter";
import axios from "axios";


function MemberReg() {

    const Id = (sessionStorage.getItem('mySessionData'));

    const [firstMemberRegNo, SetfirstMemberRegNo] = useState();
    const [firstMemberName, SetfirstMemberName] = useState();
    const history = useHistory();

    const [secondMemberRegNo, SetsecondMemberRegNo] = useState();
    const [secondMemberName, SetsecondMemberName] = useState();
    const [thirdMemberRegNo, SetthirdMemberRegNo] = useState();
    const [thirdMemberName, SetthirdMemberName] = useState();
    const [fourthMemberRegNo, SetfourthMemberRegNo] = useState();
    const [fourthMemberName, SetfourthMemberName] = useState();
    const [fivthMemberRegNo, SetfivthMemberRegNo] = useState();
    const [fivthMemberName, SetfivthMemberName] = useState();
    const [sixthMemberRegNo, SetsixthMemberRegNo] = useState();
    const [sixthMemberName, SetsixthMemberName] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/details/leader/id/${Id}`)
            .then(res => {
                SetfirstMemberRegNo(res.data)
            })
            .catch(() => {
                alert('Retrive faild!!!');
            });
        axios.get(`http://localhost:8000/details/leader/name/${Id}`)
            .then(res => {
                SetfirstMemberName(res.data)
            })
            .catch(() => {
                alert('Retrive faild!!!');
            });

        axios.get(`http://localhost:8000/details/second/id/${Id}`)
            .then(res => {
                SetsecondMemberRegNo(res.data)
            })
            .catch(() => {
                alert('Retrive faild!!!');
            });
        axios.get(`http://localhost:8000/details/second/name/${Id}`)
            .then(res => {
                SetsecondMemberName(res.data)
            })
            .catch(() => {
                alert('Retrive faild!!!');
            });
        axios.get(`http://localhost:8000/details/third/id/${Id}`)
            .then(res => {
                SetthirdMemberRegNo(res.data)
            })
            .catch(() => {
                alert('Retrive faild!!!');
            });
        axios.get(`http://localhost:8000/details/third/name/${Id}`)
            .then(res => {
                SetthirdMemberName(res.data)
            })
            .catch(() => {
                alert('Retrive faild!!!');
            });

        axios.get(`http://localhost:8000/details/fourth/id/${Id}`)
            .then(res => {
                SetfourthMemberRegNo(res.data)
            })
            .catch(() => {
                alert('Retrive faild!!!');
            });
        axios.get(`http://localhost:8000/details/fourth/name/${Id}`)
            .then(res => {
                SetfourthMemberName(res.data)
            })
            .catch(() => {
                alert('Retrive faild!!!');
            });

        axios.get(`http://localhost:8000/details/fifth/id/${Id}`)
            .then(res => {
                SetfivthMemberRegNo(res.data)
            })
            .catch(() => {
                alert('Retrive faild!!!');
            });
        axios.get(`http://localhost:8000/details/fifth/name/${Id}`)
            .then(res => {
                SetfivthMemberName(res.data)
            })
            .catch(() => {
                alert('Retrive faild!!!');
            });

        axios.get(`http://localhost:8000/details/sixth/id/${Id}`)
            .then(res => {
                SetsixthMemberRegNo(res.data)
            })
            .catch(() => {
                alert('Retrive faild!!!');
            });
        axios.get(`http://localhost:8000/details/sixth/name/${Id}`)
            .then(res => {
                SetsixthMemberName(res.data)
            })
            .catch(() => {
                alert('Retrive faild!!!');
            });

    }, [])

    const data = {
        secondMemberRegNo,
        secondMemberName,
        thirdMemberRegNo,
        thirdMemberName,
        fourthMemberRegNo,
        fourthMemberName,
        fivthMemberRegNo,
        fivthMemberName,
        sixthMemberRegNo,
        sixthMemberName
    }

    const regHandler = () => {
        axios.put(`http://localhost:8000/details/group/reg/${Id}`, data)
            .then(() => {
                alert("Member Registration Done!!!")
                history.push("/studentProfile");
            })
            .catch(() => {
                alert('Member Registration Faild!!!');
            });
    }

    return (
        <div className="student_body">
            <NavBar />

            <div className="memberRegWrapper">
                <div className="regInputWrapper">
                    <h3 className="studentRegisterHeading">Student Registrations</h3>
                    <input type="text" className="memberDetailInputs" placeholder="1st Member Name..." value={firstMemberName} /><br />
                    <input type="text" className="memberDetailInputs" placeholder="1st Member Registration Number..." value={firstMemberRegNo} /><br />
                    <input type="text" className="memberDetailInputs" placeholder="2nd Member Name..." onChange={(event) => { SetsecondMemberName(event.target.value) }} value={secondMemberName} /><br />
                    <input type="text" className="memberDetailInputs" placeholder="2nd Member Registration Number..." onChange={(event) => { SetsecondMemberRegNo(event.target.value) }} value={secondMemberRegNo} /><br />
                    <input type="text" className="memberDetailInputs" placeholder="3rd Member Name..." onChange={(event) => { SetthirdMemberName(event.target.value) }} value={thirdMemberName} /><br />
                    <input type="text" className="memberDetailInputs" placeholder="3rd Member Registration Number..." onChange={(event) => { SetthirdMemberRegNo(event.target.value) }} value={thirdMemberRegNo} /><br />
                    <input type="text" className="memberDetailInputs" placeholder="4th Member Name..." onChange={(event) => { SetfourthMemberName(event.target.value) }} value={fourthMemberName} /><br />
                    <input type="text" className="memberDetailInputs" placeholder="4th Member Registration Number..." onChange={(event) => { SetfourthMemberRegNo(event.target.value) }} value={fourthMemberRegNo} /><br />
                    <input type="text" className="memberDetailInputs" placeholder="5th Member Name..." onChange={(event) => { SetfivthMemberName(event.target.value) }} value={fivthMemberName} /><br />
                    <input type="text" className="memberDetailInputs" placeholder="5th Member Registration Number..." onChange={(event) => { SetfivthMemberRegNo(event.target.value) }} value={fivthMemberRegNo} /><br />
                    <input type="text" className="memberDetailInputs" placeholder="6th Member Name..." onChange={(event) => { SetsixthMemberName(event.target.value) }} value={sixthMemberName} /><br />
                    <input type="text" className="memberDetailInputs" placeholder="6th Member Registration Number..." onChange={(event) => { SetsixthMemberRegNo(event.target.value) }} value={sixthMemberRegNo} /><br />

                    <input type="submit" className="studentDetailSubmitBtn" onClick={regHandler} />

                </div>
            </div>

            <Footter />
        </div>
    )
}
export default MemberReg;