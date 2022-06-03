import React from 'react'
import { NavBarA } from '../../Components/Admin/NavBarA'
import '../../css/Admin/main.css'
export const Main = () => {
  return (
    <div>
        <NavBarA/>
        <div className='abody'>
          <div className='acontent'>
            <h1 className='MainH'>Discover your future</h1>
            <p className='MainP'>The Future Awaits You</p>
          </div>
        </div>
    </div>
  )
}
