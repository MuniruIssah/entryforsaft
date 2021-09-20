import React, { useContext, useState, useEffect } from "react";
import {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../backend/config";
import { Spin } from "antd";
const AuthContext = React.createContext();
//using the context
export function useAuth() {
  return useContext(AuthContext);
}

//provide then cotext
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function signUp(email, password, username) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(function (userCredential) {
        return updateProfile(userCredential.user, {
          displayName: username,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return signOut(auth);
  }
  //   function resetPassword(email) {
  //     return sendPasswordResetEmail(auth, email);
  //   }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
    logout,
    // resetPassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {loading ? <Loader /> : <> {children}</>}
    </AuthContext.Provider>
  );
}

const Loader = () => {
  return (
    <div style={{width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Spin size="large" />
    </div>
  );
};
