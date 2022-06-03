import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../../css/Admin/forms.css'
import { NavBarUSubtopic } from '../../Components/Admin/NavBarUSubtopic'
export const UpdateStudent= () => {
    const [id,setid] = useState(null)
  const [Name,setName] = useState('')
  const [ID,setID] = useState('')
  const [Contact,setContact] = useState('')
  const [Email,setEmail] = useState('')
  const [Faculty,setFaculty] = useState('')

 const submits = () =>{
    axios.put(`http://localhost:8000/users/studentdetes/${id}`, 
    {ID:ID,
    Name:Name,
    Email:Email,
    Contact:Contact,
    Faculty:Faculty
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
        <h1 className='ttitle'>Update_Student</h1>
        <div className='Form'>
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
        <div className='formbuttons'>
        <Link to ='/Student'><input type='submit' value=' Add ' className='formsubmit' onClick={submits}/></Link>
        <Link to ='/Student'><input type='submit' value=' Cancel ' className='formcancel'/></Link>
        </div>
        </div>
        </div>
    </div>
  )
}