import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = await GoogleAuthProvider.credentialFromResult(result);
    const { email, uid, photoURL, displayName } = result.user;

    return {
      email,
      uid,
      photoURL,
      displayName,
      ok: true,
    };
  } catch (error) {
    console.log(error);

    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    console.log(resp);

    await updateProfile(FirebaseAuth.currentUser, { displayName });
    return {
      ok: true,
      uid,
      displayName,
      photoURL,
      email,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL, displayName } = resp.user;

    // console.log(resp);
    return {
      ok: true,
      uid,
      displayName,
      photoURL,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};
export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
