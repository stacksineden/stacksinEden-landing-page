import Lottie from "lottie-react";
// import animationData from "../assets/stacks.json";
import solutionDataA from "../assets/chatbot.json";
import solutionDataB from "../assets/content.json";
import solutionDataC from "../assets/automation.json";
import { Link } from "react-router-dom";

const style = {
  height: 380,
};

const mobileStyle = {
  height: 200,
};

const sectionHighlightsData = [
  {
    name: "Chatbot Development.",
    description:
      " Revolutionize Customer Interaction: Streamline Customer Service, Capture Leads, and Optimize Staff Training. Enhance Customer Satisfaction, Boost Sales, and Drastically Reduce Onboarding Time with the Implementation of our Highly Customized AI-Powered Chatbots.",
    icon: solutionDataC,
  },
  {
    name: "Content Generation Systems.",
    description:
      " Experience the Future of Content Creation with Our Cutting-Edge AI-Powered Solution! Delight Your Audience with Captivating Website Copy, Engaging Personalized Outreach Messages, SEO-Optimized Blog Content, Expertly Tailored Workout Plans, Diet Plans, and a Wealth of Customized Offerings to Elevate Your Brand.",
    icon: solutionDataB,
  },
  {
    name: "AI Enhanced Automation.",
    description:
      "  Streamline Operations, Optimize Efficiency, and Redefine Workplace Productivity. Automate Resume Assessment, Seamlessly Integrate Systems, and Leverage AI-Powered Workflows to Elevate Your Business. Unlock New Levels of Productivity and Personalized Experiences with Our Advanced Automation Solutions Tailored to Empower Your Success.",
    icon: solutionDataA,
  },
];

const Mainsection = () => {
  return (
    <div className="mt-1 mb-7">
      <div className="text-center flex flex-col gap-1 md:gap-2">
        <div className="max-w-[80%] mx-auto py-2">
          {/* <div className="max-w-[80%] mx-auto">
            <Lottie animationData={animationData} style={style} />
          </div> */}
          <h2 className="font-medium text-[24px] md:text-[35px] text-[#071E22] max-w-[98%] md:max-w-[70%] mx-auto">
            Empowering Solutions <span className="text-[#F4C095]">Stacked</span>{" "}
            in Eden's Realm.
          </h2>
        </div>
        <Link
          to="/contact"
          className="text-[12px] md:text-[14px] text-[#F4C095] cursor-pointer tracking-tight font-semibold bg-[#071E22] px-4 md:px-6 py-2 md:py-3 active:scale-90 rounded-full mx-auto border-[1px] border-[#e5e5e5] transition-all ease-in-out duration-300 shadow-lg"
        >
          Get started
        </Link>
      </div>

      {/* sections for solutions */}
      <div className="mt-0 md:mt-6 max-w-[98%] md:max-w-[80%] mx-auto">
        <div className="md:grid grid-cols-1 gap-9 hidden mb-7">
          {sectionHighlightsData?.map((solution, _i) => (
            <div className="w-full grid grid-cols-2" key={_i}>
              <div className="bg-[#071E22] w-full flex flex-col gap-5 rounded-l-[2rem] justify-center items-center px-1 md:px-8">
                <h3 className="text-[24px] md:text-[30px] text-white font-semibold">
                  {solution?.name}
                </h3>
                <p className="text-white text-[12px] md:text-[14px] font-light tracking-wider">
                  {solution?.description}
                </p>
                <Link
                  to="/solutions"
                  className="text-[12px] md:text-[14px] text-[#071E22] cursor-pointer tracking-tight font-semibold bg-white px-4 md:px-6 py-2 md:py-3 active:scale-90 rounded-full mx-auto transition-all ease-in-out duration-300 shadow-lg"
                >
                  Learn more
                </Link>
              </div>
              <div className="w-full p-1 md:p-4 shadow-xl rounded-r-[2rem]">
                <Lottie animationData={solution?.icon} style={style} />
              </div>
            </div>
          ))}
        </div>

        {/* mobiles */}

        <div className="w-full my-7 flex flex-col gap-9 py-5 md:hidden">
          {sectionHighlightsData.map((solution, _i) => (
            <div
              className="w-full shadow-xl grid grid-cols-1 rounded-[2rem]"
              key={_i}
            >
              <div className="w-full p-1 md:p-4 shadow-xl rounded-t-[2rem]">
                <Lottie animationData={solution?.icon} style={mobileStyle} />
              </div>

              <div className="w-full bg-[#071E22] py-5 px-7 text-white rounded-b-[2rem]">
                <div className="w-full">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[18px] font-semibold">
                      {solution?.name}
                    </h2>
                    <p className="text-[12px] font-light tracking-wide">
                      {solution?.description}
                    </p>
                    <div className="flex justify-start mt-2">
                      <Link
                        to="/solutions"
                        className="text-[12px] md:text-[14px] text-[#071E22] cursor-pointer tracking-tight font-semibold bg-white px-3 py-1 active:scale-90 rounded-full border-[1px] border-[#e5e5e5] transition-all ease-in-out duration-300 shadow-lg"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center flex flex-col gap-2 mt-8">
        <div className="max-w-[98%] md:max-w-[60%] mx-auto py-2">
          {/* <div className="max-w-[80%] mx-auto">
            <Lottie animationData={animationData} style={style} />
          </div> */}
          <h2 className="font-medium text-[24px] md:text-[35px] text-[#071E22] max-w-[70%] mx-auto">
            Supercharge Your Business with AI-Powered Solutions!
          </h2>
          <p className="text-[14px] text-[#1D7874] tracking-wide">
            Experience the transformative capabilities of artificial
            intelligence AI. Automate, optimise and elevate your business
            operations to a new level of excellence.
          </p>
        </div>
        <Link
          to="/solutions"
          className="text-[12px] md:text-[14px] text-[#F4C095] cursor-pointer tracking-tight font-semibold bg-[#071E22] px-4 md:px-6 py-2 md:py-3 active:scale-90 rounded-full mx-auto border-[1px] border-[#e5e5e5] transition-all ease-in-out duration-300 shadow-lg"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Mainsection;
