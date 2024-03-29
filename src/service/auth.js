import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { firebaseAuth } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

export const auth = firebaseAuth;

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      const navigate = useNavigate();
      navigate("/SignUp");
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      const email = err.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(err);
    });
};

export const onSignOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

//닉네임 중복 기능 불필요
export const setDisplayName = async (displayName) => {
  updateProfile(auth.currentUser, {
    displayName: displayName,
  })
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};

export const getUID = () => {
  return auth.currentUser.uid;
};
