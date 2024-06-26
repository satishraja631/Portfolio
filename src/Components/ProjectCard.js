

import React from 'react';
import '../Styles/ProjectCard.css';

const ProjectCard = ({ title, imageUrl, liveDemoUrl, codeUrl }) => {
  return (
    <div className="project-card">
        <h3>{title}</h3>
      
      <div className="project-details">
        <img src={imageUrl} alt={title} className="project-image" />
        <div className="project-buttons">
          <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer" className="button1">Live Demo</a>
          <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="button2">Code</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
