import { getAuth, signInWithPopup, } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleLogin = ()=>{
         return signInWithPopup(auth, googleProvider);
    }
  const authInfo = {
    user,
    googleLogin,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
