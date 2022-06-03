import React, { useState, useEffect } from "react";
import '../../css/Supervisor/table.css';
import Header from "../../Components/Supervisor/Header";
import axios from "axios";


function ProjectEvaluate() {
    
    const [myfeedback, setMyFeedback] = useState();
    const [selectedID, setSelectedID] = useState();
    const [feedbacks, setFeedbacks] = useState([]);
    const [id, setId] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {

        setEmail(localStorage.getItem('staffEmail'))
        setId(localStorage.getItem('sid'))

        getFeedback();

    }, [])


    function getFeedback() {
        axios.get('http://localhost:8000/supervisor/get/project/' + localStorage.getItem('staffEmail')).then((res) => {
            console.log(res.data);
            setFeedbacks(res.data);

        }).catch((err) => {
            console.log(err);
        })
    }


    function updateFeedback() {

        axios.put('http://localhost:8000/supervisor/update/evaluate/' + selectedID, { feedback:myfeedback }).then((res) => {
            console.log(res.data);
            window.location.reload(false);

        }).catch((err) => {
            console.log(err);

        })

    }


    return (

        <div>

            <Header />

            <div className='containet-topic'>

                <h2 className='TableName'>Project - Evaluation</h2>

                <table className='Request-table'>
                    <thead className="table-Head">
                        <tr className='table-row-heading'>
                            <th className='headings'>Group ID</th>
                            <th className='headings'>Documents</th>
                            <th className='headings'>Topic</th>
                            <th className='headings'>Feedback</th>
                            <th className='headings'>Action</th>
                        </tr>
                    </thead>

                    <tbody className="table-Body">
                        {/* <tr>
                            <td className='data'>SE_Grp_208</td>
                            <div className="view-section">
                                <td className='data-name'>Doc-SE-Grp_208
                                    <button className="viewbtn">View</button></td>
                            </div>
                            <td className='table-data'>Microservice</td>
                            <td className='table-data'>Pending...</td>

                            <td className='actionbtn'>
                                <button className='feedbackbtn'>Give Feedback</button>
                            </td>
                        </tr> */}

                        {
                            feedbacks.map(
                                feedback =>
                                    <tr className='table-data'>
                                        <td className='data'>{feedback.projectID}</td>
                                        <div className="view-section">
                                            <td className='data-name'>{feedback.documents}
                                                <button className="viewbtn">View</button></td>
                                        </div>
                                        <td className='table-data'>{feedback.projectTopic}</td>
                                        <td className='table-data'>{feedback.feedback}</td>

                                        <td className='actionbtn'>
                                            <button className='feedbackbtn' 
                                            data-toggle="modal" 
                                            data-target="#feedbackmodal" 
                                            onClick={(e) => setSelectedID(feedback._id)}>Give Feedback</button>
                                        </td>
                                    </tr>
                            )

                        }

                    </tbody>
                </table>



            </div>

            {/* feedback model */}

            <div class="modal fade" id="feedbackmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Feedback</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            
                           <textarea name="" id="" cols="60" rows="8" onChange={(e) => setMyFeedback(e.target.value)}></textarea>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button class="btn btn-primary" onClick={updateFeedback}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default ProjectEvaluate;