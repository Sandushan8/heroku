import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { NavBarUploadsSub } from '../../Components/Admin/NavBarUploadsSub'
import '../../css/Admin/forms.css'
import { Link } from 'react-router-dom'

export const UpdateMark = () => {
  const [id,setid] = useState(null)
  const [MTitle,setMTitle] = useState(null)
  const [MType,setMType] = useState(null)
  const [MDetails,setMDetails] = useState(null)
  const [MMarksA,setMMarksA] = useState(null)
  const [MSpecialI,setMSpecialI] = useState(null)

  const [Title,setTitle] = useState('')
  const [Type,setType] = useState('')
  const [Details,setDetails] = useState('')
  const [MarksA,setMarksA] = useState('')
  const [SpecialI,setSpecialI] = useState('')
  
  useEffect(()=>{
    setid(localStorage.getItem('mid'))
    setMTitle(localStorage.getItem('MTitle'))
    setMType(localStorage.getItem('MTypes'))
    setMDetails(localStorage.getItem('MDetails'))
    setMMarksA(localStorage.getItem('MMarks'))
    setMSpecialI(localStorage.getItem('MSpecial'))
    
  },[])

  const submitM = () =>{
    axios.put(`http://localhost:8000/submark/mark/${id}`, 
    {Title:Title, 
    Type:Type,
    Details:Details,
    MarksA:MarksA,
    SpecialI:SpecialI
  }).then(alert('Successfully Updated!'))
}

  
  
  console.log(id)
    
  
  return (
    <div>
      <NavBarUploadsSub/>
        <div className='formbody'>
        <h1 className='ttitle'>Update_Marking_Scheme</h1>
        <div className='Form'>
        <label>Title</label><br/>
        <input type='text' placeholder={MTitle} onChange={(e)=>{
          setTitle(e.target.value)
        }}/><br/><br/>
        <label>Type</label><br/>
        <input type='text' placeholder={MType} onChange={(e)=>{
          setType(e.target.value)
        }}/><br/><br/>
        <label>Details</label><br/>
        <input type='text' placeholder={MDetails} onChange={(e)=>{
          setDetails(e.target.value)
        }}/><br/><br/>
        <label>Marks allocation</label><br/>
        <input type='text' placeholder={MMarksA} onChange={(e)=>{
          setMarksA(e.target.value)
        }}/><br/><br/>
        <label>Special Instructions</label><br/>
        <input type='text' placeholder={MSpecialI} onChange={(e)=>{
          setSpecialI(e.target.value)
        }}/><br/><br/>
        <div className='formbuttons'>
        <Link to ='/AdminUploads'><input type='submit' value=' Add ' className='formsubmit' onClick={submitM}/></Link>
        <Link to ='/AdminUploads'><input type='submit' value=' Cancel ' className='formcancel'/></Link>
        </div>
        </div>
        </div>
    </div>
  )
}
