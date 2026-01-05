import React from 'react';
import './TrickAccordion.css';

// ============================================
// COMPONENT: TrickAccordion
// Expandable accordion for each trick
// Props: trick (object), isOpen (boolean), onToggle (function)
// ============================================

const TrickAccordion = ({ trick, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onToggle}>
        <h3>{trick.title}</h3>
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <div className="trick-explanation">
            <h4>📝 Explanation:</h4>
            <p>{trick.explanation}</p>
          </div>
          <div className="trick-steps">
            <h4>🔢 Steps:</h4>
            <ol>
              {trick.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
          <div className="trick-example">
            <h4>💡 Example:</h4>
            <p className="example-text">{trick.example}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrickAccordion;