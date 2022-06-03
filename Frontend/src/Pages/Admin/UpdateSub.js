import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { NavBarUploadsSub } from '../../Components/Admin/NavBarUploadsSub'
import { Link } from 'react-router-dom'

export const UpdateSub = () => {
  const [sid,setsid] = useState(null)
  const [SID,setSID] = useState(null)
  const [SType,setSType] = useState(null)
  const [SDetails,setSDetails] = useState(null)
  const [SMarks,setSMarks] = useState(null)


  const [ID,setID] = useState('')
  const [Type,setType] = useState('')
  const [Details,setDetails] = useState('')
  const [Deadline,setDeadline] = useState('')
  const [Marks,setMarks] = useState('')
  
  const submitA = () =>{
    axios.put(`http://localhost:8000/submark/sub/${sid}`, 
    {ID:ID, 
    Type:Type,
    Details:Details,
    Deadline:Deadline,
    Marks:Marks}).then(alert('Successfully Updated!'))
  }

  useEffect(()=>{
    setsid(localStorage.getItem('id'))
    setSID(localStorage.getItem('SID'))
    setSType(localStorage.getItem('STypes'))
    setSDetails(localStorage.getItem('SDetails'))
    
    setSMarks(localStorage.getItem('SMarks'))
  },[])


  return (
    <div>
      <NavBarUploadsSub/>
        <div className='formbody'>
        <label className='ttitle'>Update_Submission</label><br/>
        <div className='Form'>
        <label>Submission ID</label><br/>
        <input type='text' placeholder={SID} onChange={(e)=>{
          setID(e.target.value)
        }}/><br/><br/>
        <label>Type</label><br/>
        <input type='text' placeholder={SType} onChange={(e)=>{
          setType(e.target.value)
        }}/><br/><br/>
        <label>Details</label><br/>
        <input type='text' placeholder={SDetails} onChange={(e)=>{
          setDetails(e.target.value)
        }}/><br/><br/>
        <label>Deadline</label><br/>
        <input type='date' className='date' onChange={(e)=>{
          setDeadline(e.target.value)
        }}/><br/><br/>
        <label>Marks allocated</label><br/>
        <input type='text' placeholder={SMarks} onChange={(e)=>{
          setMarks(e.target.value)
        }}/><br/><br/>
        <div className='formbuttons'>
          <Link to ='/AdminUploads'><input type='submit' value=' Add ' className='formsubmit' onClick={submitA}/></Link>
          <Link to ='/AdminUploads'><input type='submit' value=' Cancel ' className='formcancel'/></Link>
        </div>
        </div>
        </div>
    </div>
  )
}