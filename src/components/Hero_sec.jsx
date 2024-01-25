import React, { useState } from "react";
import herogirl from "../Assets/images/hero-girl.webp";
import { Triangle1, Triangle2, Triangle3 } from "../common_svg/icon";

const Hero_sec = () => {
  const [first, setFirst] = useState("tab1");
  function tabs(tab) {
    setFirst(tab);
  }
  return (
    <div>
      <div className="max-w-[1240px] px-3  mx-auto pt-[25px] sm:pt-[45px] lg:pt-[90px]">
        <div className="flex flex-row   justify-center flex-wrap  -mx-3 ">
          <div className=" w-full md:w-1/2 px-3 pt-5">
            <div id="our" className=" flex justify-center md:block">
              <div className=" flex items-center relative after:absolute after:w-full after:h-[1px] after:bg-[#E5E5E5] after:left-0 after:bottom-[-5px] after:max-w-[226px]">
                <span
                  onClick={() => tabs("tab1")}
                  className={`${
                    first === "tab1" ? "tab_1 " : ""
                  } font-ff-pop font-semibold text-[15px] text-[#DBD9D9] mr-[23px] leading-[normal] cursor-pointer`}
                >
                  Hosting
                </span>
                <span
                  onClick={() => tabs("tab2")}
                  className={`${
                    first === "tab2" ? "tab_1" : ""
                  } font-ff-pop font-semibold text-[15px] text-[#DBD9D9] mr-[18px] leading-[normal] cursor-pointer`}
                >
                  Domain
                </span>
                <span
                  onClick={() => tabs("tab3")}
                  className={`${
                    first === "tab3" ? "tab_1" : ""
                  } font-ff-pop font-semibold text-[15px] text-[#DBD9D9] mr-[15px] leading-[normal] cursor-pointer`}
                >
                  SEO
                </span>
                <span
                  onClick={() => tabs("tab4")}
                  className={`${
                    first === "tab4" ? "tab_1" : ""
                  } font-ff-pop font-semibold text-[15px] text-[#DBD9D9] leading-[normal] cursor-pointer`}
                >
                  Email
                </span>
              </div>
            </div>
            {first === "tab1" && (
              <p className=" mx-auto md:mx-0 text-center md:text-start font-ff-pop text-[30px] xs_1:text-[37px] sm:text-[43px] lg:text-[64px] font-bold leading-[45px] 450:leading-[55px] 576:leading-[62.5px]  min-[900px]:leading-[77.5px] text-[#2E2E2E] mt-[10px] min-[800px]:mt-[30px] max-w-[608px]">
                Premium Web Hosting for Your Website
              </p>
            )}
            {first === "tab2" && (
              <p className=" mx-auto md:mx-0 text-center md:text-start font-ff-pop text-[30px] xs_1:text-[37px] sm:text-[43px] lg:text-[64px] font-bold leading-[45px] xs_1:leading-[55px] 576:leading-[62.5px]  min-[900px]:leading-[77.5px] text-[#2E2E2E] mt-[10px] min-[800px]:mt-[30px] max-w-[608px]">
                Premium Web Domain for Your Website
              </p>
            )}
            {first === "tab3" && (
              <p className=" mx-auto md:mx-0 text-center md:text-start font-ff-pop text-[30px] xs_1:text-[37px] sm:text-[43px] lg:text-[64px] font-bold leading-[45px] xs_1:leading-[55px] 576:leading-[62.5px]  min-[900px]:leading-[77.5px] text-[#2E2E2E] mt-[10px] min-[800px]:mt-[30px] max-w-[608px]">
                Premium Web SEO for Your Website
              </p>
            )}
            {first === "tab4" && (
              <p className=" mx-auto md:mx-0 text-center md:text-start font-ff-pop text-[30px] xs_1:text-[37px] sm:text-[43px] lg:text-[64px] font-bold leading-[45px] xs_1:leading-[55px] 576:leading-[62.5px]  min-[900px]:leading-[77.5px] text-[#2E2E2E] mt-[10px] min-[800px]:mt-[30px] max-w-[608px]">
                Premium Web Email for Your Website
              </p>
            )}
            <p className=" mx-auto md:mx-0 text-center md:text-start font-ff-pop md:mb-[60px] mb-[30px] text-[14px] lg:text-base font-normal text-[#808080] leading-[20px] min-[900px]:leading-[28px] tracking-[0.8px] max-w-[448px] mt-[10px] min-[900px]:mt-[34px]">
              Blazing fast web hosting for individuals and businesses of all
              sizes backed by 24x7x365 Support.
            </p>
            <div className="flex items-center justify-center md:justify-start pb-[30px] md:pb-0  gap-[24px]">
              <button class="cursor-pointer font-normal overflow-hidden rounded-[8px] hover:shadow-btn_hv_1 duration-500 bg-[#b00000] border-[#b00000] relative  border  group p-2 md:p-3">
                <span class="relative z-10 font-ff-pop font-normal leading-[24px] text-white text-[14px] duration-500">
                  Create an Account
                </span>
                <span class="absolute w-full h-full bg-[#b00000] border-[#b00000] -left-40  top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                <span class="absolute w-full h-full bg-[#b00000] border-[#b00000] -right-40  top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
              </button>
              <button class="cursor-pointer font-normal overflow-hidden rounded-[8px] hover:shadow-btn_hv_1 duration-500 hover:border-[#b00000] relative  border border-black group p-2 md:p-3">
                <span class="relative z-10 text-black font-normal font-ff-pop leading-[24px] group-hover:text-white text-[14px] duration-500">
                  Choose your plan
                </span>
                <span class="absolute w-full h-full bg-[#b00000] border-[#b00000] -left-40  top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                <span class="absolute w-full h-full bg-[#b00000] border-[#b00000] -right-40  top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative lg:w-6/12 px-3">
            <div className="flex justify-end">
              <img className="w-full max-w-[500px]" src={herogirl} alt="" />
              <span className="absolute bottom-[28%] left-1 lg:left-[5%] xl:left-[15%]">
                <Triangle1 />
              </span>
              <span className="absolute top-[12%] right-1 lg:right-[-1%]">
                <Triangle2 />
              </span>
              <span className="absolute bottom-[8%] right-1 lg:right-[-1%]">
                <Triangle3 />
              </span>
              {/* <span className="absolute right-3 bottom-[20%] rotate-[30deg] w-0 h-0 border-l-[50px] border-r-transparent border-l-transparent border-b-[red] border-r-[50px] border-b-[100px]"></span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_sec;
