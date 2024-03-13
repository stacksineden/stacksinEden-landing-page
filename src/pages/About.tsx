import Navbar from "../components/Navbar";
import BannerImg from "../assets/aboutus.jpg";
import GrowthImg from "../assets/growth.jpg";
import PersonalImg from "../assets/personal.jpg";
import InfiniteImg from "../assets/infinite.jpg";
import Footer from "../components/Footer";
import { BiRightArrowCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const aboutUsData = [
  {
    title: " Empowering Business Growth:",
    text: "At stacksinEDEN, our core mission is to propel businesses to new heights through the strategic implementation of AI solutions. We specialize in crafting tailored, cutting-edge technologies that address your unique business needs, driving growth, efficiency, and sustainability.",
    image: GrowthImg,
  },
  {
    title: "AI for Personalized Impact:",
    text: "Beyond business success, we are dedicated to making a positive impact on individuals' lives. Our innovative AI solutions extend to personalized applications, streamlining daily tasks, and revolutionizing the way people interact with technology.",
    image: PersonalImg,
  },
  {
    title: "Infinite Possibilities with AI:",
    text: "AI is not just a technology; it's a gateway to infinite possibilities. We believe in unleashing the full potential of artificial intelligence to transform industries, redefine processes, and revolutionize the way businesses operate.",
    image: InfiniteImg,
  },
];

const About = () => {
  const Navigate = useNavigate();
  return (
    <div className="max-w-[99%] md:max-w-[98%] lg:max-w-[98%] xl:max-w-[98%] w-full bg-white mx-auto px-5 mt-2">
      <Navbar />
      <div className="flex justify-center items-center text-center w-[97%] md:w-[60%] mx-auto my-[2rem] md:my-[4rem] tracking-wide flex-col gap-3">
        <p className="text-[30px] md:text-4xl font-medium text-[#071E22]">
          At <span className="text-[#F4C095] font-semibold">stacksinEDEN,</span>{" "}
          empowering businesses to thrive through tailored AI solutions and
          crafting innovative technologies to enhance the quality of people's
          lives.
        </p>
      </div>
      <div className="w-[90%] md:w-[80%] h-[400px] md:h-[600px] mx-auto rounded-lg">
        <img
          src={BannerImg}
          alt="banner_image"
          className="w-full object-cover h-full rounded-lg"
        />
      </div>

      <div className="flex flex-col w-[95%] md:w-[84%] mx-auto gap-9 md:gap-[6rem] my-20">
        {aboutUsData &&
          aboutUsData?.map((item, _i) => (
            <div
              className="w-full md:flex items-center gap-4 hidden h-[450px]"
              key={_i}
            >
              <div className="h-full w-full flex flex-col gap-5 item-center justify-center px-5">
                <h3 className="font-semibold text-[#071E22] text-2xl">
                  {item?.title}
                </h3>
                <p className="text-base text-black opacity-90 tracking-wide">
                  {item?.text}
                </p>
                <div
                  className="flex items-center gap-1 ml-1 cursor-pointer"
                  onClick={() => Navigate("/contact")} 
                >
                  <BiRightArrowCircle className="h-8 w-8 text-black" />
                  <p className="text-base text-[#071E22] opacity-70">
                    Get Started
                  </p>
                </div>
              </div>
              <div
                className={`${
                  _i % 2 === 0 ? "order-last" : "order-first"
                } md:h-[450px] w-[90%] mx-auto bg-blue-400`}
              >
                <img
                  src={item?.image}
                  alt="banner_image"
                  className="w-full object-cover h-full"
                />
              </div>
            </div>
          ))}

        {/* mobile screen */}
        {aboutUsData &&
          aboutUsData?.map((item, _i) => (
            <div
              className="w-full flex items-center gap-5 md:hidden flex-col"
              key={_i}
            >
              <div className="h-[400px] w-full mx-auto">
                <img
                  src={item?.image}
                  alt="banner_image"
                  className="w-full object-cover h-full"
                />
              </div>
              <div className="h-full w-full flex flex-col gap-2 item-center justify-center">
                <h3 className="font-semibold text-[#071E22] text-xl">
                  {item?.title}
                </h3>
                <p className="text-base text-black opacity-90 tracking-wide">
                  {item?.text}
                </p>
                <div
                  className="flex items-center gap-1 ml-1 cursor-pointer"
                  onClick={() => Navigate("/contact")}
                >
                  <BiRightArrowCircle className="h-8 w-8 text-black" />
                  <p className="text-base text-[#071E22] opacity-70">
                    Get Started
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="flex justify-center items-center text-center w-[97%] md:w-[60%] mx-auto my-[2rem] md:my-[4rem] tracking-wide flex-col gap-5">
        <p className="text-[30px] md:text-4xl font-medium text-[#071E22]">
          Discover trends and insights on our blog for a deeper dive into
          innovation and empowerment at{" "}
          <span className="text-[#F4C095] font-semibold">stacksinEDEN.</span>
        </p>
        <a
          className="flex items-center gap-1 ml-1 cursor-pointer"
          href="https://medium.com/@stacksineden"
          target="_blank"
        >
          <BiRightArrowCircle className="h-9 w-9 text-black" />
          <p className="text-xl text-[#071E22] opacity-70">Learn More</p>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default About;
