import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InstructorDetails from './InstructorDetails';
import useInstructors from '../../../hooks/useInstructors';
const TopInstructor = () => {
  const [instructors] = useInstructors()
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
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
    <div className="w-full px-5 md:px-10 py-10 bg-gray-900">
      <div className="space-y-1">
        <h3 className="text-3xl font-semibold">Top Instructor</h3>
        <div className="w-20 h-1 bg-gradient-to-r from-[#1DC1B3] to-green-500 "></div>
      </div>
      <Slider className='py-5 mt-10' {...settings}>
        {
          instructors?.slice(0,10).map((instructor,i) =><InstructorDetails key={i} instructor={instructor}/>)
        }
      </Slider>
    </div>
  )
}

export default TopInstructor;

