

import React from 'react';
import ProjectCard from './ProjectCard.js'; 
import TradeXCrypto from '../Assets/tradexcrypto.png'
import movieWatchlist from '../Assets/movie-watchlist.png'
import '../Styles/ProjectsPage.css'
import {Link} from 'react-router-dom'

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Crypto Trading Website',
      imageUrl: TradeXCrypto,
      liveDemoUrl: 'https://tradexcrypto.netlify.app/',
      codeUrl: 'https://github.com/example/project1'
    },
    {
      title: 'Movie Watchlist Website',
      imageUrl: movieWatchlist, 
      liveDemoUrl: 'https://satishraja-movie-watchlist.netlify.app/',
      codeUrl: 'https://github.com/satishraja631/movie-watchlist'
    },
    
  ];

  return (
    <div className="project-page">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            liveDemoUrl={project.liveDemoUrl}
            codeUrl={project.codeUrl}
          />
        ))}
      </div>
      <div className='go-to'>
        <Link to="/contactme" className="innovative-button">
              Contact Me -{'>'}
          </Link>
      </div>

    </div>
  );
}

export default ProjectsPage;
