import { useEffect, useState } from "react";
import { assets } from "../assets/images/assets";
export default function Navbar() {
  const [showMobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center md:px-20 lg:px32 bg-transparent  ">
        <img src={assets.logo} alt="Logo" />
        <ul className="hidden  md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400 ">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400 ">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400 ">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400 "
          >
            Testimonials
          </a>
          <a
            href="#Contact"
            className="cursor-pointer hover:text-gray-400 "
          >
            Contact
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
        <img
          src={assets.menu_icon}
          className=" md:hidden w-7"
          onClick={() => setMobileMenu(true)}
        />
      </div>
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src={assets.cross_icon}
            className="w-6"
            onClick={() => setMobileMenu(false)}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => setMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
          >
            Testimonials
          </a>
          <a
            onClick={() => setMobileMenu(false)}
            href="#Contact us"
            className="px-4 py-2 rounded-full inline-block"
          >
            Contact us
          </a>
        </ul>
      </div>
    </div>
  );
}
