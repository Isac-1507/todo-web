// firebaseUtils.js
import { db } from './firebaseConfig.js';
import { ref, set, push } from 'firebase/database';

// Function to add data to a user's node
export function pushData(uid, data) {
  const userRef = ref(db, `users/${uid}`);
  const newRef = push(userRef); // Create a new child node
  set(newRef, data); // Add data to the new node
}

// Function to add data to a user's node
export function setData(uid, data) {
  if (uid && data && Object.keys(data).length > 0) {
    const userRef = ref(db, `users/${uid}`);
    set(userRef, data)
      .then(() => console.log('Data set successfully'))
      .catch(error => console.error('Error setting data:', error));
  } else {
    console.error('Invalid UID or data:', uid, data);
  }
}
