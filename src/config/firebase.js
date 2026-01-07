import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDT5Mq_oulhM8X9UEauFqJF_8MW2skG6fg",
  authDomain: "math-tricks-app.firebaseapp.com",
  projectId: "math-tricks-app",
  storageBucket: "math-tricks-app.firebasestorage.app",
  messagingSenderId: "311103707924",
  appId: "1:311103707924:web:0224133f9a03224ed78001",
  //measurementId: "G-3CT0J77L6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;