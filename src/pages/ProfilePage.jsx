import React from 'react';
import { useAuth } from '../context/AuthContext';
import './ProfilePage.css';

const ProfilePage = ({ onNavigate }) => {
  const { currentUser, userProfile, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      onNavigate('login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (!currentUser || !userProfile) {
    return (
      <div className="profile-page">
        <div className="profile-container">
          <p>Please log in to view your profile</p>
          <button onClick={() => onNavigate('login')}>Go to Login</button>
        </div>
      </div>
    );
  }

  const progress = userProfile.progress || {};
  const winRate = progress.totalGamesPlayed > 0
    ? ((progress.wins / progress.totalGamesPlayed) * 100).toFixed(1)
    : 0;

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Header */}
        <div className="profile-header">
          <button className="back-btn" onClick={() => onNavigate('home')}>
            ← Back
          </button>
          <h1>My Profile</h1>
        </div>

        {/* User Info */}
        <div className="profile-card">
          <div className="user-avatar">
            {currentUser.photoURL ? (
              <img src={currentUser.photoURL} alt="Profile" />
            ) : (
              <div className="avatar-placeholder">
                {currentUser.displayName?.[0]?.toUpperCase() || 'U'}
              </div>
            )}
          </div>
          <h2>{currentUser.displayName || 'User'}</h2>
          <p className="user-email">{currentUser.email}</p>
        </div>

        {/* Statistics */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🎮</div>
            <div className="stat-value">{progress.totalGamesPlayed || 0}</div>
            <div className="stat-label">Games Played</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-value">{progress.wins || 0}</div>
            <div className="stat-label">Wins</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-value">{winRate}%</div>
            <div className="stat-label">Win Rate</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-value">{progress.tricksViewed?.length || 0}</div>
            <div className="stat-label">Tricks Viewed</div>
          </div>
        </div>

        {/* Recent Games */}
        <div className="section">
          <h3>Recent Games</h3>
          {progress.gameScores && progress.gameScores.length > 0 ? (
            <div className="games-list">
              {progress.gameScores.slice(-5).reverse().map((game, index) => (
                <div key={index} className={`game-item ${game.won ? 'win' : 'loss'}`}>
                  <div className="game-result">
                    {game.won ? '🏆 Win' : '💻 Loss'}
                  </div>
                  <div className="game-details">
                    <span className="difficulty">{game.difficulty}</span>
                    <span className="date">
                      {new Date(game.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-data">No games played yet</p>
          )}
        </div>

        {/* Actions */}
        <div className="profile-actions">
          <button className="btn-logout" onClick={handleLogout}>
            🚪 Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
