import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './NavBar.css';

const Navbar = ({ isDark, onThemeToggle, onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsExpanded, setIsSettingsExpanded] = useState(false);
  const sidebarRef = useRef(null);
  const { currentUser } = useAuth();

  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/shri-vishnu-velan-a-k-72507b2b0',
    github: 'https://github.com/shriVishnuvelan'
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.classList.contains('hamburger') &&
        !event.target.classList.contains('hamburger-line')
      ) {
        setIsMenuOpen(false);
        setIsSettingsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsSettingsExpanded(false);
    }
  };

  const toggleSettings = () => {
    setIsSettingsExpanded(!isSettingsExpanded);
  };

  const handleNavigation = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setIsSettingsExpanded(false);
  };

  const handleThemeToggle = () => {
    onThemeToggle();
  };

  const handleSocialLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <div className="navbar-brand" onClick={() => handleNavigation('home')}>
            <span className="brand-icon">📐</span>
            <span className="brand-text">Math Tricks</span>
          </div>

          <div className="page-indicator">
            {currentPage === 'home' && '🏠'}
            {currentPage === 'about' && 'ℹ️'}
            {currentPage === 'category' && '📚'}
            {currentPage === 'game' && '🎮'}
            {currentPage === 'profile' && '👤'}
          </div>
        </div>
      </nav>

      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`} ref={sidebarRef}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <span className="sidebar-icon">📐</span>
            <span className="sidebar-title">Math Tricks</span>
          </div>
          <button className="close-btn" onClick={toggleMenu}>
            ✕
          </button>
        </div>

        <div className="sidebar-content">
          {currentUser && (
            <div className="user-info-sidebar">
              <div className="user-avatar-small">
                {currentUser.photoURL ? (
                  <img src={currentUser.photoURL} alt="Profile" />
                ) : (
                  <div className="avatar-placeholder-small">
                    {currentUser.displayName?.[0]?.toUpperCase() || 'U'}
                  </div>
                )}
              </div>
              <div className="user-details-sidebar">
                <div className="user-name-sidebar">{currentUser.displayName || 'User'}</div>
                <div className="user-email-sidebar">{currentUser.email}</div>
              </div>
            </div>
          )}

          <nav className="sidebar-nav">
            <button
              className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => handleNavigation('home')}
            >
              <span className="nav-icon">🏠</span>
              <span className="nav-text">Home</span>
              {currentPage === 'home' && <span className="active-indicator">●</span>}
            </button>

            <button
              className={`nav-item ${currentPage === 'game' ? 'active' : ''}`}
              onClick={() => handleNavigation('game')}
            >
              <span className="nav-icon">🎮</span>
              <span className="nav-text">Math Game</span>
              {currentPage === 'game' && <span className="active-indicator">●</span>}
            </button>

            {currentUser ? (
              <button
                className={`nav-item ${currentPage === 'profile' ? 'active' : ''}`}
                onClick={() => handleNavigation('profile')}
              >
                <span className="nav-icon">👤</span>
                <span className="nav-text">Profile</span>
                {currentPage === 'profile' && <span className="active-indicator">●</span>}
              </button>
            ) : (
              <button
                className={`nav-item ${currentPage === 'login' ? 'active' : ''}`}
                onClick={() => handleNavigation('login')}
              >
                <span className="nav-icon">🔐</span>
                <span className="nav-text">Login</span>
                {currentPage === 'login' && <span className="active-indicator">●</span>}
              </button>
            )}

            <button
              className={`nav-item ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => handleNavigation('about')}
            >
              <span className="nav-icon">ℹ️</span>
              <span className="nav-text">About</span>
              {currentPage === 'about' && <span className="active-indicator">●</span>}
            </button>

            <div className="nav-section">
              <button
                className={`nav-item settings-item ${isSettingsExpanded ? 'expanded' : ''}`}
                onClick={toggleSettings}
              >
                <span className="nav-icon">⚙️</span>
                <span className="nav-text">Settings</span>
                <span className={`expand-arrow ${isSettingsExpanded ? 'open' : ''}`}>
                  ▼
                </span>
              </button>

              {isSettingsExpanded && (
                <div className="submenu">
                  <div className="submenu-item theme-item">
                    <div className="theme-info">
                      <span className="submenu-icon">{isDark ? '☀️' : '🌙'}</span>
                      <span className="submenu-text">
                        {isDark ? 'Light Mode' : 'Dark Mode'}
                      </span>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={isDark}
                        onChange={handleThemeToggle}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="submenu-divider"></div>

                  <div className="submenu-item info-item">
                    <span className="submenu-icon">🎨</span>
                    <span className="submenu-text">
                      Current: {isDark ? 'Dark' : 'Light'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="sidebar-footer">
            <div className="footer-title">Connect with Me</div>
            <div className="social-links">
              <button
                className="social-link"
                onClick={() => handleSocialLink(socialLinks.linkedin)}
              >
                <span className="social-icon">💼</span>
                <span className="social-text">LinkedIn</span>
                <span className="external-icon">↗</span>
              </button>
              <button
                className="social-link"
                onClick={() => handleSocialLink(socialLinks.github)}
              >
                <span className="social-icon">🐙</span>
                <span className="social-text">GitHub</span>
                <span className="external-icon">↗</span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;