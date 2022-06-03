import React, {useState,useEffect} from 'react'
import { NavBarUSubtopic } from '../../Components/Admin/NavBarUSubtopic'
import axios from 'axios'
import { Link } from 'react-router-dom'
export const CoSupervisor = () =>{
  const [apiData,setData] =useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/users/cosupervisor').then((getData)=>{
      setData(getData.data)
    })
  })

  const setID =(id)=>{
    localStorage.setItem('id',id)
  }
  const passdelete =(id) =>{
    axios.delete(`http://localhost:8000/users/staff/${id}`).then(alert('Successfully Deleted!'))
    console.log(id)
  }

    return(
      <div>
      <NavBarUSubtopic/>
        <div className='usercontainer'>
        <label className='ttitle'>Co-Supervisor</label>
        <table className='table'>
          <tr className='headt'>
            <th>Role</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th className='upd'>Update</th>
            <th className='upd'>Delete</th>
          </tr>
          <tbody class='tbody'>
            {apiData.map((data)=>{
              return(
                <tr>
                  <td>{data.staff_type}</td>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                  <td><Link to='/UpdateStaff'><button className='update' onClick={()=>setID(data._id)}>Update</button></Link></td>
                  <td><button className='delete' onClick={()=>passdelete(data._id)}>Delete</button></td>
                  </tr>
              )
            })} 
          </tbody>
        </table>
        </div>
        </div>
    )
}