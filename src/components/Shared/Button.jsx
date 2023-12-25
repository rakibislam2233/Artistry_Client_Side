/* eslint-disable react/prop-types */
const Button = ({ title, width, transition }) => {
  return (
    <button
      className={`${width} py-2 px-7  bg-gradient-to-r from-[#1DC1B3] to-green-500 rounded font-semibold  text-white ${transition} flex gap-1 justify-center items-center`}
    >
      {title}
    </button>
  );
};

export default Button;
