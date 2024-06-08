import Lottie from "lottie-react";
import animation from "../../assets/Lottie/Animation - 1697703233634.json";
import Button from "../Shared/Button";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
const JoinAsMentor = () => {
  const {user} = useAuth()
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const location = useLocation()
  const navigate = useNavigate()
  const handleClick = () => {
    if (user) {
      navigate('dashboard/student-home')
    } else {
      Swal.fire({
        text: "Please login first to become a instructor",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      })
        .then((result) => {
          if (result.isConfirmed) {
            navigate("/login", { state: { from: location } });
          }
        })
        .catch((err) => toast.error(err.message));
    }
  }
  return (
    <section className="w-full px-5 py-10  grid grid-cols-1 md:grid-cols-2  gap-0 md:gap-10">
      <div className="w-full">
        <Lottie
          className="w-full h-full"
          animationData={animation}
          loop={true}
        />
      </div>
      <div className="w-full mt-24 space-y-4">
        <h3 className=" text-2xl md:text-5xl font-semibold uppercase leading-tight tracking-wide">
          Do you want{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DC1B3] to-green-500">
            you share your knowledge
          </span>{" "}
          then join our organization as a Mentor
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing edit. Ipsa
          architect natus nobis saepe sit modi perferendis quia nisi nihil
          facere.
        </p>
        {isAdmin || isInstructor ? (
          ""
        ) : (
          <div onClick={()=>handleClick()}>
            <Button
              transition={"hover:translate-x-2 transition-all duration-300"}
              title={"Become A Instructor"}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default JoinAsMentor;
