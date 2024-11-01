import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        // Assign error to variables.
        const errorCode = error.code;
        const errorMessage = error.message;

        // Print error to console.
        console.error(errorCode);
        console.error(errorMessage);
    });