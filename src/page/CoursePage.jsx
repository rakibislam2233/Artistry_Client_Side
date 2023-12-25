import image from '../assets/AboutUs/about.jpg'
import Course from '../components/Course/Course'
import SectionTitle from "../components/Shared/SectionTitle"
const CoursePage = () => {
  return (
    <div>
     <SectionTitle title={"Course"} image={image}/>
     <Course/>
    </div>
  )
}

export default CoursePage
