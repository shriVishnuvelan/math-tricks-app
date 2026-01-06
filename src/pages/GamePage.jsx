import React, { useState, useEffect, useRef } from 'react';
import './GamePage.css';

// ============================================
// PAGE: GamePage
// Race to 100 Game - Player vs Computer
// ============================================

const GamePage = () => {
  // Game state
  const [currentNumber, setCurrentNumber] = useState(0);
  const [gameStatus, setGameStatus] = useState('ready');
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameHistory, setGameHistory] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [difficulty, setDifficulty] = useState('medium');
  const [showRules, setShowRules] = useState(false);

  // Ref for auto-scroll
  const historyRef = useRef(null);

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [gameHistory]);

  // Start new game
  const startGame = () => {
    setCurrentNumber(0);
    setGameStatus('playing');
    setIsPlayerTurn(true);
    setGameHistory([{ 
      player: 'System', 
      number: 0, 
      message: 'Game Started! Choose a number from 1 to 10.' 
    }]);
  };

  // Calculate possible moves based on current number
  const getPossibleMoves = (fromNumber) => {
    const moves = [];
    for (let i = 1; i <= 10; i++) {
      const nextNum = fromNumber + i;
      if (nextNum <= 100) {
        moves.push(nextNum);
      }
    }
    return moves;
  };

  // Computer's move logic - FIXED VERSION
  const computerMove = (playerNumber) => {
    setIsPlayerTurn(false);
    
    setTimeout(() => {
      let nextNumber;
      const minNum = playerNumber + 1;
      const maxNum = Math.min(playerNumber + 10, 100);

      // AI Strategy based on difficulty
      if (difficulty === 'hard') {
        // Hard: Computer uses optimal strategy (multiples of 11)
        const optimalMoves = [1, 12, 23, 34, 45, 56, 67, 78, 89, 100];
        const nextOptimal = optimalMoves.find(num => num >= minNum && num <= maxNum);
        
        if (nextOptimal) {
          nextNumber = nextOptimal;
        } else {
          nextNumber = maxNum;
        }
      } else if (difficulty === 'medium') {
        // Medium: 70% chance of good move, 30% random
        if (Math.random() < 0.7) {
          const target = Math.floor(playerNumber / 11) * 11 + 11;
          if (target >= minNum && target <= maxNum) {
            nextNumber = target;
          } else {
            nextNumber = minNum + Math.floor(Math.random() * 10);
            if (nextNumber > maxNum) nextNumber = maxNum;
          }
        } else {
          nextNumber = minNum + Math.floor(Math.random() * 10);
          if (nextNumber > maxNum) nextNumber = maxNum;
        }
      } else {
        // Easy: Random move
        const increment = Math.floor(Math.random() * 10) + 1;
        nextNumber = playerNumber + increment;
        if (nextNumber > 100) nextNumber = 100;
      }

      const addedAmount = nextNumber - playerNumber;
      
      setCurrentNumber(nextNumber);
      
      setGameHistory(prev => [...prev, {
        player: 'Computer',
        number: nextNumber,
        message: `Computer chose ${nextNumber} (added ${addedAmount})`
      }]);

      // Check if computer won
      if (nextNumber === 100) {
        setGameStatus('computerWon');
        setComputerScore(prev => prev + 1);
        setGameHistory(prev => [...prev, {
          player: 'System',
          number: 100,
          message: '🏆 Computer wins! Computer reached 100 first!'
        }]);
      } else {
        setIsPlayerTurn(true);
      }
    }, 1500);
  };

  // Handle player's move
  const handlePlayerMove = (number) => {
    if (!isPlayerTurn || gameStatus !== 'playing') return;

    const addedAmount = number - currentNumber;
    
    setCurrentNumber(number);
    setGameHistory(prev => [...prev, {
      player: 'You',
      number: number,
      message: `You chose ${number} (added ${addedAmount})`
    }]);

    // Check if player won
    if (number === 100) {
      setGameStatus('playerWon');
      setPlayerScore(prev => prev + 1);
      setGameHistory(prev => [...prev, {
        player: 'System',
        number: 100,
        message: '🎉 You win! You reached 100 first!'
      }]);
    } else {
      // Pass the player's number directly to computer
      computerMove(number);
    }
  };

  // Reset game
  const resetGame = () => {
    setCurrentNumber(0);
    setGameStatus('ready');
    setIsPlayerTurn(true);
    setGameHistory([]);
  };

  // Reset scores
  const resetScores = () => {
    setPlayerScore(0);
    setComputerScore(0);
    resetGame();
  };

  return (
    <div className="game-page">
      <div className="game-container">
        {/* Header */}
        <header className="game-header">
          <h1 className="game-title">🎮 Race to 100</h1>
          <p className="game-subtitle">First to say 100 wins!</p>
        </header>

        {/* Score Board */}
        <div className="scoreboard">
          <div className="score-item player-score">
            <div className="score-label">You</div>
            <div className="score-value">{playerScore}</div>
          </div>
          <div className="score-divider">VS</div>
          <div className="score-item computer-score">
            <div className="score-label">Computer</div>
            <div className="score-value">{computerScore}</div>
          </div>
        </div>

        {/* Difficulty Selector */}
        {gameStatus === 'ready' && (
          <div className="difficulty-selector">
            <label className="difficulty-label">Choose Difficulty:</label>
            <div className="difficulty-buttons">
              <button
                className={`difficulty-btn ${difficulty === 'easy' ? 'active' : ''}`}
                onClick={() => setDifficulty('easy')}
              >
                😊 Easy
              </button>
              <button
                className={`difficulty-btn ${difficulty === 'medium' ? 'active' : ''}`}
                onClick={() => setDifficulty('medium')}
              >
                😐 Medium
              </button>
              <button
                className={`difficulty-btn ${difficulty === 'hard' ? 'active' : ''}`}
                onClick={() => setDifficulty('hard')}
              >
                😈 Hard
              </button>
            </div>
          </div>
        )}

        {/* Current Number Display */}
        <div className="current-number-display">
          <div className="current-label">Last Number Said</div>
          <div className="current-number">{currentNumber}</div>
          <div className="target-info">Target: 100</div>
          {gameStatus === 'playing' && (
            <div className="remaining-info">
              Remaining: {100 - currentNumber}
            </div>
          )}
        </div>

        {/* Game Status */}
        <div className={`game-status ${gameStatus}`}>
          {gameStatus === 'ready' && (
            <p>Click "Start Game" to begin!</p>
          )}
          {gameStatus === 'playing' && (
            <p>{isPlayerTurn ? '🎯 Your Turn! Pick a number' : '🤖 Computer is thinking...'}</p>
          )}
          {gameStatus === 'playerWon' && (
            <div className="win-message">
              <div className="trophy">🏆</div>
              <p>Congratulations! You Won!</p>
              <p className="win-detail">You reached 100 first!</p>
            </div>
          )}
          {gameStatus === 'computerWon' && (
            <div className="lose-message">
              <div className="trophy">💻</div>
              <p>Computer Won!</p>
              <p className="lose-detail">Computer reached 100 first. Try again!</p>
            </div>
          )}
        </div>

        {/* Number Selection Buttons */}
        {gameStatus === 'playing' && isPlayerTurn && (
          <div className="number-selection">
            <p className="selection-hint">
              Choose a number from {currentNumber + 1} to {Math.min(currentNumber + 10, 100)}:
            </p>
            <div className="number-buttons">
              {getPossibleMoves(currentNumber).map(num => (
                <button
                  key={num}
                  className="number-btn"
                  onClick={() => handlePlayerMove(num)}
                >
                  {num}
                  <span className="add-amount">+{num - currentNumber}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Game History */}
        {gameHistory.length > 0 && (
          <div className="game-history">
            <h3 className="history-title">📜 Game History</h3>
            <div className="history-list" ref={historyRef}>
              {gameHistory.map((entry, index) => (
                <div
                  key={index}
                  className={`history-entry ${entry.player.toLowerCase()}`}
                >
                  <div className="history-player">{entry.player}</div>
                  <div className="history-message">{entry.message}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Control Buttons */}
        <div className="game-controls">
          {gameStatus === 'ready' && (
            <button className="control-btn start-btn" onClick={startGame}>
              🎮 Start Game
            </button>
          )}
          {(gameStatus === 'playerWon' || gameStatus === 'computerWon') && (
            <>
              <button className="control-btn play-again-btn" onClick={startGame}>
                🔄 Play Again
              </button>
              <button className="control-btn reset-btn" onClick={resetGame}>
                🏠 Back to Start
              </button>
            </>
          )}
          {gameStatus === 'playing' && (
            <button className="control-btn forfeit-btn" onClick={resetGame}>
              ❌ Forfeit Game
            </button>
          )}
          <button className="control-btn rules-btn" onClick={() => setShowRules(!showRules)}>
            📖 {showRules ? 'Hide Rules' : 'Show Rules'}
          </button>
          {(playerScore > 0 || computerScore > 0) && (
            <button className="control-btn reset-scores-btn" onClick={resetScores}>
              🔄 Reset Scores
            </button>
          )}
        </div>

        {/* Rules Section */}
        {showRules && (
          <div className="rules-section">
            <h3 className="rules-title">📖 Game Rules</h3>
            <ul className="rules-list">
              <li>🎯 <strong>Goal:</strong> Be the first to say the number <strong>100</strong></li>
              <li>🔢 <strong>How to Play:</strong> On your turn, choose a number that is <strong>1 to 10 more</strong> than the last number said</li>
              <li>↔️ <strong>Turns:</strong> You and the computer take turns saying numbers</li>
              <li>🏆 <strong>Win Condition:</strong> First player to reach exactly <strong>100</strong> wins</li>
              <li>🎮 <strong>Example Game:</strong>
                <ul className="example-list">
                  <li><strong>You say:</strong> 5 (added 5 to 0)</li>
                  <li><strong>Computer says:</strong> 15 (added 10 to your 5)</li>
                  <li><strong>You say:</strong> 23 (added 8 to computer's 15)</li>
                  <li><strong>Computer says:</strong> 30 (added 7 to your 23)</li>
                  <li>...game continues until someone reaches 100!</li>
                </ul>
              </li>
              <li>😊 <strong>Easy Mode:</strong> Computer makes random moves</li>
              <li>😐 <strong>Medium Mode:</strong> Computer plays smart 70% of the time</li>
              <li>😈 <strong>Hard Mode:</strong> Computer uses optimal strategy (very challenging!)</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePage;
