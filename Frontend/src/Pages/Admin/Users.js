import React, {useState,useEffect} from 'react'
import { NavBarUsers } from '../../Components/Admin/NavBarUsers'
import '../../css/Admin/user.css'
import axios from 'axios'
export const Users = () => {
  
  const [studData,setstudData] = useState([])
  
  useEffect(()=>{
    axios.get('http://localhost:8000/users/studentdetes').then((getData)=>{
      setstudData(getData.data)
    })
  })
 
    return(
      <div>
      <NavBarUsers/>
        <div className='usercontainer'>
        <label className='ttitle'>Student</label>
            <table className='table'>
          <tr className='headt'>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Faculty</th>
            
          </tr>
          <tbody class='tbody'>
            {studData.map((data)=>{
              return(
                <tr>
                  <td>{data.ID}</td>
                  <td>{data.Name}</td>
                  <td>{data.Email}</td>
                  <td>{data.Contact}</td>
                  <td>{data.Faculty}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
        </div>
    )
}
