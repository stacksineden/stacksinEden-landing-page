import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/stackslogo.png";
import NamedLogo from "../assets/stacksineden.png";
import { AiFillCheckCircle } from "react-icons/ai";

const Contact = () => {
  const solutionOptions = [
    "AI Persona chatbots for professionals",
    "Prospecting Chatbots for professional service providers",
    "Customer service chatbots for Online stores",
    "Customer service chatbots for professional service providers",
    "Onboarding chatbots for SAAS",
    "Content Generation Systems for Nutritional and Fitness Coaches",
    "AI Automation Services",
  ];

  const budgetOptions = [
    "less than 350,000 naira",
    "350,000 - 600,000 naira",
    "600,000 - 1,000,000 naira",
    "1,000,000 - 1,500,000 naira",
    "1,500,000 - 3,000,000 naira",
    "3,000,000 - 7,000,000 naira",
    "7,000,000 naira +",
  ];

  const [selectedSolution, setSelectedSolution] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  const handleBudgetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBudget(event.target.value);
  };

  const handleSolutionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSolution(event.target.value);
  };
  return (
    <div className="max-w-[99%] md:max-w-[98%] lg:max-w-[98%] xl:max-w-[98%] w-full bg-white flex justify-center items-center py-4">
      <div className="w-full md:w-[80%] md:shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-0">
        <div className="h-full w-full p-4 md:p-7 flex flex-col gap-4">
          {/* logo */}
          <Link to="/" className="flex items-center gap-1 md:gap-2 mt-7">
            <div className="w-[30px] md:w-[50px] h-[30px] md:h-[50px]">
              <img
                src={Logo}
                alt="stacksineden_logo"
                className="w-full object-cover"
              />
            </div>
            <div className="w-[130px] md:w-[150px] h-[30px] md:h-[40px] flex items-center justify-center">
              <img
                src={NamedLogo}
                alt="stacksineden_logo"
                className="w-full object-cover"
              />
            </div>
          </Link>
          {/* body */}
          <div className="text-[18px] md:text-[24px] text-[#1D7874] font-semibold py-0 md:my-2">
            From Contact Form to Seamless Collaboration.
          </div>
          <div className="flex flex-col gap-5 p-2">
            <div className="flex gap-2">
              <AiFillCheckCircle className="text-[#1D7874] text-[28px] flex-[5%] w-full" />
              <div className="flex-[95%] w-full">
                <h2 className="text-[#071E22] font-medium tracking-wide text-[14px] md:text-[16px]">
                  Engaging Exploration: Crafting Your Blueprint for Success.
                </h2>
                <p className="text-[12px] md:text-[14px] font-light text-[#071E22]">
                  Fill out our Contact form. Watch for a prompt Carlendly call
                  invitation. Engage in a pivotal conversation where we delve
                  into your business, revealing unique needs. This sets the
                  stage for a customized AI solution that seamlessly aligns with
                  your objectives, optimizing your business processes.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <AiFillCheckCircle className="text-[#1D7874] text-[28px] flex-[5%] w-full" />
              <div className="flex-[95%] w-full">
                <h2 className="text-[#071E22] font-medium tracking-wide text-[14px] md:text-[16px]">
                  Personalized Pathways: Mapping Your AI Investment.
                </h2>
                <p className="text-[12px] md:text-[14px] font-light text-[#071E22]">
                  Post our discussion, you'll get a custom quote detailing AI
                  solutions and investment. Transparently backed by
                  comprehensive payment breakdown and detailed contracts,
                  empowering your informed journey. Review, then confidently
                  progress to the next step.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <AiFillCheckCircle className="text-[#1D7874] text-[28px] flex-[5%] w-full" />
              <div className="flex-[95%] w-full">
                <h2 className="text-[#071E22] font-medium tracking-wide text-[14px] md:text-[16px]">
                  Collaborative Fusion: Uniting for Unrivaled Results.
                </h2>
                <p className="text-[12px] md:text-[14px] font-light text-[#071E22]">
                  Upon confirmation, you'll enter an exciting phase. We'll
                  swiftly welcome you to a dedicated hub, fostering effortless
                  sharing of details, documents, and insights. Your active
                  involvement refines the strategy and fuels daily reporting,
                  propelling your AI-powered vision seamlessly forward.
                  Together, we ensure its successful realization.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full shadow-md p-4 md:p-7">
          <div className="text-[20px] text-[#071E22] font-semibold my-2 md:my-7">
            Fill in your details below.
            <div className="mt-7 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-[12px] md:text-[14px] text-[#071E22]">Subject</p>
                <input
                  type="text"
                  name="user_name"
                  className="border border-zinc-200 text-zinc-800 rounded-lg p-2 text-[12px] md:text-sm bg-transparent w-full outline-none"
                  placeholder="Subject"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-[12px] md:text-[14px] text-[#071E22]">Email</p>
                <input
                  type="text"
                  name="user_name"
                  className="border border-zinc-200 text-zinc-800 rounded-lg p-2 text-[12px] md:text-sm bg-transparent w-full outline-none"
                  placeholder="Email"
                />
              </div>

              <div className="flex flex-col space-y-4">
                <label
                  htmlFor="solution"
                  className="text-[12px] md:text-[14px] text-[#071E22]"
                >
                  Choose a Solution:
                </label>
                <select
                  id="solution"
                  className="block w-full border border-zinc-200 text-zinc-800 rounded-lg text-[12px] md:text-sm p-2 outline-none"
                  value={selectedSolution}
                  onChange={handleSolutionChange}
                >
                  <option value="">Select a Solution</option>
                  {solutionOptions.map((solution, index) => (
                    <option key={index} value={solution}>
                      {solution}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col space-y-4">
                <label htmlFor="budget" className="text-[12px] md:text-[14px] text-[#071E22]">
                  What is your Budget fot this project?
                </label>
                <select
                  id="budget"
                  className="block w-full border border-zinc-200 text-zinc-800 rounded-lg text-[12px] md:text-sm p-2 outline-none"
                  value={selectedBudget}
                  onChange={handleBudgetChange}
                >
                  <option value="">Select a Budget</option>
                  {budgetOptions.map((budget, index) => (
                    <option key={index} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-[12px] md:text-[14px] text-[#071E22]">
                  Additional information
                </p>
                <textarea
                  id="details"
                  rows={4}
                  name="user_name"
                  className="border border-zinc-200 text-zinc-800 rounded-lg p-2 text-[12px] md:text-sm bg-transparent w-full outline-none"
                  placeholder="Provide any additional details here"
                />
              </div>

              <button className="text-[16px] bg-[#071E22] cursor-pointer tracking-tight font-semibold text-white px-8 py-3 active:scale-90 rounded-md mx-auto transition-all ease-in-out duration-300 shadow-lg mt-4">
               Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
