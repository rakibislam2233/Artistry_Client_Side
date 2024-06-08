import onlineClass from "../../assets/TopPage/ebook.png";
import tutor from "../../assets/TopPage/tutor.png";
import ceritified from "../../assets/TopPage/certified.png";
import onlineStudents from "../../assets/TopPage/graduates.png";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const TopPage = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="w-full  px-5 md:px-10 py-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-gray-900">
        <div className="w-full px-5 py-8 flex items-center border border-gray-700 rounded-xl text-center  cursor-pointer hover:-translate-y-2 duration-300 transition-all">
          <img className="w-16 h-16 mx-auto" src={onlineClass} alt="" />
          <div>
            {counterOn && (
              <h3 className="text-2xl font-semibold">
                <CountUp start={0} end={30} duration={2} delay={0} />+
              </h3>
            )}
            <h2 className="font-semibold">Online Courses</h2>
          </div>
        </div>
        <div className="w-full px-5 py-8 flex items-center border border-gray-700  rounded-xl text-center  cursor-pointer hover:-translate-y-2 duration-300 transition-all">
          <img className="w-16 h-16 mx-auto" src={tutor} alt="" />
          <div>
            {counterOn && (
              <h3 className="text-2xl font-semibold">
                <CountUp start={0} end={50} duration={2} delay={0} />+
              </h3>
            )}
            <h2 className="font-semibold">Expert Tutors</h2>
          </div>
        </div>
        <div className="w-full px-5 py-8 flex items-center border border-gray-700 rounded-xl text-center  cursor-pointer hover:-translate-y-2 duration-300 transition-all">
          <img className="w-16 h-16 mx-auto" src={ceritified} alt="" />
          <div>
            {counterOn && (
              <h3 className="text-2xl font-semibold">
                <CountUp start={0} end={70} duration={2} delay={0} />+
              </h3>
            )}
            <h2 className="font-semibold">Ceritified Courses</h2>
          </div>
        </div>
        <div className="w-full px-5 py-8 flex items-center border border-gray-700 rounded-xl text-center  cursor-pointer hover:-translate-y-2 duration-300 transition-all">
          <img className="w-16 h-16 mx-auto" src={onlineStudents} alt="" />
          <div>
            {counterOn && (
              <h3 className="text-2xl font-semibold">
                <CountUp start={0} end={5000} duration={2} delay={0} />+
              </h3>
            )}
            <h2 className="font-semibold">Online Students</h2>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default TopPage;
