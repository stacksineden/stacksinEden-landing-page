import Navbar from "../components/Navbar";
import "../components/Hero.css";
import Stories from "../components/Stories";

const UseCases = () => {
  return (
    <div className="max-w-[99%] md:max-w-[98%] lg:max-w-[98%] xl:max-w-[98%] w-full bg-white mx-auto px-5 mt-2">
      <Navbar />
      <div className="flex justify-center items-center text-center w-[90%] md:w-[60%] mx-auto text-[30px] md:text-[40px] my-[2rem] md:my-[4rem] tracking-wide flex-col gap-3">
        <p className="useCases_hero_text">
          Step into the Future: Witness AI Solutions in Action, Right Now!
        </p>
        <p className="text-[14px] md:text-[16px] font-normal md:font-medium tracking-wide text-[#071E22]">
          Explore Our AI Demos: Hands-On Trials of Cutting-Edge Solutions Await
          You Here. Experience Tomorrow's Tech Today, Risk-Free!
        </p>
        <button className="text-[12px] md:text-[14px] text-[#F4C095] cursor-pointer tracking-tight font-semibold bg-[#071E22] px-4 md:px-6 py-2 md:py-3 active:scale-90 rounded-full mx-auto border-[1px] border-[#e5e5e5] transition-all ease-in-out duration-300 shadow-lg">
           Try now
        </button>
      </div>
      <Stories />
    </div>
  );
};

export default UseCases;
