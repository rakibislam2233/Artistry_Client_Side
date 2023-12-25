/* eslint-disable react/prop-types */

const SectionTitle = ({ title, image }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="w-full bg-center   h-56 flex justify-center items-center bg-cover bg-gray-950 bg-blend-overlay  bg-opacity-70"
    >
      <div className="flex flex-col justify-center items-center ">
        <h1
          data-aos="flip-left"
          className="font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#1DC1B3] to-green-500 uppercase text-center"
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default SectionTitle;
