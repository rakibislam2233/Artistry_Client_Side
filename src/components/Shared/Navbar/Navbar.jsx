import WebNavlink from "./WebNavlink";
import Logo from "./logo";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 px-5 md:px-10 flex  md:flex-row justify-between  items-center h-20 shadow-2xl ">
      <Logo />
      <WebNavlink />
    </nav>
  );
};

export default Navbar;
