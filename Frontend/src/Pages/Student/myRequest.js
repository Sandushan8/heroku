import  React, {useEffect, useState } from "react"
import "../../css/Student/myRequest.css"
import Navbar from "../../Components/Student/navBar"
import Footer from "../../Components/Student/footter"
import Requests from "../../Components/Student/requests"
import axios from "axios"

function MyRequest() {

    const id = sessionStorage.getItem("mySessionData");
    const [data, setDetails] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/details/get/studentRequest/${id}`)
            .then(res => {
                setDetails(res.data)
            })
            .catch(() => {
                alert('Error retrieving data!!!');
            });
    }, [])

    return (
        <div className="student_body">
            <Navbar />
            <div className="myRequestWrapper">
                <div className="headingWrapper">
                    <h3 className="reqHeading">My Requests</h3>
                </div>
                    {data.map((detail) => (
                        <div>
                            <Requests name={detail.Name} topic={detail.Topic} Dis={detail.TopicDiscription} date={detail.submitdate} position={detail.position} />
                        </div>
                    ))}
            </div>
            <Footer />
        </div>
    )
}
export default MyRequest;