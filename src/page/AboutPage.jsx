import image from '../assets/AboutUs/about.jpg'
import About from "../components/About/About"
import SectionTitle from "../components/Shared/SectionTitle"
const AboutPage = () => {
  return (
    <>
      <SectionTitle title={"About"} image={image}/>
      <About/>
    </>
  )
}

export default AboutPage
