import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase.config";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)

    const auth = getAuth(app)
  //  console.log(auth);

   

    const userInfo = {
        user
    }

    return (
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;