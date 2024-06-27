import React ,{useEffect, useState} from 'react'
import '../Styles/About.css'
import Linkedin from '../Assets/linkedin.svg'
import Github from '../Assets/github.svg'
import Gmail from '../Assets/envelope-solid.svg'
import Contact from '../Assets/address-book-solid.svg'
import {Link} from 'react-router-dom'
import '../Styles/About.css'

function About() {
    const Icons=[Linkedin,Github,Gmail,Contact]
    const [isVisible,setIsVisible]=useState(false)

    useEffect(()=>{
        const timeout=setTimeout(()=>{
          setIsVisible(true);
        },1000)

        return  ()=>{clearTimeout(timeout)}
    },[])


    const showContactInfo = () => {
    document.getElementById('contact-info').innerText = '7660888577';
  };

  const showGmailInfo = () => {
    
    document.getElementById('gmail-info').innerText = 'satishrajadsr@gmail.com';
  };

  const hideInfo = () => {
    
    document.getElementById('contact-info').innerText = '';
    document.getElementById('gmail-info').innerText = '';
  };
  return (
    <div className={isVisible?'about slide-left':'about'}>
        <p className='greeting'>Hi There, I am Satish Raja</p>
        
        <p className='intro'>Welcome to my Portfolio.I am a Frontend Developer with ReactJs having 2+ years exxperience working in Infosys.
            I build responsive and scalable frontend web applications with React.I have experience building REST APIs 
            with Node,Express and MongoDB.
        </p>
        <div className='icons'>
          <a href='https://www.linkedin.com/in/satish-raja-dhulipala-1115b51a3/' target='_blank'><img src={Linkedin}/></a>
          <a href='https://github.com/satishraja631' target='_blank'><img src={Github}/></a>

                 
            <img src={Contact} alt="Contact Icon"  onMouseEnter={showContactInfo} onMouseLeave={hideInfo}/>
       
          
            <img src={Gmail} alt="Gmail Icon" onMouseEnter={showGmailInfo} onMouseLeave={hideInfo}/>
        
          <div className="info" id="contact-info"></div>
          <div className="info" id="gmail-info"></div>
          <Link to="/skills" className="innovative-button">
              Explore My Skills -{'>'}
          </Link>
           
          
        </div>

    </div>
  )
}

export default About