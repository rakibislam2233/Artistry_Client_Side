import Lottie from "lottie-react"
import animation from '../../assets/Lottie/animation_lo78rfne.json'
const NoDataFound = () => {
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

export default NoDataFound
