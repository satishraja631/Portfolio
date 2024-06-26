import React,{useState,useEffect} from 'react'

import Skills from './SkillsPage';

function Home() {
    const [isActive, setIsActive] = useState(false);
    const [isIntro,setIsIntro]=useState(false)
    const [isSkills,setIsSkills]=useState(false)

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setIsActive(true);
    }, 2000); // Show paragraph after 2 seconds

    const timeout2 = setTimeout(() => {
      setIsIntro(true);
    }, 3000); 
    const timeout3 = setTimeout(() => {
      setIsSkills(true);
    }, 4000); 

    return () =>{clearTimeout(timeout1);;
        clearTimeout(timeout2)
        clearTimeout(timeout3)
    } 
  }, []);


  return (
    <div className='home'>
        <p className={isActive ? 'welcome slide-in' : 'welcome'}>Hello, Welcome to my Portfolio.</p>
        <p className={isIntro ?'intro slide-left':'intro'}>I am Satish Raja, A Frontend Web Developer with 2+ years of Experience.</p>
        
        <div className={isSkills?'skills slide-up':'skills'}>
             <p>Skills</p>
            <div className='skill-cards'>
            <Skills />
            </div>
        </div>
        
        
        

    </div>
  )
}

export default Home