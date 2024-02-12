import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./firebaseConfig";

const provider = new GoogleAuthProvider();

const auth = firebaseAuth;

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      const email = err.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(err);
    });
};
