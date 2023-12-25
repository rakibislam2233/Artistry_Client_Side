import { useContext } from "react";
import { UserContext } from "../Provider/AuthProvider";

const useAuth = () => {
  const { user, createNewUser, login, logOut, loading, googleLogin } =
    useContext(UserContext);
  return { user, createNewUser, login, logOut, loading, googleLogin };
};

export default useAuth;
