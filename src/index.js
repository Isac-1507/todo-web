import './firebaseConfig.js'; // Initialize Firebase
import { handleSignUp } from './signUpHandler.js';
import { handleSignIn } from './signInHandler.js';
import { pushData, setData } from './firebaseUtils.js';

let currentUID = null; // Define a global variable

const signUpForm = document.getElementById('sign-up-form');
const signInForm = document.getElementById('sign-in-form');
const todoInput = document.getElementById('todoEventHandler');

signUpForm.addEventListener('submit', async (e) => {
  currentUID = await handleSignUp(e);
  console.log('Sign-Up UID:', currentUID);
  // Now you can use currentUID to push additional data if needed
});

signInForm.addEventListener('submit', async (e) => {
  currentUID = await handleSignIn(e);
  console.log('Sign-In UID:', currentUID);
  // Now you can use currentUID to push additional data if needed
});

todoInput.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(currentUID)
    const currentTime = Date().toString().split(' ')[0];
    const todoValue = document.getElementById('todoInput').value;
    const todoHeading = 'Todo' + currentTime
    console.log(todoValue);
    setData(currentUID, {[todoHeading]: todoValue}, )
    console.log(`Todo added for user ${currentUID}: ${todoHeading} - ${todoInput}`);
})