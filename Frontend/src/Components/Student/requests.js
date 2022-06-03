import React from 'react'
import "../../css/Student/request.css"
import axios from 'axios'

function Requests(props) {
  const id = sessionStorage.getItem('mySessionData')
  const name = (props.name)

  const reqDeleteHandler = () => {
    const confirmBox = window.confirm("Are you sure want to remove this request?")
    if (confirmBox === true) {
      axios.get(`http://localhost:8000/details/remove/studentRequest/${id}/${name}`)
        .then(() => {
          alert("Request Deleted Successfully!")
          window.location.reload(false)
        })
        .catch(() => {
          alert("Failed")
        })
    }
  }
  return (
    <div className="requestWrapper">
      <h3 className="superName">{props.name}</h3><p className="Reqposition">({props.position})</p>
      <p className="Reqtopic">{props.topic}</p>
      <textarea rows="4" cols="80" className="topicDis" value={props.Dis} disabled />
      <p className="ReqDate">{props.date}</p>
      <button onClick={reqDeleteHandler} className="reqDeletebtn">Remove</button>
    </div>
  )
}
export default Requests