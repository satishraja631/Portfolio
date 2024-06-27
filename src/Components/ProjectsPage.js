

import React from 'react';
import ProjectCard from './ProjectCard.js'; 
import TradeXCrypto from '../Assets/tradexcrypto.png'
import movieWatchlist from '../Assets/movie-watchlist.png'
import '../Styles/ProjectsPage.css'
import {Link} from 'react-router-dom'

const ProjectsPage = () => {
  return (
    <div className="project-page">
      <h2>Projects</h2>
      <div className="projects-list">
        <div className='project1'>
          <div className='information'>
          <h3>Crypto Trading Website</h3>
          <ul className='project-description'>
            <li>TradeCrypto is crypto currency market watching and paper trading webiste.</li>
            <li>Users will be able to see real time crypto currency coins data and historical charts for every coin.</li>
            <li>This application fetches real time crypto coin data from a thirdparty api.Data will be refreshed every min for updated data</li>
            <li>Used context api for shared data among multiple components to get integration between real time data and historical charts.</li>
            <li>This is a responsive web application that is suitable for device screen sizes.</li>
          </ul>
          </div>
          <div className='card'>
            <ProjectCard
            title='TradeCrypto'
            imageUrl={TradeXCrypto}
            liveDemoUrl='https://tradexcrypto.netlify.app/'
            codeUrl='https://github.com/satishraja631/TradeCrypto'
          />
          </div>
        </div>
        <div className='project1'>
          <div className='information'>
          <h3>Movie Watchlist Website</h3>
          <ul className='project-description'>
            <li>MovieWatchlist is a movie watchlist website where user can search movies and add the movies watchlist.</li>
            <li>Users can signup and login to the website.Secure authentication methods implemented using JWT.</li>
            <li>User can add their favourite movies to watchlist and access their watchlist and remove movies from the watchlist.</li>
            <li>Use of context api for shared data among multiple components to implement watchlist logic.</li>
            <li>This is a responsive web application that is suitable for device screen sizes.</li>
          </ul>
          </div>
          <div className='card'>
            <ProjectCard
            title='MovieWatchlist'
            imageUrl={movieWatchlist}
            liveDemoUrl='https://satishraja-movie-watchlist.netlify.app/'
            codeUrl='https://github.com/satishraja631/movie-watchlist'
          />
          </div>
        </div>
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
