
import React from 'react';
import './ModuleCard.css';

const ModuleCard = ({ title, description, imgSrc }) => {
  return (
    <div className="module-card">
      <img src={imgSrc} alt={title} className="module-card-img" />
      <div className="module-card-content">
        <h3 className="module-card-title">{title}</h3>
        <p className="module-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ModuleCard;
