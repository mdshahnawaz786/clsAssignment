import React from 'react'
import './tech.css'
import { Link, Outlet } from 'react-router-dom'




const Technologies = () => {
  return (
    <div className='techCont'>
        <div className='leftPanel'>
          <Link to="html">HTML</Link>
          <Link to="css">CSS</Link>
          <Link to="js">JAVA SCRIPT</Link>
          <Link to="react">React</Link>
        </div>
        <div className='rightPanel'>
          <Outlet/>
        </div>
    </div>
  )
}

export default Technologies