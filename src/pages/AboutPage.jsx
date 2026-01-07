import React from 'react';
import './AboutPage.css';

// ============================================
// PAGE: AboutPage
// Information about the app and developer
// ============================================

const AboutPage = () => {
  const socialLinks = {
    github: 'https://github.com/shriVishnuvelan',
    linkedin: 'https://www.linkedin.com/in/shri-vishnu-velan-a-k-72507b2b0/'
  };

  // Handle external link clicks
  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="about-page">
      <div className="about-container">
        {/* Header Section */}
        <header className="about-header">
          <div className="about-icon">📐</div>
          <h1 className="about-title">About Mathematics Tricks</h1>
          <p className="about-tagline">Learn faster • Think smarter • Calculate instantly</p>
        </header>

        {/* Main Content */}
        <div className="about-content">
          {/* What is this app */}
          <section className="about-section">
            <div className="section-icon">💡</div>
            <h2 className="section-title">What is this Application?</h2>
            <p className="section-text">
              Mathematics Tricks is a modern, interactive web application designed to help
              students, professionals, and learners improve their mental math skills using
              proven shortcuts and techniques. The platform combines educational content
              with authentication-based access for a personalized experience.
            </p>
          </section>

          {/* Features */}
          <section className="about-section">
            <div className="section-icon">✨</div>
            <h2 className="section-title">Key Features</h2>
            <ul className="features-list">
              <li>
                <span className="feature-icon">🔢</span>
                <div>
                  <strong>20+ Math Tricks:</strong> Comprehensive collection across three categories
                </div>
              </li>
              <li>
                <span className="feature-icon">🔍</span>
                <div>
                  <strong>Smart Search:</strong> Advanced search with exact word matching, case-insensitive, and number detection
                </div>
              </li>
              <li>
                <span className="feature-icon">🎨</span>
                <div>
                  <strong>Dark/Light Mode:</strong> Choose your preferred theme for comfortable learning
                </div>
              </li>
              <li>
                <span className="feature-icon">📱</span>
                <div>
                  <strong>Responsive Design:</strong> Works seamlessly on desktop devices
                </div>
              </li>
              <li>
                <span className="feature-icon">⚡</span>
                <div>
                  <strong>Interactive UI:</strong> Smooth animations and accordion-style navigation
                </div>
              </li>
              <li>
                <span className="feature-icon">💾</span>
                <div>
                  <strong>Save Preferences:</strong> Your theme choice is saved automatically
                </div>
              </li>
              <li>
                <span className="feature-icon">🔐</span>
                <div>
                  <strong>Authentication:</strong> Secure authentication using Firebase
                </div>
              </li>
              <li>
                <span className="feature-icon">📧</span>
                <div>
                  <strong>Login:</strong> Email & Google login support
                </div>
              </li>
            </ul>
          </section>

          {/* Categories */}
          <section className="about-section">
            <div className="section-icon">📚</div>
            <h2 className="section-title">What You'll Learn</h2>
            <div className="categories-info">
              <div className="category-info-card">
                <div className="category-info-icon">✖️</div>
                <h3>Multiplication Tricks</h3>
                <p>Fast techniques for multiplying by 5, 9, 11, 25, 99, and more. Learn shortcuts for numbers close to 100 and master the doubling-halving method.</p>
              </div>
              <div className="category-info-card">
                <div className="category-info-icon">²</div>
                <h3>Squaring Shortcuts</h3>
                <p>Quick methods to square any number, especially those ending in 5. Use algebraic formulas and mental math tricks for instant calculations.</p>
              </div>
              <div className="category-info-card">
                <div className="category-info-icon">➗</div>
                <h3>Division Techniques</h3>
                <p>Simplify division problems with smart shortcuts. Learn fraction methods, successive division, and mental calculation strategies.</p>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="about-section">
            <div className="section-icon">⚙️</div>
            <h2 className="section-title">Built With</h2>
            <div className="tech-stack">
              <div className="tech-item">
                <span className="tech-badge">React 18</span>
              </div>
              <div className="tech-item">
                <span className="tech-badge">JavaScript ES6+</span>
              </div>
              <div className="tech-item">
                <span className="tech-badge">CSS3</span>
              </div>
              <div className="tech-item">
                <span className="tech-badge">React Hooks</span>
              </div>
              <div className="tech-item">
                <span className="tech-badge">GitHub</span>
              </div>
              <div className="tech-item">
                <span className="tech-badge">Firebase Authentication</span>
              </div>
              <div className="tech-item">
                <span className="tech-badge">Google OAuth</span>
              </div>
              <div className="tech-item">
                <span className="tech-badge">Netlify</span>
              </div>
            </div>
          </section>

          {/* Developer Info */}
          <section className="about-section developer-section">
            <div className="section-icon">👨‍💻</div>
            <h2 className="section-title">About the Developer</h2>
            <p className="section-text">
              This project was created as a portfolio piece to demonstrate proficiency in 
              React development, component architecture, state management, and modern web design. 
              It showcases clean code practices, responsive design, and user-friendly interfaces.
            </p>
            <div className="developer-links">
              <button 
                className="dev-link-button"
                onClick={() => handleLinkClick(socialLinks.github)}
              >
                <span>🐙</span> GitHub
              </button>
              <button 
                className="dev-link-button"
                onClick={() => handleLinkClick(socialLinks.linkedin)}
              >
                <span>💼</span> LinkedIn
              </button>
            </div>
            <p className="link-note">
              Click any button above to visit my professional profiles
            </p>
          </section>

          {/* Call to Action */}
          <section className="about-section cta-section">
            <div className="cta-content">
              <h2>Ready to Master Mental Math?</h2>
              <p>Start learning these amazing tricks today and impress everyone with your calculation speed!</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="about-footer">
          <p>© 2026 Mathematics Tricks App | Built with ❤️ using React & Firebase</p>
          <p className="version">Version 1.1.0</p>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;