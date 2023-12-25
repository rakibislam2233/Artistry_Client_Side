import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialsDetails from "./TestimonialsDetails";
import useTestimonial from "../../../hooks/useTestimonial";
const Testimonial = () => {
 const [testimonials] = useTestimonial()
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="w-full px-5 md:px-10 py-10 bg-gray-900">
      <div className="space-y-1">
        <h3 className="text-3xl font-semibold">Our Testimonials</h3>
        <div className="w-20 h-1 bg-gradient-to-r from-[#1DC1B3] to-green-500 "></div>
      </div>
      <div className="w-full max-w-4xl mx-auto mt-16">
        <Slider className="px-5" {...settings}>
          {testimonials?.map((testimonial, i) => (
            <TestimonialsDetails testimonial={testimonial} key={i} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
