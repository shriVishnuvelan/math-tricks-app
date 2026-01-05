import React, { useState } from 'react';
import TrickAccordion from '../components/TrickAccordion';
import SearchBar from '../components/SearchBar';
import './CategoryPage.css';

// ============================================
// PAGE: CategoryPage
// PERFECT SEARCH: Exact number in title, exact word matching
// ============================================

const CategoryPage = ({ category, tricks, onBack }) => {
  // State for search and accordion
  const [searchTerm, setSearchTerm] = useState('');
  const [openAccordionId, setOpenAccordionId] = useState(null);

  // ============================================
  // PERFECT SEARCH ALGORITHM
  // ============================================
  const perfectSearch = (trick, search) => {
    // If search is empty, show all tricks
    if (!search || search.trim() === '') return true;

    const searchLower = search.toLowerCase().trim();
    const title = trick.title.toLowerCase();
    const explanation = trick.explanation.toLowerCase();
    const steps = trick.steps.join(' ').toLowerCase();
    const example = trick.example.toLowerCase();

    // Check if search term is a pure number
    const isNumber = /^\d+$/.test(searchLower);

    if (isNumber) {
      // ========================================
      // NUMBER SEARCH - ONLY IN TITLE
      // ========================================
      // Extract numbers from title only using word boundaries
      const titleNumbers = title.match(/\b\d+\b/g) || [];
      
      // Check if the exact number exists in title
      return titleNumbers.includes(searchLower);
      
    } else {
      // ========================================
      // WORD SEARCH - EXACT WORD IN ANY FIELD
      // ========================================
      const allText = `${title} ${explanation} ${steps} ${example}`;
      
      // Split search into individual words
      const searchWords = searchLower.split(/\s+/).filter(word => word.length > 0);
      
      // Check if ALL search words exist as complete words
      return searchWords.every(searchWord => {
        // Use word boundary regex for exact word matching
        const wordRegex = new RegExp(`\\b${searchWord}\\w*\\b`, 'i');
        return wordRegex.test(allText);
      });
    }
  };

  // Filter tricks using perfect search
  const filteredTricks = tricks.filter(trick => perfectSearch(trick, searchTerm));

  // Toggle accordion open/close
  const handleAccordionToggle = (id) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  // Get category display name
  const getCategoryTitle = () => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="category-page">
      <div className="category-header">
        <button className="back-button" onClick={onBack}>← Back to Home</button>
        <h1 className="category-title">{getCategoryTitle()} Tricks</h1>
      </div>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="tricks-info">
        <p className="results-count">
          Showing <strong>{filteredTricks.length}</strong> of <strong>{tricks.length}</strong> tricks
        </p>
      </div>

      <div className="tricks-container">
        {filteredTricks.length > 0 ? (
          filteredTricks.map(trick => (
            <TrickAccordion
              key={trick.id}
              trick={trick}
              isOpen={openAccordionId === trick.id}
              onToggle={() => handleAccordionToggle(trick.id)}
            />
          ))
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No tricks found</h3>
            <p>Try searching with different keywords</p>
            <div className="search-examples">
              <p className="examples-title">💡 Search Tips:</p>
              <ul className="search-suggestions">
                <li><strong>Numbers:</strong> Search "5" finds "Multiply by 5", "Division by 5"</li>
                <li><strong>Words:</strong> Search "square" finds all squaring tricks</li>
                <li><strong>Phrases:</strong> Search "ending 5" finds tricks about numbers ending with 5</li>
                <li><strong>Case:</strong> "SQUARE" and "square" give same results</li>
              </ul>
            </div>
            <button className="clear-search-btn" onClick={() => setSearchTerm('')}>
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;