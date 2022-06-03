import React from 'react'
import {Link} from 'react-router-dom'
import '../../css/Admin/NavBarA.css'
export const NavBarSGSub = () => {
  return (
    <div className='navA'>
        <nav className='Adnav'>
            <label className='alogo'>Assign Panel Members</label>
            <ul className='a_navul'>
            <Link to='/AdminStudentg'><li className='a_navli'>Student Groups</li></Link> 
            </ul>
        </nav>
    </div>
  )
}