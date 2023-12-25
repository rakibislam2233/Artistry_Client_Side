import Lottie from "lottie-react"
import animation from '../../../assets/Lottie/animation_lo6ss7sk.json'
import useAuth from "../../../hooks/useAuth"
const StudentHome = () => {
  const {user} = useAuth()
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center py-5">Welcome to {user?.displayName}</h1>
      <Lottie className="w-1/2 mx-auto" animationData={animation} loop={true}></Lottie>
    </div>
  )
}

export default StudentHome
