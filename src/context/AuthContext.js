import React, { createContext, useState, useEffect, useContext } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, googleProvider, db } from '../config/firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  async function signup(email, password, displayName) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    await updateProfile(userCredential.user, { displayName });
    
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      uid: userCredential.user.uid,
      email: email,
      displayName: displayName,
      createdAt: new Date().toISOString(),
      progress: {
        tricksViewed: [],
        gameScores: [],
        totalGamesPlayed: 0,
        wins: 0,
        losses: 0,
        favoriteCategory: null
      }
    });
    
    return userCredential.user;
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function loginWithGoogle() {
    const result = await signInWithPopup(auth, googleProvider);
    
    const userDoc = await getDoc(doc(db, 'users', result.user.uid));
    
    if (!userDoc.exists()) {
      await setDoc(doc(db, 'users', result.user.uid), {
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
        createdAt: new Date().toISOString(),
        progress: {
          tricksViewed: [],
          gameScores: [],
          totalGamesPlayed: 0,
          wins: 0,
          losses: 0,
          favoriteCategory: null
        }
      });
    }
    
    return result.user;
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  async function loadUserProfile(uid) {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
      setUserProfile(userDoc.data());
    }
  }

  async function markTrickViewed(trickId, category) {
    if (!currentUser) return;
    
    const userRef = doc(db, 'users', currentUser.uid);
    const userDoc = await getDoc(userRef);
    
    if (userDoc.exists()) {
      const currentProgress = userDoc.data().progress;
      const tricksViewed = currentProgress.tricksViewed || [];
      
      if (!tricksViewed.includes(trickId)) {
        tricksViewed.push(trickId);
        
        await updateDoc(userRef, {
          'progress.tricksViewed': tricksViewed
        });
        
        setUserProfile(prev => ({
          ...prev,
          progress: {
            ...prev.progress,
            tricksViewed
          }
        }));
      }
    }
  }

  async function updateGameScore(won, score, difficulty) {
    if (!currentUser) return;
    
    const userRef = doc(db, 'users', currentUser.uid);
    const userDoc = await getDoc(userRef);
    
    if (userDoc.exists()) {
      const currentProgress = userDoc.data().progress;
      const gameScores = currentProgress.gameScores || [];
      
      gameScores.push({
        score,
        won,
        difficulty,
        date: new Date().toISOString()
      });
      
      const wins = won ? (currentProgress.wins || 0) + 1 : currentProgress.wins || 0;
      const losses = !won ? (currentProgress.losses || 0) + 1 : currentProgress.losses || 0;
      
      await updateDoc(userRef, {
        'progress.gameScores': gameScores,
        'progress.totalGamesPlayed': (currentProgress.totalGamesPlayed || 0) + 1,
        'progress.wins': wins,
        'progress.losses': losses
      });
      
      setUserProfile(prev => ({
        ...prev,
        progress: {
          ...prev.progress,
          gameScores,
          totalGamesPlayed: (currentProgress.totalGamesPlayed || 0) + 1,
          wins,
          losses
        }
      }));
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await loadUserProfile(user.uid);
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userProfile,
    signup,
    login,
    loginWithGoogle,
    logout,
    resetPassword,
    markTrickViewed,
    updateGameScore
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}