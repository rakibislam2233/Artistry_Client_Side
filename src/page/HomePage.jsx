import AboutUs from "../components/Home/AboutUs/AboutUs"
import Banner from "../components/Home/Banner/Banner"
import JoinAsMentor from "../components/Home/JoinAsMentor"
import ParallaxImage from "../components/Home/ParallaxImage/ParallaxImage"
import Subscribe from "../components/Home/Subscribe"
import Testimonial from "../components/Home/Testimonial/Testimonial"
import TopInstructor from "../components/Home/TopInstructor/TopInstructor"
import TopPage from "../components/Home/TopPage"
import TrendingCourse from "../components/Home/TrendingCourse/TrendingCourse"
import TrustedBy from "../components/Home/TrustedBy"

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <TopPage/>
      <AboutUs/>
      <TrendingCourse/>
      <ParallaxImage/>
      <TopInstructor/>
      <JoinAsMentor/>
      <TrustedBy/>
      <Testimonial/>
      <Subscribe/>
    </div>
  )
}

export default HomePage
