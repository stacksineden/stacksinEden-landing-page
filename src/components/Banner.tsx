import { Link } from "react-router-dom";
import BannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <>
      <div className="my-[4rem] max-w-[98%] md:max-w-[80%] mx-auto bg-[#071E22] rounded-xl md:rounded-3xl md:grid grid-cols-1 md:grid-cols-2 shadow-2xl h-[60vh] hidden">
        <div className="bg-[#071E22] w-full rounded-[2rem] text-center flex justify-center items-center gap-3 flex-col px-6">
          <h2 className="text-white font-bold text-[28px]">
            Ignite possibilities. Contact us.
          </h2>
          <p className="text-white font-light tracking-wide text-[14px]">
            Empower with Futuristic AI. Streamline service, capture leads, boost
            productivity. Personalized interactions, efficient workflows, and
            revolutionary content. Unlock your business potential with
            stacksinEDEN's AI empowerment. Get started now!
          </p>
          <Link
            to="/contact"
            className="text-[14px] text-[#071E22] cursor-pointer tracking-tight font-semibold bg-white px-6 py-2 active:scale-90 rounded-full mx-auto transition-all ease-in-out duration-300 shadow-lg mt-4"
          >
            Get started
          </Link>
        </div>
        <div className="bg-transparent w-full rounded-r-[2rem] hidden md:inline-block">
          <img
            src={BannerImg}
            alt="bannerimage"
            className="w-full object-cover h-full rounded-r-[2rem]"
          />
        </div>
      </div>

      {/* section for mobile screens */}

      <div className="w-full my-7 flex flex-col gap-9 py-5 md:hidden">
        <div className="w-full h-[500px] shadow-xl grid grid-cols-1 rounded-[2rem]">
          <div className="w-full bg-yellow-200 h-[250px] rounded-t-[2rem]">
            <img
              src={BannerImg}
              alt="image-services"
              className="bg-cover w-full h-full rounded-t-[2rem]"
            />
          </div>

          <div className="w-full bg-[#071E22] h-[250px] py-5 px-7 text-white rounded-b-[2rem]">
            <div className="w-full">
              <div className="flex flex-col gap-2">
                <h2 className="text-[18px] font-semibold">
                  Ignite possibilities. Contact us.
                </h2>
                <p className="text-[12px] font-light tracking-wide">
                  Empower with Futuristic AI. Streamline service, capture leads,
                  boost productivity. Personalized interactions, efficient
                  workflows, and revolutionary content. Unlock your business
                  potential with stacksinEDEN's AI empowerment. Get started now!
                </p>
                <div className="flex justify-start mt-2">
                  <Link
                    to="/contact"
                    className="text-[12px] md:text-[14px] text-[#071E22] cursor-pointer tracking-tight font-semibold bg-white px-3 py-1 active:scale-90 rounded-full border-[1px] border-[#e5e5e5] transition-all ease-in-out duration-300 shadow-lg"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
