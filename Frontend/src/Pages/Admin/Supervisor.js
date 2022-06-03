import React, {useState,useEffect} from 'react'
import { NavBarUSubtopic } from '../../Components/Admin/NavBarUSubtopic'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Supervisor = () =>{
  const [apiData,setData] =useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/users/supervisor').then((getData)=>{
      setData(getData.data)
    })
  })
  const setID =(id)=>{
    localStorage.setItem('id',id)
    console.log(id)
  }
  const passdelete =(id) =>{
    axios.delete(`http://localhost:8000/users/supervisor/${id}`).then(alert('Successfully Deleted!'))
    
  }
    return(
      <div>
      <NavBarUSubtopic/>
        <div className='usercontainer'>
        <label className='ttitle'>Supervisor</label>
        <table className='table'>
          <tr className='headt'>
            <th>ID</th>
            <th>Name</th>
            <th>Faculty</th>
            <th>Position</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Area</th>
            <th>About</th>
            <th className='upd'>Update</th>
            <th className='upd'>Delete</th>
          </tr>
          <tbody class='tbody'>
            {apiData.map((data)=>{
              return(
                <tr>
                  <td>{data.s_id}</td>
                  <td>{data.s_name}</td>
                  <td>{data.faculty}</td>
                  <td>{data.position}</td>
                  <td>{data.email}</td>
                  <td>{data.contact}</td>
                  <td>{data.area}</td>
                  <td>{data.about}</td>
                  <td><Link to='/updatesupervisor'><button className='update' onClick={()=>setID(data._id)}>Update</button></Link></td>
                  <td><button className='delete'onClick={()=>passdelete(data._id)}>Delete</button></td>
                  </tr>
              )
            })} 
          </tbody>
        </table>
        </div>
        </div>
    )
}