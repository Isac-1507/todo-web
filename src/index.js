import "./firebaseConfig.js"; // Initialize Firebase
import { handleSignUp } from "./signUpHandler.js";
import { handleSignIn } from "./signInHandler.js";
import { addTodoToUser, pushData, setData } from "./firebaseUtils.js";
import { getCurrentTime, getUnixEpochTime } from "./getTime.js";
import { db } from "./firebaseConfig.js";
import { ref, get, update } from "firebase/database";
import { displayTodos } from "./pushTodosToHTML.js";

let currentUID = null; // Define a global variable

const signUpForm = document.getElementById("sign-up-form");
const signInForm = document.getElementById("sign-in-form");
const todoInput = document.getElementById("todoEventHandler");
const modal = document.getElementById("id01");
const modalLogin = document.getElementById("id02");

signUpForm.addEventListener("submit", async (e) => {
  currentUID = await handleSignUp(e);
  console.log("Sign-Up UID:", currentUID);
  // Now you can use currentUID to push additional data if needed
});

signInForm.addEventListener("submit", async (e) => {
  currentUID = await handleSignIn(e);
  console.log("Sign-In UID:", currentUID);
  // Now you can use currentUID to push additional data if needed
});

// Close modal when user clicks anywhere outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onclick = function(event) {
  if (event.target == modalLogin) {
    modalLogin.style.display = "none";
  }
};

//...
function loadTodos() {
  const todosRef = ref(db, `users/${currentUID}/todos`);
  get(todosRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const todos = snapshot.val();
        displayTodos(todos);
      } else {
        console.log("No todos available, try make some!");
      }
    })
    .catch((error) => {
      console.error("Error fetching todos:", error);
    });
}

document.addEventListener("DOMContentLoaded", loadTodos);

todoInput.addEventListener("submit", async (e) => {
  e.preventDefault();
if (currentUID != null) {
  console.log(currentUID);
  const currentTime = getUnixEpochTime();
  console.log(currentTime);
  const todoValue = document.getElementById("todoInput").value;
  const todoHeading = "Todo";
  console.log(todoValue);
  addTodoToUser(currentUID, { [todoHeading]: todoValue }, false);
  console.log(
    `Todo added for user ${currentUID}: ${todoHeading} - ${todoValue}`,
  );
  loadTodos()
} else {
  console.warn("You are not logged in!")
}
});

export function updateTodoStatus(key, isCompleted) {
  const todoRef = ref(db, `users/${currentUID}/todos/${key}`);
  update(todoRef, { completed: isCompleted }).then(() => {
    console.log(`Todo ${key} updated to ${isCompleted ? 'completed' : 'not completed'}`);
  }).catch((error) => {
    console.error('Error updating todo:', error);
  });
}

