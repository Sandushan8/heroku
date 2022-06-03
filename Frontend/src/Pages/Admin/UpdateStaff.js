import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../../css/Admin/forms.css'
import { NavBarUSubtopic } from '../../Components/Admin/NavBarUSubtopic'
export const UpdateStaff= () => {
    const [id,setid] = useState(null)
  const [Type,setType] = useState('')
  const [Name,setName] = useState('')
  const [Email,setEmail] = useState('')
  const [password,setPassword] = useState('')

 const submits = () =>{
    axios.put(`http://localhost:8000/users/staff/${id}`, 
    {staff_type:Type,
    username:Name,
    email:Email,
    password:password
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
        <h1 className='ttitle'>Update_Staff</h1>
        <div className='Form'>
        <label>Staff Type</label><br/>
        
        <label> Co-Supervisor </label>
        <input type='radio' name='stype' value='Co-Supervisor'  onChange={(e)=>{
          setType('Co-Supervisor')
        }}/>
        <label> Panel Member </label>
        <input type='radio' name='stype' value='Panel-Member'  onChange={(e)=>{
          setType('Panel Member')
        }}/>
        
        
        <br/><br/>
        <label>User Name</label><br/>
        <input type='text'  onChange={(e)=>{
          setName(e.target.value)
        }}/><br/><br/>
        <label>Email</label><br/>
        <input type='text'  onChange={(e)=>{
          setEmail(e.target.value)
        }}/><br/><br/>
        <label>Password</label><br/>
        <input type='text' onChange={(e)=>{
          setPassword(e.target.value)
        }}/><br/><br/>
        <div className='formbuttons'>
        <Link to ='/AdminUser'><input type='submit' value=' Add ' className='formsubmit' onClick={submits}/></Link>
        <Link to ='/AdminUser'><input type='submit' value=' Cancel ' className='formcancel'/></Link>
        </div>
        </div>
        </div>
    </div>
  )
}
