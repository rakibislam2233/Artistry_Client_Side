import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import image from "../../assets/AboutUs/about.jpg";
import useInstructors from "../../hooks/useInstructors";
import InstructorDetails from "../Home/TopInstructor/InstructorDetails";
import CourseDetails from "../Home/TrendingCourse/CourseDetails";
import Loading from "../Shared/Loading";
import NoDataFound from "../Shared/NoDataFound";
import SectionTitle from "../Shared/SectionTitle";
const SingleInstructor = () => {
  const { id } = useParams();
  const [instructors] = useInstructors();
  const [singleInstructor, setSingleInstructor] = useState({});
  const [loading, setLoading] = useState(true);
  const { data: myCourse, isLoading } = useQuery({
    queryKey: ["InstructorCourse", singleInstructor?.email],
    enabled: singleInstructor?.email !== "",
    queryFn: async () => {
      const res = await axios(
        `https://artistryserverside-production.up.railway.app/allCourse/${singleInstructor?.email}`
      );
      return res.data;
    },
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  useEffect(() => {
    axios(`https://artistryserverside-production.up.railway.app/singleInstructor/${id}`).then((res) => {
      setLoading(false);
      setSingleInstructor(res.data);
    });
  }, [id]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (loading || isLoading) {
    return <Loading />;
  }
  return (
    <div className="w-full">
      <SectionTitle title={"Instructor Details"} image={image} />
      <div className="w-full grid grid-cols-1 md:grid-cols-12  gap-5 md:gap-16 py-10 px-5 md:px-10">
        <div className="md:col-span-5 border p-10 rounded-2xl border-gray-700">
          <img
            className="w-full h-96 rounded-2xl"
            src={singleInstructor?.imageUrl}
            alt=""
          />
          <div className="space-y-8 pt-5">
            <div className="space-y-5">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="space-y-2">
                  <h3 className="text-3xl font-semibold">
                    {singleInstructor?.fullName}
                  </h3>
                  <span>{singleInstructor?.role}</span>
                </div>
                <div className="space-y-2">
                  <h2 className="flex gap-2 justify-center items-center">
                    <BsFillTelephoneFill className="w-5 h-5 text-green-500" />{" "}
                    {singleInstructor?.phoneNumber}
                  </h2>
                  <h2 className="flex gap-2 justify-center items-center">
                    <AiOutlineMail className="w-5 h-5 text-green-500" />{" "}
                    {singleInstructor?.email}
                  </h2>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <button className="w-10 h-10 border border-gray-700 rounded-full flex justify-center items-center bg-gradient-to-r from-[#1DC1B3] to-green-500 cursor-pointer">
                  <FiFacebook className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 border border-gray-700 rounded-full flex justify-center items-center bg-gradient-to-r from-[#1DC1B3] to-green-500 cursor-pointer">
                  <FiTwitter className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 border border-gray-700 rounded-full flex justify-center items-center bg-gradient-to-r from-[#1DC1B3] to-green-500 cursor-pointer">
                  <FiInstagram className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold">About Me</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                quis id quo, corporis unde fuga consequatur quae. Fuga, totam
                officia.
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <h3 className="text-3xl font-semibold">My Course</h3>
          {myCourse?.length === 0 ? (
            <NoDataFound />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
              {myCourse?.map((course, i) => (
                <CourseDetails key={i} course={course} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-3xl font-semibold">Other Instructor</h3>
        <Slider className="py-5" {...settings}>
          {instructors?.map((instructor, i) => (
            <InstructorDetails key={i} instructor={instructor} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SingleInstructor;
