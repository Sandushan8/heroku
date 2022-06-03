import React, {useEffect,useState} from 'react'
import { NavBarUSubtopic } from '../../Components/Admin/NavBarUSubtopic'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Student = () =>{
  const [apiData,setData] =useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/users/studentdetes').then((getData)=>{
      setData(getData.data)
    })
  })

  const passdelete = (ID) =>{
    axios.delete(`http://localhost:8000/users/studentdetes/${ID}`).then(alert('Successfully deleted!'))
  }

  const setupID =(id) =>{
    localStorage.setItem('id',id)
  }

    return(
      <div>
      <NavBarUSubtopic/>
        <div className='usercontainer'>
        <label className='ttitle'>Student</label>
            <table className='table'>
          <tr className='headt'>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Faculty</th>
            <th className='upd'>Update</th>
            <th className='upd'>Delete</th>
          </tr>
          <tbody class='tbody'>
            {apiData.map((data)=>{
              return(
                <tr>
                  <td>{data.ID}</td>
                  <td>{data.Name}</td>
                  <td>{data.Email}</td>
                  <td>{data.Contact}</td>
                  <td>{data.Faculty}</td>
                  <td><Link to='/updatestudent'><button class='update' onClick={()=>setupID(data._id)}>Update</button></Link></td>
                  <td><button class='delete' onClick={()=>passdelete(data._id)}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
        </div>
    )
}