import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase.js";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(true);
  const [showCategory, setShowCategory] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        showNav,
        setShowNav,
        showCategory,
        setShowCategory,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}
