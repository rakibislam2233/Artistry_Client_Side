import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BiSolidSchool } from "react-icons/bi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useCourse from "../../hooks/useCourse";
import useInstructor from "../../hooks/useInstructor";
import CourseDetails from "../Home/TrendingCourse/CourseDetails";
import "../Home/style.css";
import Loading from "../Shared/Loading";
const SingleCourse = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();
  const [singleCourse, setsingleCourse] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [courses] = useCourse();
  const approvedCourses = courses?.filter(
    (course) => course?.status === "approved"
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  useEffect(() => {
    axios(`https://artistryserverside-production.up.railway.app/singleCourse/${id}`).then((res) => {
      setIsLoading(false);
      setsingleCourse(res.data);
    });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }
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
  // function related work here
  const handleAddToCart = () => {
    if (user) {
      const {
        _id,
        courseTitle,
        instructorName,
        instructorEmail,
        instructorImage,
        courseImage,
        coursePrice,
        courseDuration,
        availableSeats,
        status,
        role,
      } = singleCourse;
      const addToCartInfo = {
        courseId: _id,
        courseTitle,
        instructorName,
        instructorEmail,
        instructorImage,
        courseImage,
        userEmail: user?.email,
        coursePrice,
        courseDuration,
        availableSeats,
        status,
        role,
      };
      axios
        .post(`https://artistryserverside-production.up.railway.app/addToCart`, addToCartInfo)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success("Add to cart successfully");
          }
        })
        .catch((err) => toast.error(err.message));
    } else {
      Swal.fire({
        text: "Please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      })
        .then((result) => {
          if (result.isConfirmed) {
            navigate("/login", { state: { from: location } });
          }
        })
        .catch((err) => toast.error(err.message));
    }
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url(${singleCourse?.courseImage})` }}
        className="w-full bg-center h-72  bg-cover bg-gray-950 bg-blend-overlay bg-opacity-70 p-10"
      >
        <div className="space-y-3">
          <div className="flex gap-3 items-center">
            <img
              className="w-16 h-16 rounded-full"
              src={singleCourse?.instructorImage}
              alt=""
            />
            <div>
              <h1 className="text-xl font-semibold">
                {singleCourse?.instructorName}
              </h1>
              <h3>{singleCourse?.role}</h3>
            </div>
          </div>
          <h1 className="font-bold text-4xl  ">{singleCourse?.courseTitle}</h1>
          <div className="flex gap-5">
            <p>Price : ${singleCourse?.coursePrice}</p>
            <p className="flex gap-1 justify-center items-center">
              <BiSolidSchool className="w-6 h-6" />{" "}
              {singleCourse?.availableSeats}
            </p>
            <p className="flex gap-1 justify-center items-center">
              <AiOutlineFieldTime className="w-6 h-6" />{" "}
              {singleCourse?.courseDuration}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-5 md:px-10 py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="md:col-span-7 space-y-5">
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold">Overview</h3>
              <p className="py-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Necessitatibus totam reiciendis neque blanditiis natus illo
                atque ipsum distinctio ipsa animi officiis perspiciatis
                consectetur pariatur inventore, facilis et, perferendis delectus
                dignissimos!
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold">Course Content</h3>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold">About Instructor</h3>
              <div className="flex justify-between gap-5 py-5">
                <div className="flex gap-3 items-center">
                  <img
                    className="w-16 h-16 rounded-full"
                    src={singleCourse?.instructorImage}
                    alt=""
                  />
                  <div>
                    <h1 className="text-xl font-semibold">
                      {singleCourse?.instructorName}
                    </h1>
                    <h3>{singleCourse?.role}</h3>
                  </div>
                </div>
                <Rating
                  style={{ maxWidth: 100 }}
                  readOnly
                  value={singleCourse?.rating}
                />
              </div>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                minus adipisci dolores eligendi eos laborum consectetur maxime
                dolorum doloribus animi iste, voluptatum veniam nemo, repellat
                quasi. Iure non quidem optio.
              </h3>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-2xl">
              <div>
                <iframe
                  className="w-full h-72 rounded"
                  src="https://www.youtube.com/embed/pU79v3GQP5U?si=LpZA3fyhGfROBE_o"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="bg-gray-900  p-8 rounded-2xl flex flex-col gap-5">
                {isAdmin || isInstructor ? (
                  <button
                    disabled
                    className="py-2 px-7  bg-gray-700 rounded font-semibold  text-white"
                  >
                    Add to Bookmark
                  </button>
                ) : (
                  <button
                    className="py-2 px-7  bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded font-semibold  text-white"
                  >
                    Add to Bookmark
                  </button>
                )}
                {isAdmin || isInstructor ? (
                  <button
                    disabled
                    className="py-2 px-7  bg-gray-700 rounded font-semibold  text-white"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToCart(singleCourse)}
                    className="py-2 px-7  bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded font-semibold  text-white"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="py-10">
          <h3 className="text-2xl font-semibold">Related Courses</h3>
          <Slider className="py-5" {...settings}>
            {approvedCourses?.slice(0, 10).map((course, i) => (
              <CourseDetails course={course} key={i + 1} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
