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
import { TailSpin } from "react-loader-spinner";

export const UserContext = createContext();

const Context = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // googleSignIn
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  // userSignUp
  const userSignUp = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // loginUserWithEmailPass
  const loginUserWithEmailPass = (email, password) => {
    setLoading(false);
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
      setLoading(false);
    });
    return unsubscribe();
  }, []);

  // spinner
  const spinner = () => {
    return (
      <TailSpin
        height="80"
        width="80"
        color="rgb(12, 187, 231)"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  };

  const info = {
    user,
    loading,
    setLoading,
    googleSignIn,
    userSignUp,
    loginUserWithEmailPass,
    passReset,
    logout,
    setUser,
    spinner
  };
  return <UserContext.Provider value={info}>{children}</UserContext.Provider>;
};

export default Context;
