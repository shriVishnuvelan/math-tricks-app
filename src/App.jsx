import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import GamePage from './pages/GamePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import tricksData from './data/tricksData';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage('category');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    if (page === 'home') {
      setSelectedCategory(null);
    }
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedCategory(null);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onNavigate={handleNavigate} />;
      case 'home':
        return <HomePage onCategorySelect={handleCategorySelect} />;
      case 'category':
        return (
          <CategoryPage
            category={selectedCategory}
            tricks={tricksData[selectedCategory]}
            onBack={handleBackToHome}
          />
        );
      case 'about':
        return <AboutPage />;
      case 'game':
        return <GamePage />;
      case 'profile':
        return <ProfilePage onNavigate={handleNavigate} />;
      default:
        return <HomePage onCategorySelect={handleCategorySelect} />;
    }
  };

  return (
    <AuthProvider>
      <div className="app">
        {currentPage !== 'login' && (
          <Navbar
            isDark={isDarkMode}
            onThemeToggle={handleThemeToggle}
            onNavigate={handleNavigate}
            currentPage={currentPage}
          />
        )}
        <div className="page-content">
          {renderPage()}
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;