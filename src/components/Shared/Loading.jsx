import Lottie from "lottie-react"
import animation from '../../assets/Lottie/Animation - 1698206116345.json'
const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen bg-transparent">
      <Lottie
          className="w-72 h-56"
          animationData={animation}
          loop={true}
        />
    </div>
  )
}

export default Loading
