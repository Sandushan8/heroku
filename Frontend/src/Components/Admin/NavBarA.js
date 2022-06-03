import React from 'react'
import {Link} from 'react-router-dom'
import '../../css/Admin/NavBarA.css'
export const NavBarA = () => {
  return (
    <div className='navA'>
        <nav className='Adnav'>
            <label className='alogo'>ADMIN</label>
            <ul className='a_navul'>
            <Link to='/AdminHome'><li className='a_navli'>Home</li></Link>
            <Link to='/AdminUser'><li className='a_navli'>Users</li></Link>
            <Link to='/AdminStudentg'><li className='a_navli'>Student Groups</li></Link>
            <Link to='/AdminUploads'><li className='a_navli'>Uploads</li></Link>
            </ul>
        </nav>
    </div>
  )
}
