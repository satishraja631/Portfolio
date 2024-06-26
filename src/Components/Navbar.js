import React from 'react'
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        
        <ul>
          <li><a href='/'>About Me</a></li>
          <li><a href='/skills'>Skills</a></li>
          <li><a href='/experience'>Experience</a></li>
          <li><a href='/projects'>Projects</a></li>
          <li><a href='/contactme'>Contact Me</a></li>
        </ul>

    </nav>
  )
}

export default Navbar