import React, {useState} from 'react'
import { NavBarUploadsSub } from '../../Components/Admin/NavBarUploadsSub'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const UpDoc = () => {
  //const [fname,setfilename] = useState('')
  const [file,setfile] = useState('')

  

  const senddoc=()=>{
    const formData = new FormData();
    formData.append('file',file)
    axios.post(`http://localhost:8000/files/upload`,formData,{headers:{'Content-Type':'multipart/form-data'}}).then(alert('Successfully added!'))
  }
  
  return (
    <div>
      <NavBarUploadsSub/>
      
      <div className='formbody'>
      <label className='ttitle'>Upload_documents</label>
      <div className='Form'> 
        <br/><br/><br/><br/><br/>
        
        <input type='file' className='cfile' name='file' onChange={(e)=>{setfile(e.target.files[0])}}/>
        <br/>
        <br/>
        <Link to='/AdminUploads'><input type='submit' value=' Add ' className='formsubmit' onClick={senddoc}/></Link> 
        <Link to='/AdminUploads'><input type='submit' value=' Cancel ' className='formcancel'/></Link>
      </div>
      </div>
      </div>
  )
}
