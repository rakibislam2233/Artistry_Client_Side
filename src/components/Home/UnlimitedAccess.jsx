import Button from "../Shared/Button"

const UnlimitedAccess = () => {
  return (
    <div
    style={{
      backgroundImage: `url('https://i.postimg.cc/Gm4BJS77/index.webp')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
      className="w-full h-full xl:h-96 bg-black bg-opacity-70"
    >
      <div className="w-full md:w-1/2 h-full px-5 py-5 md:px-16 md:py-10 space-y-5 text-white">
        <h2 className="text-3xl  font-semibold uppercase  text-transparent bg-clip-text bg-gradient-to-r from-[#1DC1B3] to-green-500">
        Unlimited access to educational materials and lectures for subscribers
        </h2>
        <Button transition={"hover:translate-x-2 transition-all duration-300"} title={"See More"} />
      </div>
    </div>
  )
}

export default UnlimitedAccess
