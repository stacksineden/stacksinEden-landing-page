// import Heroimg from "../assets/heroimg.png";

import HeroGothic from "./HeroGothic";

const Hero = () => {
  return (
    <div className="w-full mt-2 md:mt-4">
      <div className="text-center flex flex-col md:hidden gap-2 my-2">
        <div className="max-w-[80%] mx-auto py-2">
          <h2 className="font-semibold text-[24px] md:text-[35px] text-[#071E22] max-w-[98%] md:max-w-[70%] mx-auto">
            AI Empowered. Infinite possibilities.
          </h2>
          <p className="text-[14px] text-[#071E22] tracking-wide">
            Empower Your Business Today: Unlock Success with Cutting-Edge AI
            solutions.
          </p>
        </div>
      </div>
      <HeroGothic />
      {/* first section */}
      {/* <div className="max-w-[80%] mx-auto py-10 flex flex-col gap-6">
        <h2 className="font-semibold text-[70px] text-[#071E22] tracking-wide leading-[4.5rem]">
          AI Empowered. Infinite possibilities.
        </h2>
        <p className="text-[18px] text-[#071E22] tracking-wide font-medium">
          Empower Your Business Today: Unlock Success with Cutting-Edge AI
          solutions.
        </p>
        <button className="text-[14px] text-[#F4C095] cursor-pointer tracking-tight font-semibold bg-[#071E22] px-6 py-3 active:scale-90 rounded-full mx-auto border-[1px] border-[#e5e5e5] transition-all ease-in-out duration-300 shadow-lg">
          Get started
        </button>
      </div>
 */}

      {/* second section */}
      {/* <div className="max-w-[80%] mx-auto ">
        <img src={Heroimg} alt="heroimage" className="bg-cover w-full" />
      </div> */}
    </div>
  );
};

export default Hero;
