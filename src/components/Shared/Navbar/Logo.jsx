import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="flex">
      <Link to={'/'}><h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-green-500 bg-clip-text">Artistry</h1></Link>
    </div>
  );
};

export default Logo;
