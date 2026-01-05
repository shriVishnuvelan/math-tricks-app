import React from 'react';
import './SearchBar.css';

// ============================================
// COMPONENT: SearchBar
// Advanced search with exact matching, case-insensitive, and number detection
// Props: searchTerm (string), onSearchChange (function)
// ============================================

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar">
      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Search tricks... (e.g., 'multiply by 5', '11', 'square')"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button 
            className="clear-search"
            onClick={() => onSearchChange('')}
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>
      {searchTerm && (
        <div className="search-info">
          Searching for: <strong>"{searchTerm}"</strong>
        </div>
      )}
    </div>
  );
};

export default SearchBar;