import React from 'react'
import './Navbar.css'
import { FaAngleLeft } from "react-icons/fa";


 function Navbar(props) {
  return (
    <div>
         <nav className='nav'> 
        <div className='tite'><FaAngleLeft className='back-icon' />{props.head}</div>

    </nav>
    </div>
  )
} 

export default Navbar