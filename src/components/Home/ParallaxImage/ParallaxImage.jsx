import Button from "../../Shared/Button";
const ParallaxImage = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://i.postimg.cc/28fqp1BF/aboutus2.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
      className="w-full h-full  bg-black bg-opacity-70 py-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="px-5 md:px-10 md:py-10 space-y-5 text-white">
          <h3 className="text-xl ">Why Choose Us?</h3>
          <h2 className="text-xl md:text-5xl font-semibold uppercase">
            Benefits Of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DC1B3] to-green-500">
              Learning From{" "}
            </span>{" "}
            Artistry
          </h2>
          <p className="text-xl">
            There cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs
            condmentum leo massa mollis estiegittis miristum nulla sed medy
            fringilla vitae.
          </p>
          <Button transition={"hover:translate-x-2 transition-all duration-300"} title={"Explor Now"} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ParallaxImage;
