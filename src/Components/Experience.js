

import React from 'react';
import '../Styles/Experience.css'; 
import {Link} from 'react-router-dom'

const ExperienceSection = () => {
    const experience=[
        {Name:'Company',value:'Infosys'},
        {Name:'Role',value:'System Engineer'},
        {Name:'Duration',value:'May 2022-Present'},
        {Name:'Client',value:'Elsevier'}
        
    ]
  return (
    <section className="experience-section">
      <div className="experience-header">
        <h2>Experience</h2>
        {experience.map((exp)=>(
            <div className='experience-item'>
                <p className='exp-name'>{exp.Name}</p>
                <p className='exp-value'>{exp.value}</p>
            </div>
        ))}
        
      </div>

      <div className="client-section">
        <h3>Work</h3>
        <ul>
          <li>Built user friendly, responsive interface for Journal Publishers to make Journals using ReactJs,CSS,Redux and React Hooks.</li>
          <li>Improved Performance of Internal Journal Builder Tool by making built in templates for repeated use cases. </li>
          <li>Worked on providing features as per the user requirement.</li>
          <li>Secure user authentication and session management for the users using Json web tokens.</li>
          <li>Built REST APIs using NodeJs,Express and MongoDB.</li>
          <li>Seamless integration of frontend and backend with Axios and Fetch.</li>
          <li>Version control of application with Github.</li>


        </ul>
      </div>
      <div className='go-to'>
        <Link to="/projects" className="innovative-button">
              Explore Projects -{'>'}
          </Link>
      </div>
    </section>
  );
}

export default ExperienceSection;
