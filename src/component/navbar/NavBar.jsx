import React from 'react'
import './navbar.css'

export const NavBar = () => {
  return (
    <div className=' navbar h-28 flex items-end'>
        <div className=' bg-white h-12 flex-1 flex justify-around'>
            <div className=' border-r-2  flex h-full justify-center items-center flex-1'><span className=' hidden sm:block pr-1'>Navigation </span> Link One</div>
            <div className=' border-r-2 flex  h-full justify-center items-center flex-1'><span  className=' hidden sm:block pr-1'>Navigation</span> Link Two</div>
            <div className='  h-full flex justify-center items-center flex-1'><span  className=' hidden sm:block pr-1'>Navigation</span> Link Three</div>
        </div>
    </div>
  )
}