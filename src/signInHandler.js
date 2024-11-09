import { auth } from './firebaseConfig.js';
import { browserSessionPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';

const signInForm = document.getElementById('sign-in-form');

export async function handleSignIn(e) {
  e.preventDefault();

  const email = signInForm.email.value;
  const password = signInForm.password.value;

  try {
    await setPersistence(auth, browserSessionPersistence);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userCred = userCredential.user;
    console.log('User signed in:', userCred);
    return userCred.uid; // Return UID
  } catch (error) {
    console.error('Error signing in:', error);
    throw error; // Propagate error
  }
}
