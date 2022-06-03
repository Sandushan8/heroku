import React, {useEffect,useState} from 'react'
import { NavBarSG } from '../../Components/Admin/NavBarSG'
import {Link} from 'react-router-dom'
import axios from 'axios'

export const AssignP = () => {
  const [apiData,setData] =useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/users/student').then((getData)=>{
      setData(getData.data)
    })
  })

  const setGID = (id)=>{
    localStorage.setItem("id",id)
  }

  return (
    <div>
      <NavBarSG/>
      <div className='bodyAd'>
      <br/>
      <label className='ttitle'>Assign panel members</label>
      <table className='table'>
          <tr className='headt'>
            <th>Group ID</th>
            <th>Group Leader ID</th>
            <th>Group Leader Name</th>
            <th>Group Leader Email</th>
            <th>Faculty</th>
            <th>Panel member</th>
            <th className='upd'>Add a Panel member</th>
          </tr>
          <tbody class='tbody'>
            {apiData.map((data)=>{
              return(
                <tr>
                  <td>{data.GrpID}</td>
                  <td>{data.FistrMemberRegNo}</td>
                  <td>{data.FistrMemberName}</td>
                  <td>{data.FistrMemberEmail}</td>
                  <td>{data.faculty}</td>
                  <td>{data.PanelM}</td>
                  <td><Link to='/assignpm'><button className='update' onClick={()=>setGID(data.GrpID)}>Add</button></Link></td>
                  </tr>
              )
            })} 
          </tbody>
        </table>
    </div>
    </div>
  )
}
