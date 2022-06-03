import React, {useState,useEffect} from 'react'
import { NavBarSGSub } from '../../Components/Admin/NavBarSGSub'
import { Link } from 'react-router-dom'
import axios from 'axios'
export const Panelmform = () => {
  const [GID,setGID] = useState(null)
  const [ID,setID] = useState('')
  const [apiData,setData] =useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/users/panelmember').then((getData)=>{
      setData(getData.data)
    })
  })
  useEffect(()=>{   
    setGID(localStorage.getItem('id')) 
  },[])
  

  const assignpanel=()=>{
    axios.patch(`http://localhost:8000/users/student/${GID}/${ID}`).then(alert('Successfully added!'))
  }


  return (
    <div>
        <NavBarSGSub/>
        <div className='formbody'>
        <label className='ttitle'>Add_Panel_Member</label><br/>
        <div className='Form'>
        <label>Panel Member Email</label><br/>
        <input type='text' placeholder='Enter Panel Member Email' onChange={(e)=>{
          setID(e.target.value)
        }}/><br/><br/> 
        <div className='formbuttons'>
          <Link to ='/AdminStudentg'><input type='submit' value=' Add ' className='formsubmit' onClick={assignpanel}/></Link>
          <Link to ='/AdminStudentg'><input type='submit' value=' Cancel ' className='formcancel'/></Link>
          </div>
          <br/>
        <h2>Panel Members</h2>
        <table className='table'>
          <tr className='headt'>
            <th>Name</th>
            <th>Email</th>     
          </tr>
          <tbody class='tbody'>
            {apiData.map((data)=>{
              return(
                <tr>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  </tr>
              )
            })} 
          </tbody>
        </table>
        <br/>
    </div> 
    </div>
    </div>
   
  )
}
