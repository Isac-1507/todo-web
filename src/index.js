import "./firebaseConfig.js"; // Initialize Firebase
import { handleSignUp } from "./signUpHandler.js";
import { handleSignIn } from "./signInHandler.js";
import { addTodoToUser, pushData, setData } from "./firebaseUtils.js";
import { getCurrentTime, getUnixEpochTime } from "./getTime.js";

let currentUID = null; // Define a global variable

const signUpForm = document.getElementById("sign-up-form");
const signInForm = document.getElementById("sign-in-form");
const todoInput = document.getElementById("todoEventHandler");
const modal = document.getElementById("id01");

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

todoInput.addEventListener("submit", async (e) => {
  e.preventDefault();

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
});

