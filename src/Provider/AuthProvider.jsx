import axios from "axios";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase";
const auth = getAuth(app);

export const UserContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const Googleprovider = new GoogleAuthProvider();
  const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = async () => {
    try {
          await signOut(auth).then().catch();
      } catch { /* empty */ }
  };
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, Googleprovider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if(currentUser){
        axios.post('https://artistry-server-side.vercel.app/jwt',{email:currentUser?.email})
        .then(data=>{
          localStorage.setItem('jwt_token',data.data);
          setLoading(false);
        })
      }else{
          localStorage.removeItem('jwt_token')
        }
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInformation = {
    user,
    createNewUser,
    login,
    logOut,
    loading,
    googleLogin,
  };
  return (
    <UserContext.Provider value={authInformation}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
