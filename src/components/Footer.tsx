import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const Navigate = useNavigate();
  return (
    <div className="bg-transparent text-gray-600 border-t border-gray-600 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-20 md:px-32 py-14">
        <div className="space-y-4 text-xs text-gray-800 font-roboto cursor-pointer flex flex-col">
          <h5 className="font-bold font-roboto text-[16px]">ABOUT</h5>
          <p onClick={() => Navigate("/about")}>About stacksinEDEN</p>
          <a
            href="https://medium.com/@stacksineden"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <a
            href="https://www.samueil.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meet Samuel
          </a>
          <p>investors</p>
          {/* <p>FAQs</p> */}
        </div>
        <div className="space-y-4 text-xs text-gray-800 font-roboto cursor-pointer">
          <h5 className="font-bold font-roboto text-[16px]">USEFUL LINKS</h5>
          <p onClick={() => Navigate("/terms")}>Help center</p>
          <p onClick={() => Navigate("/terms")}>Enquiries</p>
          <p onClick={() => Navigate("/solutions")}>Our services</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 font-roboto cursor-pointer">
          <h5 className="font-bold font-roboto text-[16px]">CATEGORIES</h5>
          <p onClick={() => Navigate("/solutions")}>Ai chatbots</p>
          <p onClick={() => Navigate("/solutions")}>
            Content generation systems
          </p>
          <p onClick={() => Navigate("/solutions")}>AI automation</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 font-roboto cursor-pointer flex flex-col">
          <h5 className="font-bold font-roboto text-[16px]">SUPPORT</h5>
          <p onClick={() => Navigate("/")}>Home</p>
          <a
            href="https://calendly.com/stacksineden/30min?month=2024-03"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </a>
          <p onClick={() => Navigate("/usecases")}>User experience</p>
        </div>
      </div>
      <div className="px-10 md:px-32 py-4 grid grid-cols-1 md:grid-cols-2 border-t-[1px] border-slate-400 space-y-2 md:space-y-1">
        <div className="flex items-center space-x-1 md:space-x-2">
          <p className="text-xs">English (US)</p>
          {/* <p className='text-xs'>Naira</p> */}
          <div className="flex items-center space-x-1">
            <AiFillInstagram className="text-[24px] text-black cursor-pointer" />
            <AiFillFacebook className="text-[24px] text-black cursor-pointer" />
            <AiFillTwitterCircle className="text-[24px] text-black cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center space-x-3 md:space-x-4">
          <p
            className="text-xs cursor-pointer"
            onClick={() => Navigate("/privacy")}
          >
            Privacy
          </p>
          <p
            className="text-xs cursor-pointer"
            onClick={() => Navigate("/terms")}
          >
            Terms
          </p>
          <p className="text-xs">Sitemap</p>
          <p className="text-xs font-semibold font-roboto">
            &copy; {new Date().getFullYear()} stacksinEDEN inc
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
