import React, {useState} from 'react'
import axios from 'axios'
import { NavBarUploadsSub } from '../../Components/Admin/NavBarUploadsSub'
import { Link } from 'react-router-dom'

export const NewSub = () => {
  const [ID,setID] = useState('')
  const [Type,setType] = useState('')
  const [Details,setDetails] = useState('')
  const [Deadline,setDeadline] = useState('')
  const [Marks,setMarks] = useState('')
  
  const submitA = () =>{
    axios.post('http://localhost:8000/submark/sub', 
    {ID:ID, 
    Type:Type,
    Details:Details,
    Deadline:Deadline,
    Marks:Marks}).then(alert('Successfully added!'))
  }

  return (
    <div>
      <NavBarUploadsSub/>
        <div className='formbody'>
        <label className='ttitle'>New_Submission</label><br/>
        <div className='Form'>
        <label>Submission ID</label><br/>
        <input type='text' onChange={(e)=>{
          setID(e.target.value)
        }}/><br/><br/>
        <label>Type</label><br/>
        <input type='text' onChange={(e)=>{
          setType(e.target.value)
        }}/><br/><br/>
        <label>Details</label><br/>
        <input type='text' onChange={(e)=>{
          setDetails(e.target.value)
        }}/><br/><br/>
        <label>Deadline</label><br/>
        <input type='date' className='date' onChange={(e)=>{
          setDeadline(e.target.value)
        }}/><br/><br/>
        <label>Marks allocated</label><br/>
        <input type='text' onChange={(e)=>{
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
