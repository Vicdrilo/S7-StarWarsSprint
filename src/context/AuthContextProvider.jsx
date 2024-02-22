import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { auth } from "../firebase-config.js";

const authUser = React.createContext();

export function useAuthUser() {
  return useContext(authUser);
}

export function AuthProvider({ children }) {
  //Uso esta manera por si en algún momento quiero recuperar
  //datos del usuario para mostrarlo en la web
  const [logged, setLogged] = useState(null);

  function signup(user) {
    return createUserWithEmailAndPassword(auth, user.email, user.password);
  }

  function login(user) {
    return signInWithEmailAndPassword(auth, user.email, user.password);
  }
  return (
    <>
      <authUser.Provider value={{ logged, setLogged, signup, login }}>
        {children}
      </authUser.Provider>
    </>
  );
}
