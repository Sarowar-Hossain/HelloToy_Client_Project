import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.congif";

export const UserContext = createContext();

const Context = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  // googleSignIn
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  // userSignUp
  const userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // loginUserWithEmailPass
  const loginUserWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // reset password
  const passReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // logout
  const logout = () => {
    return signOut(auth);
  };

  // get signin user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe();
  }, []);

  const info = {
    user,
    googleSignIn,
    userSignUp,
    loginUserWithEmailPass,
    passReset,
    logout,
    setUser
  };
  return <UserContext.Provider value={info}>{children}</UserContext.Provider>;
};

export default Context;
