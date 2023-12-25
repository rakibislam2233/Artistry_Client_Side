import Button from "../Shared/Button";

const Subscribe = () => {
  return (
    <div className="w-full px-5 md:px-10 h-full bg-gray-950 py-20">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-3xl md:text-5xl font-semibold uppercase leading-tight tracking-wide">
            Subscribe To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DC1B3] to-green-500">
              Our Newsletter To Get </span> Daily Content!
          </h3>
        </div>
        <div className="flex flex-col h-full justify-center items-center">
          <div className="w-full space-y-3">
            <input
              type="email"
              name="email"
              id="email"
              className="w-full md:w-[75%] py-2 px-4 rounded "
              placeholder="Enter Your Email"
            />
            <Button transition={"hover:translate-x-2 transition-all duration-300"} title={"Send"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
