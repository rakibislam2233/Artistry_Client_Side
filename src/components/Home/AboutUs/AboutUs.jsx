import { Link } from "react-router-dom";
import aboutImage from "../../../assets/AboutUs/aboutus3.jpg";
import Button from "../../Shared/Button";
const AboutUs = () => {
  return (
    <div className="w-full py-20 px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-900">
      <div className="overflow-hidden rounded">
        <img
          className="w-full h-full rounded hover:scale-110 hover:cursor-pointer transition-all duration-300 "
          src={aboutImage}
          alt=""
        />
      </div>
      <div className="space-y-5">
        <h2 className="font-semibold text-xl">About Artistry</h2>
        <h3 className="text-5xl font-semibold uppercase leading-tight tracking-wide">
          Welcome To The{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DC1B3] to-green-500">
            Online Learning
          </span>{" "}
          Center
        </h3>
        <h3 className="text-xl">
          There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form by injected humour or
          randomised words which do not look.
        </h3>
        <div>
          <Link to={"/course"} className="mt-5">
            <Button
              transition={"hover:translate-x-2 transition-all duration-300"}
              title={"View Course"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
