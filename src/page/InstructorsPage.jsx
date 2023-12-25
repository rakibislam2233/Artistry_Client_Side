import image from '../assets/AboutUs/about.jpg'
import Instructor from '../components/Instructor/Instructor'
import SectionTitle from '../components/Shared/SectionTitle'
const InstructorsPage = () => {
  return (
    <>
      <SectionTitle title={"Instructor"} image={image}/>
      <Instructor/>
    </>
  )
}

export default InstructorsPage
