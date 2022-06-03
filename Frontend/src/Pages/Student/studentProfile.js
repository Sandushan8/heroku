import React, { useEffect, useState } from "react";
import "../../css/Student/studentProfile.css"
import NavBar from "../../Components/Student/navBar";
import Footter from "../../Components/Student/footter";
import axios from "axios";
 

function StudentProfile() {

    const Id = (sessionStorage.getItem('mySessionData'));
    const [details, setDetails] = useState("");
    const [dis, setDis] = useState("The illustration (examples) paragraph is useful when we want to explain or clarify something.");
    const [topic, setTopic] = useState("The illustration (examples) paragraph is useful when we want to explain or clarify something.");
    const [file, setFile] = useState('');

    

    useEffect(() => {
        axios.get(`http://localhost:8000/details/group/${Id}`)
            .then(res => {
                setDetails(res.data)
            })
            .catch(() => {
                alert('Login faild!!!');
            });
    }, [details])

    const updateHandler = () => {
        const data = new FormData();
        data.append("avatar", file)
        axios.put(`http://localhost:8000/topic/profilepic/update/${Id}`, data)
            .then(res => {
                
                setDetails(res.data)

            })
            .catch(() => {
                alert('Login faild!!!');
            });
    }

    return (
        <div className="student_body">
            <NavBar />
            <div className="profileWrapper">
                <div className="profileLeftWrapper">
                    <img src={details.Img} className="profileAvatar" width="130px" />
                    <input type="file" className="imgUploader" onChange={(e) => { setFile(e.target.files[0]) }} />
                    <input type="text" className="proGroupID" value={details.GrpID} disabled />
                    <center> <hr className="leftSeparator" /></center>
                    <textarea rows="5" cols="30" className="topic" disabled>{topic}</textarea>
                </div>
                <div className="profileRightWrapper">
                    <input type="text" className="stdidDetails" value={details.FistrMemberRegNo} size="10" />
                    <input type="text" className="stdNameDetails" value={details.FistrMemberName} size="40" /><br />
                    <input type="text" className="stdidDetails" value={details.secondMemberRegNo} size="10" />
                    <input type="text" className="stdNameDetails" value={details.secondMemberName} size="40" /><br />
                    <input type="text" className="stdidDetails" value={details.thirdMemberRegNo} size="10" />
                    <input type="text" className="stdNameDetails" value={details.thirdMemberName} size="40" /><br />
                    <input type="text" className="stdidDetails" value={details.fourthMemberRegNo} size="10" />
                    <input type="text" className="stdNameDetails" value={details.fourthMemberName} size="40" /><br />
                    <input type="text" className="stdidDetails" value={details.fivthMemberRegNo} size="10" />
                    <input type="text" className="stdNameDetails" value={details.fivthMemberName} size="40" /><br />
                    <input type="text" className="stdidDetails" value={details.sixthMemberRegNo} size="10" />
                    <input type="text" className="stdNameDetails" value={details.sixthMemberName} size="40" />
                    <center> <hr className="separator" /></center>
                    <textarea rows="15" cols="57" className="discription" placeholder="Topic Discription..." onChange={((event) => { setDis(event.target.value) })} >{dis}</textarea>
                    <input type="button" className="updatebtn" value="Update" onClick={updateHandler} />
                </div>
            </div>

            <Footter />

        </div>
    )
}
export default StudentProfile;