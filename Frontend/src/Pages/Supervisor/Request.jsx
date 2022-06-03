import React, { useState, useEffect } from "react";
import '../../css/Supervisor/table.css';
import Header from "../../Components/Supervisor/Header";
import axios from "axios";

function Request() {

    const [requests, setRequests] = useState([]);
    const [id, setId] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {

        setEmail(localStorage.getItem('staffEmail'))
        setId(localStorage.getItem('sid'))

        getRequests();

    }, [])


    function getRequests() {
        axios.get('http://localhost:8000/supervisor/get/myrequest/' + localStorage.getItem('staffEmail')).then((res) => {
            console.log(res.data);
            setRequests(res.data);

        }).catch((err) => {
            console.log(err);
        })
    }


    function updateRequest(id,status) {
        
        axios.put('http://localhost:8000/supervisor/update/request/' + id,{status:status}).then((res) => {
            console.log(res.data);
            window.location.reload(false);

        }).catch((err) => {
            console.log(err);
            
        })

    }

    return (

        <div>

            <Header />
            <div className='container'>
                <h2 className='TableName'>Student - Requets</h2>

                <table className='Request-table'>
                    <thead className="table-Head">
                        <tr className='table-row-heading'>
                            <th className='headings'>Group ID </th>
                            <th className='headings'>Topic</th>
                            <th className='headings'>Description </th>
                            <th className='headings'>Status </th>
                            <th className='headings'>Action </th>
                        </tr>
                    </thead>


                    <tbody className="table-Body">

                        {/* <tr className='table-data'>

                            <td className='data'>SE_GRP_78</td>
                            <td className='data'>Microservice</td>
                            <td className='data-name'>description</td>
                            <td>Pending...</td>
                            <td>
                                <button className='accept'>ACCEPT</button>
                                <button className='reject'>REJECT</button>
                            </td>

                        </tr> */}

                        {
                            requests.map(
                                request =>
                                    <tr className='table-data'>

                                        <td className='data'>{request.GrpID}</td>
                                        <td className='data'>{request.Topic}</td>
                                        <td className='data-name'>{request.TopicDiscription}</td>
                                        <td className='data-name'>{request.status}</td>
                                        <td className="action">
                                            <button className='accept' onClick={(e) => updateRequest(request._id,"Accepted")}>ACCEPT</button>
                                            <button className='reject'onClick={(e) => updateRequest(request._id,"Rejected")}>REJECT</button>
                                        </td>

                                    </tr>
                            )
                        }
                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Request;