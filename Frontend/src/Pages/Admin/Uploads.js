import React, {useEffect,useState} from 'react'
import { NavBarUploads } from '../../Components/Admin/NavBarUploads'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../../css/Admin/tables'

export const Uploads = () => {
  const [subData,setData] =useState([])
  const [marksData,setMData] = useState([])
  

  useEffect(()=>{
    axios.get('http://localhost:8000/submark/sub').then((getData)=>{
      setData(getData.data)
    })
  })

  useEffect(()=>{
    axios.get('http://localhost:8000/submark/mark').then((getData)=>{
      setMData(getData.data)
    })
  })

  const passSubdelete = ((ID)=>{
    axios.delete(`http://localhost:8000/submark/sub/${ID}`).then(alert('Successfully Deleted!'))
    
  })
  const passMarksdelete = ((MID)=>{
    axios.delete(`http://localhost:8000/submark/mark/${MID}`).then(alert('Successfully Deleted!'))
    
  })
  

  const setSID =(data)=>{
    localStorage.setItem('id',data._id)
    localStorage.setItem('SID',data.ID)
    localStorage.setItem('STypes',data.Type)
    localStorage.setItem('SDetails',data.Details)
    localStorage.setItem('SDeadline',data.Deadline)
    localStorage.setItem('SMarks',data.Marks)
  }

  const setMID =(data)=>{
    localStorage.setItem('mid',data._id)
    localStorage.setItem('MTitle',data.Title)
    localStorage.setItem('MTypes',data.Type)
    localStorage.setItem('MDetails',data.Details)
    localStorage.setItem('MMarks',data.MarksA)
    localStorage.setItem('MSpecial',data.SpecialI)
    console.log(data)
  }

  return (
    <div>
      <NavBarUploads/>
      <div className='bodyAd'>
      <br/>
        <label className='ttitle'>Submissions</label><br/>
        <table className='table'>
          <tr class='headt'>
            <th>ID</th>
            <th>Type</th>
            <th>Details</th>
            <th>Deadline</th>
            <th>Marks</th>
            <th className='upd'>Update</th>
            <th className='upd'>Delete</th>
          </tr>
          <tbody class='tbody'>
            {subData.map((data)=>{
              return(
                <tr>
                  <td>{data.ID}</td>
                  <td>{data.Type}</td>
                  <td>{data.Details}</td>
                  <td>{data.Deadline}</td>
                  <td>{data.Marks}</td>
                  <td><Link to='/UpdateSub'><button className='update' onClick={()=>setSID(data)}>Update</button></Link></td>
                  <td><button className='delete' onClick={()=>passSubdelete(data._id)}>Delete</button></td>
                </tr>
              )
            })}
            
          </tbody>
        </table>
        <br/>
        <label className='ttitle'>Marking schemes</label><br/>
        <table className='table'>
          <tr class='headt'>
            <th>Title</th>
            <th>Type</th>
            <th>Details</th>
            <th>Marks Allocation</th>
            <th>Special instructions</th>
            <th className='upd'>Update</th>
            <th className='upd'>Delete</th>
          </tr>
          <tbody class='tbody'>
            {marksData.map((data)=>{
              return(
                <tr>
                  <td>{data.Title}</td>
                  <td>{data.Type}</td>
                  <td>{data.Details}</td>
                  <td>{data.MarksA}</td>
                  <td>{data.SpecialI}</td>
                  <td><Link to='/UpdateMark'><button className='update' onClick={()=>setMID(data)}>Update</button></Link></td>
                  <td><button className='delete' onClick={()=>passMarksdelete(data._id)}>Delete</button></td>
                </tr>
              )
            })} 
          </tbody>
        </table><br/>
        </div>
    </div>
  )
}
