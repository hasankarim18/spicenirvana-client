import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

    const auth = getAuth(app)  
    

  const signUpWithPassword = (email, password)=> {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInWithPassword = (email, password)=> {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUser = (currentUser,name=null, photo=null)=> {
  return updateProfile(currentUser, {
     displayName: name,
     photoURL: photo,
   })
    
  }  

  const logout = ()=> {
    return signOut(auth)
  }

    const userInfo = {
      user,
      signUpWithPassword,
      updateUser,
      loading,
      logout,
      signInWithPassword,
    };

    useEffect(() => {
      const unsubscirbe = onAuthStateChanged(auth, (currentUser) => {
        //   console.log("auth state change", currentUser);
        setUser(currentUser);
        setLoading(false);
      });
      // stop observing when unmounty
      return () => {
        unsubscirbe();
      };
    }, [auth]);

    return (
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;