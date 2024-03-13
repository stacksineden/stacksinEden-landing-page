import { useState } from "react";
import Logo from "../assets/stackslogo.png";
import NamedLogo from "../assets/stacksineden.png";
import { Link } from "react-router-dom";
import { BsJustify } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      {open && (
        <div className="w-[100vw] bg-zinc-800/40 h-screen fixed inset-0 z-50 backdrop-blur-sm">
          <div className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl p-8 ring-1 ring-zinc-900/5 bg-white opacity-100 scale-100">
            <div className="flex flex-row-reverse items-center justify-between">
              <button
                aria-label="Close menu"
                className="-m-1 p-1"
                type="button"
                onClick={() => closeModal()}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 text-[#071E22]"
                >
                  <path
                    d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <h2 className="text-sm font-medium text-[#071E22]">Navigation</h2>
            </div>
            <nav className="mt-6">
              <ul
                className="my-2 divide-y text-base divide-zinc-100 text-[#071E22]"
                onClick={() => closeModal()}
              >
                <Link to="/about">
                  <li className="block py-2">About Us</li>
                </Link>
                <Link to="/solutions">
                  <li className="block py-2">Our Solutions</li>
                </Link>
                <Link to="/usecases">
                  <li className="block py-2">Products</li>
                </Link>
                <Link
                  to="https://calendly.com/stacksineden/30min"
                  target="_blank"
                >
                  <li className="block py-2">Book a call</li>
                </Link>
                <Link to="https://medium.com/@stacksineden" target="_blank">
                  <li className="block py-2">Blog</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      )}
      <div className="w-full flex items-center justify-between py-3 px-1 md:px-2">
        <div className="flex items-center gap-3 w-full">
          <div className="flex items-center gap-8 w-full">
            {/* logo */}
            <Link to="/" className="flex items-center gap-1 md:gap-2">
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
            {/* menu 1 */}
            <div className="hidden items-center w-full gap-4 md:flex">
              <Link
                to="/about"
                className="text-[13px] text-[#071E22] cursor-pointer tracking-tight font-medium hover:text-[#1D7874] transition-all ease-in-out duration-300"
              >
                About Us
              </Link>
              <Link
                to="/solutions"
                className="text-[13px] text-[#071E22] cursor-pointer tracking-tight font-medium hover:text-[#1D7874] transition-all ease-in-out duration-300"
              >
                Our Solutions
              </Link>
              <Link
                to="/usecases"
                className="text-[13px] text-[#071E22] cursor-pointer tracking-tight font-medium hover:text-[#1D7874] transition-all ease-in-out duration-300"
              >
                Products
              </Link>
            </div>
          </div>
        </div>

        {/* mobile nav */}
        <div className="w-full justify-end flex md:hidden items-center">
          <div
            className="md:hidden flex items-center px-1 py-1 rounded-xl gap-2 cursor-pointer border shadow"
            onClick={() => openModal()}
          >
            <BsJustify className="text-[30px] text-[#1D7874]" />
          </div>
        </div>
        {/* mobile nav */}

        {/* call to action */}
        <div className="hidden items-center gap-5 w-full justify-end md:flex">
          <Link
            to="https://calendly.com/stacksineden/30min"
            target="_blank"
            className="text-[13px] text-[#071E22] cursor-pointer tracking-tight font-medium hover:text-[#1D7874] transition-all ease-in-out duration-300"
          >
            Book a call
          </Link>
          <Link
            to="https://medium.com/@stacksineden"
            target="_blank"
            className="text-[13px] text-[#071E22] cursor-pointer tracking-tight font-medium hover:text-[#1D7874] transition-all ease-in-out duration-300"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-[13px] text-[#F4C095] cursor-pointer tracking-tight font-semibold bg-[#071E22] px-4 py-2 rounded-full hover:bg-transparent hover:text-[#1D7874] border-[1px] border-[#e5e5e5] transition-all ease-in-out duration-300 shadow-lg"
          >
            Get started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
