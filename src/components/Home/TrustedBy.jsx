import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Slider from "react-slick";
import image1 from "../../assets/Trustd/lead-01.png";
import image2 from "../../assets/Trustd/lead-02.png";
import image3 from "../../assets/Trustd/lead-03.png";
import image4 from "../../assets/Trustd/lead-04.png";
import image5 from "../../assets/Trustd/lead-05.png";
import image6 from "../../assets/Trustd/lead-06.png";
const TrustedBy = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
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
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full px-5 md:px-10 py-10 bg-gray-900">
      <div className="space-y-1">
        <h3 className="text-3xl font-semibold">Trusted By</h3>
        <div className="w-20 h-1 bg-gradient-to-r from-[#1DC1B3] to-green-500 "></div>
      </div>
      <Slider className="py-5 mt-10" {...settings}>
        <div>
          <img className="w-32 mx-auto" src={image1} alt="" />
        </div>
        <div>
          <img className="w-32 mx-auto" src={image2} alt="" />
        </div>
        <div>
          <img className="w-32 mx-auto" src={image3} alt="" />
        </div>
        <div>
          <img className="w-32 mx-auto" src={image4} alt="" />
        </div>
        <div>
          <img className="w-32 mx-auto" src={image5} alt="" />
        </div>
        <div>
          <img className="w-32 mx-auto" src={image6} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default TrustedBy;
