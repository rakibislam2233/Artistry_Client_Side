import { AiOutlineGlobal } from "react-icons/ai";
import {
  FaBook,
  FaHeadset,
  FaRegGem,
  FaUniversalAccess,
  FaUserGraduate,
} from "react-icons/fa";
const About = () => {
  return (
    <section className="w-full h-full py-16 px-5 md:px-10">
      <div className="w-full grid grid-cols-1  md:grid-cols-3 gap-10">
        <div className="w-full border border-gray-700 rounded-xl p-8 text-center space-y-4 group hover:bg-gradient-to-r from-[#1DC1B3] to-green-500 group cursor-pointer transition-all duration-300">
          <div className="w-24 h-24 mx-auto   flex justify-center items-center rounded-xl bg-green-500 group-hover:bg-white group-hover:text-green-500 ">
            <FaUserGraduate className="w-10  h-10 mx-auto" />
          </div>
          <h1 className="text-2xl font-semibold">Get a certificate</h1>
          <p>
            Donec urna massa, cursus venenatis ipsum et, tempus rhoncus tortor.
            Mauris nunc nisl, pharetra eu.
          </p>
        </div>
        <div className="w-full border border-gray-700 rounded-xl p-8 text-center space-y-4 group hover:bg-gradient-to-r from-[#1DC1B3] to-green-500 group cursor-pointer transition-all duration-300">
          <div className="w-24 h-24 mx-auto   flex justify-center items-center rounded-xl bg-green-500 group-hover:bg-white group-hover:text-green-500 ">
            <AiOutlineGlobal className="w-10  h-10 mx-auto" />
          </div>
          <h1 className="text-2xl font-semibold">All over the globe</h1>
          <p>
            Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Fusce
            faucibus nulla sed finibus.
          </p>
        </div>
        <div className="w-full border border-gray-700 rounded-xl p-8 text-center space-y-4 group hover:bg-gradient-to-r from-[#1DC1B3] to-green-500 group cursor-pointer transition-all duration-300">
          <div className="w-24 h-24 mx-auto   flex justify-center items-center rounded-xl bg-green-500 group-hover:bg-white group-hover:text-green-500 ">
            <FaHeadset className="w-10  h-10 mx-auto" />
          </div>
          <h1 className="text-2xl font-semibold">Live online lectures</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima at
            iure adipisci facere? Aspernatur qui fugiat cum provident quos!
            Laboriosam.
          </p>
        </div>
        <div className="w-full border border-gray-700 rounded-xl p-8 text-center space-y-4 group hover:bg-gradient-to-r from-[#1DC1B3] to-green-500 group cursor-pointer transition-all duration-300">
          <div className="w-24 h-24 mx-auto   flex justify-center items-center rounded-xl bg-green-500 group-hover:bg-white group-hover:text-green-500 ">
            <FaBook className="w-10  h-10 mx-auto" />
          </div>
          <h1 className="text-2xl font-semibold">Educational materials</h1>
          <p>
            Vivamus odio tellus, tincidunt rutrum ligula ut, ornare gravida
            urna. Nullam vel dolor eu erat.
          </p>
        </div>
        <div className="w-full border border-gray-700 rounded-xl p-8 text-center space-y-4 group hover:bg-gradient-to-r from-[#1DC1B3] to-green-500 group cursor-pointer transition-all duration-300">
          <div className="w-24 h-24 mx-auto   flex justify-center items-center rounded-xl bg-green-500 group-hover:bg-white group-hover:text-green-500 ">
            <FaRegGem className="w-10  h-10 mx-auto" />
          </div>
          <h1 className="text-2xl font-semibold">Professional teachers</h1>
          <p>
            Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Fusce
            faucibus nulla sed finibus.
          </p>
        </div>
        <div className="w-full border border-gray-700 rounded-xl p-8 text-center space-y-4 group hover:bg-gradient-to-r from-[#1DC1B3] to-green-500 group cursor-pointer transition-all duration-300">
          <div className="w-24 h-24 mx-auto   flex justify-center items-center rounded-xl bg-green-500 group-hover:bg-white group-hover:text-green-500 ">
            <FaUniversalAccess className="w-10  h-10 mx-auto" />
          </div>
          <h1 className="text-2xl font-semibold">Accessibility programs</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            doloremque officiis ab quod perferendis nobis temporibus possimus
            perspiciatis aliquid explicabo!
          </p>
        </div>
      </div>
      <div className="space-y-5 py-10">
        <div className="py-5 text-center space-y-3">
        <h1 className="text-4xl font-semibold text-center">Answering your common questions</h1>
        <p>Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Fusce faucibus nulla sed finibus egestas. <br /> Vestibulum purus magna, auctor consectetur sem nec, consectetur porta purus.</p>
        </div>
        <div className="collapse collapse-plus border ">
          <input type="radio" name="my-accordion-3" checked="checked" readOnly  />
          <div className="collapse-title text-xl font-medium">
          What ante quis tincidunt porta, neque metus dapibus velit?
          </div>
          <div className="collapse-content">
            <p>Nam quis facilisis magna, sit amet posuere tellus. Donec imperdiet tortor vitae pharetra congue. Aliquam nunc est, iaculis in erat lobortis, convallis varius mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam vel suscipit nisi, et imperdiet nulla. Praesent condimentum metus aliquet venenatis feugiat. Nunc at iaculis nisl. Donec ultrices placerat euismod</p>
          </div>
        </div>
        <div className="collapse collapse-plus border ">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          What ante quis tincidunt porta, neque metus dapibus velit?
          </div>
          <div className="collapse-content">
            <p>Nam quis facilisis magna, sit amet posuere tellus. Donec imperdiet tortor vitae pharetra congue. Aliquam nunc est, iaculis in erat lobortis, convallis varius mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam vel suscipit nisi, et imperdiet nulla. Praesent condimentum metus aliquet venenatis feugiat. Nunc at iaculis nisl. Donec ultrices placerat euismod</p>
          </div>
        </div>
        <div className="collapse collapse-plus border ">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          What ante quis tincidunt porta, neque metus dapibus velit?
          </div>
          <div className="collapse-content">
            <p>Nam quis facilisis magna, sit amet posuere tellus. Donec imperdiet tortor vitae pharetra congue. Aliquam nunc est, iaculis in erat lobortis, convallis varius mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam vel suscipit nisi, et imperdiet nulla. Praesent condimentum metus aliquet venenatis feugiat. Nunc at iaculis nisl. Donec ultrices placerat euismod</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
