import React from 'react';
import SkillsCard from '../Components/SkillCard.js'; 
import '../Styles/SkillsPage.css'
import {Link} from 'react-router-dom'
const SkillsPage = () => {
  const frontendskills = [
    { skill: 'JavaScript', rating: 4 },
    { skill: 'React', rating: 5 },
    { skill: 'HTML/CSS', rating: 5 },
    { skill: 'Bootstrap', rating: 4 },
    { skill: 'Redux', rating: 4 },
    {skill:'JWS',rating:3},
  ];

  const backendSkills=[
    {skill:'NodeJs',rating:4},
    {skill:'ExpressJs',rating:4},
    {skill:'MongoDB',rating:3},
    {skill:'Java',rating:3},
    {skill:'bcrypt',rating:3},
   
  ]

  const tools=[
    {skill:'VSCODE',rating:4},
    {skill:'Github',rating:4},
    {skill:'Postman',rating:4},
    {skill:'Jira',rating:3},
  ]

  return (
    <div className='skills-wrapper'>
      <div className='skills-page'>
      <div className='frontend-skills'>
      <h1>Frontend Skills</h1>
      {frontendskills.map((skill, index) => (
        <SkillsCard key={index} skill={skill.skill} rating={skill.rating} />
      ))}
      </div>
      <div className='backend-skills'>
        <h1>Backend Skills</h1>
        {backendSkills.map((skill, index) => (
        <SkillsCard key={index} skill={skill.skill} rating={skill.rating} />
      ))}

      </div>
      <div className='tools'>
         <h1>Tools</h1>
        {tools.map((skill, index) => (
        <SkillsCard key={index} skill={skill.skill} rating={skill.rating} />
      ))}

      </div>
      </div>
      <div className='go-to'>
        <Link to="/experience" className="innovative-button">
              Explore Next Section -{'>'}
          </Link>
      </div>
    </div>
  );
}

export default SkillsPage;
