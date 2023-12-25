import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import { HiArrowLeft } from "react-icons/hi";

const Login = () => {
  return (
    <section>
      <div className="w-full min-h-screen px-5 py-10 flex justify-center">
        <div className="w-full lg:w-[40%]  bg-gray-900 p-8 border rounded-xl border-gray-700 space-y-3">
          <div className="flex flex-col md:flex-row  gap-4 justify-between items-center pb-5">
            <h3 className="text-3xl font-semibold text-center">
              Login To Your Account
            </h3>
            <Link to={"/"}>
            <button className="py-2 px-5 bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded  flex justify-center items-center gap-1">
              <HiArrowLeft /> Go Back
            </button>
          </Link>
          </div>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
