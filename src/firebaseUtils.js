// firebaseUtils.js
import { db } from './firebaseConfig.js';
import { ref, set, push, update } from 'firebase/database';
import { getUnixEpochTime } from './getTime.js';

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
    update(userRef, data)
      .then(() => console.log('Data set successfully'))
      .catch(error => console.error('Error setting data:', error));
  } else {
    console.error('Invalid UID or data:', uid, data);
  }
}

export function addTodoToUser(uid, todo, completed) {
  const currentTime = getUnixEpochTime()
  const userTodosRef = ref(db, `users/${uid}/todos/${currentTime}`);
  set(userTodosRef, todo, completed) // Set the data for the new todo
    .then(() => console.log('Todo added successfully'))
    .catch(error => console.error('Error adding todo:', error));
}

