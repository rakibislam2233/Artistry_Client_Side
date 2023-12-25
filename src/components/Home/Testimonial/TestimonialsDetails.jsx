/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const TestimonialsDetails = ({ testimonial }) => {
  return (
    <div className="w-full h-fit border border-gray-700 p-8 md:p-16 rounded-2xl cursor-pointer ">
      <h3 className="text-xl md:text-2xl italic">{`"${testimonial?.description}"`}</h3>


      <div className="flex flex-col justify-center items-center mt-10 space-y-3">
        <img
          className="w-16 h-16 rounded-full"
          src={testimonial?.userImage}
          alt=""
        />
      <h1 className="font-semibold">{testimonial?.user}</h1>
          <Rating
            style={{ maxWidth: 100 }}
            readOnly
            value={testimonial.rating}
          />
      </div>
    </div>
  );
};

export default TestimonialsDetails;
