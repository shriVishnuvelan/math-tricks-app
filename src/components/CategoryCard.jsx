import React from 'react';
import './CategoryCard.css';

// ============================================
// COMPONENT: CategoryCard
// Shows category cards on home page
// Props: title, description, icon, onClick
// ============================================

const CategoryCard = ({ title, description, icon, onClick }) => {
  return (
    <div className="category-card" onClick={onClick}>
      <div className="card-icon">{icon}</div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <div className="card-arrow">→</div>
    </div>
  );
};

export default CategoryCard;