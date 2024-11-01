import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";

signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // Print error
        console.error(errorCode);
        console.error(errorMessage);
    })