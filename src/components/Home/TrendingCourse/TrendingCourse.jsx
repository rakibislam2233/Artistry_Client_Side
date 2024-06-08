import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import CourseDetails from "./CourseDetails";
import useCourse from "../../../hooks/useCourse";
const TrendingCourse = () => {
  const [courses] = useCourse()
  const approvedCourses = courses?.filter(course => course?.status === 'approved')
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="w-full px-5 md:px-10 py-10 ">
      <div className="space-y-1">
        <h3 className="text-3xl font-semibold">Trending Course</h3>
        <div className="w-20 h-1 bg-gradient-to-r from-[#1DC1B3] to-green-500 "></div>
      </div>
      <Slider className="py-5 mt-10" {...settings}>
        {approvedCourses?.slice(0,10).map((course, i) => (
          <CourseDetails course={course} key={i + 1} />
        ))}
      </Slider>
    </div>
  );
};

export default TrendingCourse;
