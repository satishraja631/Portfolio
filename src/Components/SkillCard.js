import React from 'react';
import '../Styles/Skillcard.css'; // Import your CSS file for styles

const SkillsCard = ({ skill, rating }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="star filled">&#9733;</span>); // Filled star
      } else {
        stars.push(<span key={i} className="star">&#9734;</span>); // Empty star
      }
    }
    return stars;
  };

  return (
    <div className="skills-card">
      <div className="skill-name">{skill}</div>
      <div className="rating-stars">
        {renderStars(rating)}
      </div>
    </div>
  );
}

export default SkillsCard;
