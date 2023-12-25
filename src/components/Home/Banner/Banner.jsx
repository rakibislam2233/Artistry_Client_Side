import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../Shared/Button";
import "@smastrom/react-rating/style.css";
const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Adjust autoplay speed as needed
  };
  return (
    <div className="w-full z-50">
      <Slider {...settings}>
        <div
          className={`w-full h-[90vh] bg-[url('/src/assets/Banner/banner1.jpg')]  bg-black bg-opacity-80 bg-no-repeat bg-blend-multiply  bg-center  bg-cover`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="w-full px-5 md:px-10 pt-10 md:pt-20 text-white space-y-5">
              <h2 className="text-xl">The Leader in Online Learning</h2>
              <h2 className=" text-5xl font-semibold uppercase leading-tight tracking-wide">
                We Are Best{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DC1B3] to-green-500">
                  Online Courses
                </span>{" "}
                Education.
              </h2>
              <p className="text-xl">
                Welcome to Artistry, your gateway to a world of artistic
                expression and creativity. Our online art school is designed for
                individuals of all skill levels.
              </p>
              <Button transition={"hover:translate-x-2 transition-all duration-300"} title={"Our Course "} />
            </div>
            <div></div>
          </div>
        </div>
        <div
          className={` w-full h-[90vh] bg-[url('/src/assets/Banner/banner2.jpg')]  bg-black bg-opacity-80 bg-no-repeat bg-blend-multiply bg-center  bg-cover`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="w-full px-5 md:px-10 pt-10 md:pt-20 text-white space-y-5">
              <h2 className="text-xl">The Leader in Online Learning</h2>
              <h2 className=" text-5xl font-semibold uppercase leading-tight tracking-wide">
                Improve{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DC1B3] to-green-500">
                  arts and skills
                </span>{" "}
                your Child
              </h2>
              <p className="text-xl">
                Welcome to Artistry, your gateway to a world of artistic
                expression and creativity. Our online art school is designed for
                individuals of all skill levels.
              </p>
              <Button transition={"hover:translate-x-2 transition-all duration-300"} title={"Our Course "} />
            </div>
            <div></div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
