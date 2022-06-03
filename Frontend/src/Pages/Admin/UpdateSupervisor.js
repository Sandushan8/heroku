import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../../css/Admin/forms.css'
import { NavBarUSubtopic } from '../../Components/Admin/NavBarUSubtopic'
export const UpdateSupervisor= () => {
    const [id,setid] = useState(null)
  const [Name,setName] = useState('')
  const [ID,setID] = useState('')
  const [Contact,setContact] = useState('')
  const [Email,setEmail] = useState('')
  const [Faculty,setFaculty] = useState('')
  const [Position,setPosition] = useState('')
  const [area,setArea] = useState('')
  const [about,setAbout] = useState('')

 const submits = () =>{
    axios.put(`http://localhost:8000/users/supervisor/${id}`, 
    {s_name:Name,
    s_id:ID,
    faculty:Faculty,
    position:Position,
    email:Email,
    contact:Contact,
    area:area,
    about:about
  }).then(alert('Successfully Updated!'))
}
useEffect(()=>{
    setid(localStorage.getItem('id'))
    
},[])
console.log(id)
  return (
    <div>
        <NavBarUSubtopic/>
        <div className='formbody'>
        <h1 className='ttitle'>Update_Supervisor</h1>
        <div className='Formsup'>
        <label>ID</label><br/>
        <input type='text'  onChange={(e)=>{
          setID(e.target.value)
        }}/>
        <br/><br/>
        <label>Name</label><br/>
        <input type='text'  onChange={(e)=>{
          setName(e.target.value)
        }}/><br/><br/>
        <label>Email</label><br/>
        <input type='text'  onChange={(e)=>{
          setEmail(e.target.value)
        }}/><br/><br/>
        <label>Contact</label><br/>
        <input type='text' onChange={(e)=>{
          setContact(e.target.value)
        }}/><br/><br/>
        <label>Faculty</label><br/>
        <input type='text' onChange={(e)=>{
          setFaculty(e.target.value)
        }}/><br/><br/>
        <label>Position</label><br/>
        <input type='text' onChange={(e)=>{
          setPosition(e.target.value)
        }}/><br/><br/>
        <label>Area</label><br/>
        <input type='text' onChange={(e)=>{
          setArea(e.target.value)
        }}/><br/><br/>
        <label>About</label><br/>
        <input type='text' onChange={(e)=>{
          setAbout(e.target.value)
        }}/><br/><br/>
        <div className='formbuttons'>
        <Link to ='/Supervisor'><input type='submit' value=' Add ' className='formsubmit' onClick={submits}/></Link>
        <Link to ='/Supervisor'><input type='submit' value=' Cancel ' className='formcancel'/></Link>
        </div>
        </div>
        </div>
    </div>
  )
}