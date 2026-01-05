import React from 'react';
import CategoryCard from '../components/CategoryCard';
import './HomePage.css';

// ============================================
// PAGE: HomePage
// Landing page with category cards
// Props: onCategorySelect (function)
// ============================================

const HomePage = ({ onCategorySelect }) => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1 className="main-title">Mathematics Tricks</h1>
        <p className="subtitle">Master Mental Math with Easy Shortcuts</p>
      </header>
      
      <div className="categories-grid">
        <CategoryCard
          title="Multiplication"
          description="Learn fast multiplication techniques"
          icon="✖️"
          onClick={() => onCategorySelect('multiplication')}
        />
        <CategoryCard
          title="Squares"
          description="Quick methods to square numbers"
          icon="²"
          onClick={() => onCategorySelect('squares')}
        />
        <CategoryCard
          title="Division"
          description="Simplify division with smart tricks"
          icon="➗"
          onClick={() => onCategorySelect('division')}
        />
      </div>
    </div>
  );
};

export default HomePage;