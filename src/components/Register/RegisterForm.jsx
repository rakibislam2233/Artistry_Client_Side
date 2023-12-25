import axios from "axios";
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { ImSpinner6 } from "react-icons/im";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const { createNewUser,googleLogin} = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);
  const [error, setError] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(true);
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
    setLoading(true);
    setError(false);
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
      return setError(true);
    }
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=9d44eaf618447b8f95c8ff98785d99c3`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;
        const { fullName, email, password, phoneNumber } = data;
        createNewUser(email, password)
          .then((res) => {
            const user = res.user;
            updateProfile(user, {
              displayName: fullName,
              photoURL: imageUrl,
            })
              .then((res) => {
                const userInfo = {
                  fullName,
                  email,
                  password,
                  imageUrl,
                  phoneNumber,
                  role: "student",
                };
                axios
                  .put(`https://artistryserverside-production.up.railway.app/user/${user?.email}`, userInfo)
                  .then((res) => {
                    if (res.data.upsertedId) {
                      setLoading(false);
                      toast.success(`Welcome to ${fullName}`);
                      reset();
                      navigate("/");
                    }
                  })
                  .catch((err) => {
                    toast.error(err.message);
                  });
              })
              .catch((err) => toast.error(err.message));
          })
          .catch((err) => {

          });
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div className="space-y-2">
        <label htmlFor="fullName">
          Full Name <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Enter Your Full Name"
          {...register("fullName", { required: true })}
          className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700"
        />
        {errors.fullName && (
          <span className="text-rose-500">Please Enter Your Full Name</span>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="Full Name">
          Email <span className="text-rose-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          {...register("email", { required: true })}
          className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700"
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
          <span className="text-rose-500">Password Minimum six characters</span>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="password">
          Confirm Password <span className="text-rose-500">*</span>
        </label>
        <input
          type={`${open ? "password" : "text"}`}
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Enter Your Confirm Password"
          {...register("confirmPassword", { required: true, minLength: 6 })}
          className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700"
        />
        {errors.confirmPassword &&
          errors.confirmPassword.type === "required" && (
            <span className="text-rose-500">
              Please Enter Your confirmPassword
            </span>
          )}
        {errors.confirmPassword &&
          errors.confirmPassword.type === "minLength" && (
            <span className="text-rose-500">
              Confirm Password Minimum six characters
            </span>
          )}
        {error && (
          <span className="text-rose-500">Password Does Not Match</span>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="password">
          Phone Number <span className="text-rose-500">*</span>
        </label>
        <input
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Enter Your phoneNumber"
          {...register("phoneNumber", { required: true })}
          className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700"
        />
        {errors.phoneNumber && errors.phoneNumber.type === "required" && (
          <span className="text-rose-500">Please Enter Your Phone Number</span>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="password">
          Upload Your Photo <span className="text-rose-500">*</span>
        </label>
        <input
          type="file"
          name="image"
          id="image"
          {...register("image", { required: true })}
          className="w-full py-2 px-5 rounded bg-gray-900 border border-gray-700"
        />
        {errors.image && errors.image.type === "required" && (
          <span className="text-rose-500">Please Upload Your Photo</span>
        )}
      </div>
      <div className="flex gap-2 items-center py-3">
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => setAcceptTerms(!acceptTerms)}
        />
        <p>
          I agree to the <Link className="text-blue-500">privacy policy</Link>{" "}
          and <Link className="text-blue-500">terms of service</Link> .
        </p>
      </div>
      <div className="py-3">
        <button
          disabled={acceptTerms}
          className={`w-full py-2 px-7  bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded font-semibold text-white ${
            acceptTerms ? "opacity-25" : ""
          }`}
        >
          {loading ? (
            <span className="flex justify-center text-center">
              <ImSpinner6 className="w-6 h-6 animate-spin" /> Loading..
            </span>
          ) : (
            "Register"
          )}
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
          onClick={()=>handleGoogle()}
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
        {`Already have an account ?`}{" "}
        <Link className="hover:text-green-500" to={"/login"}>
          Login.
        </Link>
      </h3>
    </form>
  );
};

export default RegisterForm;
