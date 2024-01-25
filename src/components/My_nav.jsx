import React, { useEffect, useState } from "react";
import logo from "../Assets/images/page_logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Phone } from "../common_svg/icon";
const My_nav = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const phoneNumber = "+2349067322844";

  const [first, setfirst] = useState(false);
  function view() {
    setfirst(!first);
    if (first === false) {
      document.body.classList.add("ov_hidden");
    } else {
      document.body.classList.remove("ov_hidden");
    }
  }
  return (
    <div>
      <div className="max-w-[1240px] relative px-3 mx-auto ">
        <div className="flex items-center justify-between  pt-[20px] md:pt-[41px]">
          <div className="flex items-center cursor-pointer gap-[30px] lg:gap-[65px]">
            <img src={logo} alt="" />
            <li className="list-none hidden md:block cursor-pointer text-[#000000] text-[15px] font-semibold font-ff-pop leading-normal not-italic relative after:absolute after:w-0 after:rounded-[10px] after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300">
              <a onClick={view} href="#our">
                Our Services
              </a>
            </li>
          </div>
          <ul
            className={`${
              first ? "left-0" : "left-[-100%]"
            } flex items-center  fixed z-40  ps-0 gap-[50px] duration-500   nav_set`}
          >
            <span className="flex-col md:flex gap-[50px] lg:gap-[190px]">
              <span className="md:flex  items-center text-center gap-[25px] lg:gap-[33px]">
                <li className="list-none mb-4 md:mb-0  cursor-pointer text-[#000000] text-[15px] font-semibold font-ff-pop leading-normal not-italic ">
                  <a
                    onClick={view}
                    href="#About"
                    className="relative after:absolute after:w-0 after:rounded-[10px] after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300"
                  >
                    About
                  </a>
                </li>
                <li className="list-none mb-4 md:mb-0  cursor-pointer text-[#000000] text-[15px] font-semibold font-ff-pop leading-normal not-italic ">
                  <a
                    onClick={view}
                    href="#Blog"
                    className="relative after:absolute after:w-0 after:rounded-[10px] after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300"
                  >
                    Blog&News
                  </a>
                </li>
                <li className="list-none mb-4 md:mb-0  cursor-pointer text-[#000000] text-[15px] font-semibold font-ff-pop leading-normal not-italic ">
                  <a
                    onClick={view}
                    href="#contact"
                    className="relative after:absolute after:w-0 after:rounded-[10px] after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li className="list-none mb-4 block md:hidden cursor-pointer text-[#000000] text-[15px] font-semibold font-ff-pop leading-normal not-italic ">
                  <a
                    onClick={view}
                    href="#our"
                    className="relative after:absolute after:w-0 after:rounded-[10px] after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300"
                  >
                    Our Services
                  </a>
                </li>
              </span>
              <div className="block xs_1:hidden">
                <span className="flex-col text-center items-center gap-[30px] xl:gap-[60px]">
                  <li className="list-none mb-4 cursor-pointer text-[#000000] text-[15px] font-semibold font-ff-pop leading-normal not-italic ">
                    {" "}
                    <a
                      onClick={view}
                      href="#story"
                      className="relative after:absolute after:w-0 after:rounded-[10px] after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300"
                    >
                      Account
                    </a>
                  </li>
                  <li className="list-none flex items-center gap-2 cursor-pointer text-[#000000] text-[16px] font-semibold font-ff-pop leading-normal not-italic ">
                    {" "}
                    <span>
                      <Phone />
                    </span>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="relative after:absolute after:w-0 after:rounded-[10px] after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300"
                    >
                      +2349067322844
                    </a>
                  </li>
                </span>
              </div>
            </span>
          </ul>
          <div className="hidden xs_1:block">
            <span className="flex  items-center justify-center gap-[30px] xl:gap-[35px] md:me-[-55px]">
              <li className="list-none cursor-pointer text-[#000000] text-[15px] font-semibold font-ff-pop leading-normal not-italic relative after:absolute after:w-0 after:rounded-[10px] after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300">
                {" "}
                <a onClick={view} href="#story">
                  Account
                </a>
              </li>
              <hr className="h-[20px] bg-[#c4c4c4] w-[1px]" />
              <li className="list-none flex items-center gap-2 cursor-pointer text-[#000000] text-[16px] font-semibold font-ff-pop leading-normal not-italic relative after:absolute after:w-0 after:rounded-[10px] after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300">
                {" "}
                <span>
                  <Phone />
                </span>
                <a href={`tel:${phoneNumber}`}>+2349067322844</a>
              </li>
            </span>
          </div>
          <div onClick={view}>
            <label
              onClick={view}
              className="hamburger absolute z-30 right-2 top-6  block md:hidden"
            >
              {/* <input
                onClick={view}
                type="checkbox"
                className="hamburger absolute z-30 right-2 top-4  block md:hidden"
              /> */}
              <svg viewBox="0 0 32 32">
                <path
                  className="line bg-black line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default My_nav;
