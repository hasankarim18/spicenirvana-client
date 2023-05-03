import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

    const auth = getAuth(app)  

  //  console.log(user?.photoURL);
    

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


    /**Google authentication */
    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = ()=> {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }

    /** Github authentication */
    const githubProvider = new GithubAuthProvider();

    const signInWithWithGithub = ()=> {
      return signInWithPopup(auth, githubProvider)
    }


    /**Auth Context value */
      const userInfo = {
        user,
        signUpWithPassword,
        updateUser,
        loading,
        logout,
        signInWithPassword,
        signInWithGoogle,
        signInWithWithGithub,
      };



    return (
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;