import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

    const auth = getAuth(app)
   
    console.log(user);

  const signUpWithPassword = (email, password)=> {
    return createUserWithEmailAndPassword(auth, email, password)
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