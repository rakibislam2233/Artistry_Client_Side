import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineGoogle } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { ImSpinner6 } from "react-icons/im";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Provider/AuthProvider";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { login, googleLogin } = useContext(UserContext);
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true)
    const { email, password } = data;
    login(email, password)
      .then((result) => {
        if (result?.user) {
          setLoading(false);
          toast.success(`Welcome ${result.user?.displayName}`);
          reset();
          navigate(from, { replace: true });
        }
      })
      .catch((err) => alert(err.message));
  };
  const handleGoogle = () => {
    googleLogin()
      .then((res) => {
        const user = res?.user;
        if (res?.user) {
          const userInfo = {
            fullName: user?.displayName,
            email: user?.email,
            imageUrl: user?.photoURL,
          };
          axios
            .put(`https://artistryserverside-production.up.railway.app/user/${user?.email}`, userInfo)
            .then((res) => {
              if (res) {
                toast.success(`Welcome to ${user?.displayName}`);
                navigate(from, { replace: true });
              }
            })
            .catch((err) => {
              toast.error(err.message);
            });
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <div className="space-y-2">
          <label htmlFor="email">
            Email <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", { required: true })}
            placeholder="Enter Your Email"
            className={`w-full py-2 px-5 rounded bg-gray-900 border border-gray-700 outline-none`}
          />
          {errors.email && (
            <span className="text-rose-500">Please Enter Your Email</span>
          )}
        </div>
        <div className="space-y-2 relative">
          <label htmlFor="password">
            Password <span className="text-rose-500">*</span>
          </label>
          <input
            type={`${open ? "password" : "text"}`}
            name="password"
            id="password"
            placeholder="Enter Your password"
            {...register("password", { required: true, minLength: 6 })}
            className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700 "
          />
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-3 top-9 cursor-pointer"
          >
            {open ? (
              <VscEye className="w-6 h-6" />
            ) : (
              <VscEyeClosed className="w-6 h-6" />
            )}
          </div>
          {errors.password && errors.password.type === "required" && (
            <span className="text-rose-500">Please Enter Your Password</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span className="text-rose-500">
              Password Minimum six characters
            </span>
          )}
        </div>
        <div className="flex justify-between py-5">
          <div className="flex gap-2">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Remember Me</label>
          </div>
          <div>
            <Link to={""}>Forgot Password?</Link>
          </div>
        </div>
        <div className="py-3">
          <button className="w-full py-2 px-7  bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded font-semibold  text-white">
            {loading ? <span className="flex justify-center text-center"><ImSpinner6 className="w-6 h-6 animate-spin"/> Loading..</span> : "Login"}
          </button>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <div className="w-full h-0.5 bg-gray-700"></div>
          <h3>Or</h3>
          <div className="w-full h-0.5 bg-gray-700"></div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div
            title="Google"
            onClick={() => handleGoogle()}
            className="w-10 h-10 border border-gray-700 rounded-full flex justify-center items-center bg-gradient-to-r from-[#1DC1B3] to-green-500 cursor-pointer"
          >
            <AiOutlineGoogle className="w-5 h-5" />
          </div>
          <div
            title="Facebook"
            className="w-10 h-10 border border-gray-700 rounded-full flex justify-center items-center bg-gradient-to-r from-[#1DC1B3] to-green-500 cursor-pointer"
          >
            <FiFacebook className="w-5 h-5" />
          </div>
        </div>
        <h3 className="text-center">
          {`Don't have an account ?`}{" "}
          <Link className="hover:text-green-500" to={"/register"}>
            Register.
          </Link>
        </h3>
      </form>
      <Toaster />
    </>
  );
};

export default LoginForm;
