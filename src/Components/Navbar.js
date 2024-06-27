import React from 'react'
import '../Styles/Navbar.css'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
        
        <ul>
          <li><Link to='/'>About </Link></li>
          <li><Link to='/skills'>Skills</Link></li>
          <li><Link to='/experience'>Experience</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/contactme'>Contact </Link></li>
        </ul>

    </nav>
  )
}

export default Navbar