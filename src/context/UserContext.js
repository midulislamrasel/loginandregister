import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

//---------Auth------
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

//-----------Context-------------
export const AuthContext = createContext();

//===========Mane Funcution==========
function UserContext({ children }) {
  const [user, setUser] = useState({ displayName: "Midul islam Rasel" });

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userlogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutPage = () => {
    return signOut(auth);
  };

  const googleSingIn = () => {
    return signInWithPopup(auth, provider);
  };

  //============ Why are we doing this ==================
  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (curentUser) => {
      setUser(curentUser);
    });
    return () => {
      unsbscribe();
    };
  }, []);

  const authInfo = { user, createUser, userlogin, logOutPage, googleSingIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
export default UserContext;
