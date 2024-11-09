import { auth } from './firebaseConfig.js';
import { browserSessionPersistence, createUserWithEmailAndPassword, setPersistence } from 'firebase/auth';
import { pushData, setData } from './firebaseUtils.js';

const signUpForm = document.getElementById('sign-up-form');

export async function handleSignUp(e) {
  e.preventDefault();

  const email = signUpForm.email.value;
  const password = signUpForm.password.value;

  try {
    await setPersistence(auth, browserSessionPersistence)
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store initial user data
    setData(user.uid, { email: user.email, createdAt: Date.now() });

    console.log('User created and data stored:', user);
    return user.uid; // Return UID
  } catch (error) {
    console.error('Error creating user:', error);
    throw error; // Propagate error
  }
}
