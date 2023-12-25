import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="w-full h-full px-5 md:px-10 bg-gray-900 py-12 ">
      <div className="grid grid-cols-2 md:grid-cols-12 gap-10 pb-8">
        <div className="md:col-span-3">
    <Link to={'/'}><h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-green-500 bg-clip-text">Artistry</h1></Link>
          <div className="mt-8 space-y-3">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam sint praesentium quo molestiae nemo recusandae?
            </p>
            <div className="flex gap-2 items-center flex-wrap">
              <button className="w-10 h-10 border rounded-full flex justify-center items-center hover:bg-green-500 duration-300 transition-all">
                <FiFacebook className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 border rounded-full flex justify-center items-center hover:bg-green-500 duration-300 transition-all">
                <FiTwitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 border rounded-full flex justify-center items-center hover:bg-green-500 duration-300 transition-all">
                <FiInstagram className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 border rounded-full flex justify-center items-center hover:bg-green-500 duration-300 transition-all">
                <FiYoutube className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <h1 className="text-xl font-semibold">Quick Link</h1>
          <div className="mt-8 space-y-2">
            <p>
              <Link className="hover:text-green-500" to={"/"}>
                Home
              </Link>
            </p>
            <p>
              <Link className="hover:text-green-500" to={"/about"}>
                About
              </Link>
            </p>
            <p>
              <Link className="hover:text-green-500" to={"/instructors"}>
                Instructors
              </Link>
            </p>
            <p>
              <Link className="hover:text-green-500" to={"/course"}>
                Course
              </Link>
            </p>
            <p>
              <Link className="hover:text-green-500" to={"/blogs"}>
                Blogs
              </Link>
            </p>
            <p>
              <Link className="hover:text-green-500" to={"/contact"}>
                Contact
              </Link>
            </p>
          </div>
        </div>
        <div className="md:col-span-3">
          <h1 className="text-xl font-semibold">Useful Link</h1>
          <div className="mt-8 space-y-2">
            <p>
              <Link className="hover:text-green-500" to={"/"}>
                Privacy Policy
              </Link>
            </p>
            <p>
              <Link className="hover:text-green-500" to={"/"}>
                Terms and Conditions
              </Link>
            </p>
            <p>
              <Link className="hover:text-green-500" to={"/"}>
                Disclaimer
              </Link>
            </p>
            <p>
              <Link className="hover:text-green-500" to={"/"}>
                Support
              </Link>
            </p>
            <p>
              <Link className="hover:text-green-500" to={"/"}>
                FAQ
              </Link>
            </p>
          </div>
        </div>
        <div className="md:col-span-3">
          <h1 className="text-xl font-semibold">Contact Us</h1>
          <div className="mt-8 space-y-3">
            <p className="flex gap-2">
              <CiLocationOn className="w-5 h-5" /> Thakurgaon Sadar Thakurgaon,Bangladesh
            </p>
            <p className="flex gap-2">
              <MdOutlineMail className="w-5 h-5" />
              support@domain.com
            </p>
            <p className="flex gap-2">
              <LuPhoneCall className="w-5 h-5" />
              (+42)81 4754 345
            </p>
          </div>
        </div>
      </div>
      <hr />
      <h1 className="text-center pt-10">
        © Copyright 2023, All Rights Reserved by Artistry
      </h1>
    </div>
  );
};

export default Footer;
