import React, { useContext } from 'react'
import './Navbar.css'
import { myContext } from './ContextApi'
import { Link, useNavigate } from 'react-router-dom'



const Navbar = () => {
    const {input} = useContext(myContext)
    const {setisLoggedIn} = useContext(myContext)
    const navigate = useNavigate()
  return (
    <div className='navbar'>
        <div className='navbarHeading'>
            <h2>React Routing</h2>
        </div>
        <div className='navbarMenu'>
           
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/tech'><li>Technologies</li></Link>
                <Link to='/support'><li>Support</li></Link>
                
               
                <li onClick={()=>{
                    setisLoggedIn(false)
                    navigate('/')
                }}>Logout</li>
              
                


                <li style={{color:"yellowgreen",fontSize:"20px"}}>{input.toUpperCase()}</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar