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
        <div className="flex flex-row  justify-center flex-wrap  -mx-3 ">
          {/* <div className="md:w-1/2 lg:w-6/12 px-3">
        
            <div className=" max-w-[242px] gap-[24px]  flex items-center justify-center md:justify-start relative after:absolute after:w-full after:left-0 after:h-[1px] after:bottom-[-6px] after:bg-[#C4C4C4] ">
              <div
                onClick={() => tabs("tab1")}
                className={` ${
                  first === "tab1" ? "tab_1 " : ""
                } w-[50%] flex justify-center`}
              >
                <span
                  onClick={() => tabs("tab1")}
                  className=" font-ff-pop  text-[15px] cursor-pointer font-semibold leading-normal  text-[#dbd9d9]"
                >
                  Hosting
                </span>
              </div>
              <div
                onClick={() => tabs("tab2")}
                className={` ${
                  first === "tab2" ? "tab_1 " : ""
                } w-[50%] flex justify-center`}
              >
                <span
                  onClick={() => tabs("tab2")}
                  className="  font-ff-pop  text-[15px] cursor-pointer font-semibold leading-normal  text-[#dbd9d9]"
                >
                  Domain
                </span>
              </div>
              <div
                onClick={() => tabs("tab3")}
                className={` ${
                  first === "tab3" ? "tab_1 " : ""
                } w-[50%] flex justify-center`}
              >
                <span
                  onClick={() => tabs("tab1")}
                  className=" font-ff-pop  text-[15px] cursor-pointer font-semibold leading-normal  text-[#dbd9d9]"
                >
                  SEO
                </span>
              </div>
              <div
                onClick={() => tabs("tab4")}
                className={` ${
                  first === "tab4" ? "tab_1 " : ""
                } w-[50%] flex justify-center`}
              >
                <span
                  onClick={() => tabs("tab2")}
                  className="  font-ff-pop  text-[15px] cursor-pointer font-semibold leading-normal  text-[#dbd9d9]"
                >
                  Email
                </span>
              </div>
            </div>
            <div className=" w-full  ">
              {first === "tab1" && (
                <div className="pb-[30px]">
                  <p className="text-[40px] lg:text-[64px] text-center md:text-start font-bold font-ff-pop leading-[50px] lg:leading-[77px] text-[#2E2E2E] max-w-[608px] pb-5 lg:pb-[34px] pt-[26px]">
                    Premium Web Domain for Your Website
                  </p>
                  <div className="flex items-center justify-center md:justify-start">
                    <p className="text-[16px] font-normal  text-center md:text-start font-ff-inter leading-[28px] tracking-[.8px] max-w-[440px] text-[808080] pb-[20px] lg:pb-[60px]">
                      Blazing fast web Domain for individuals and businesses of
                      all sizes backed by 24x7x365 Support.
                    </p>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-[24px]">
                    <button className="bg-[#b00000] shdw  hover:border-transparent   shadow-[inset_18rem_0_0_0_#b00000] hover:shadow-[0_0_0_0_inset]  duration-500  border-[1px]   p-2 md:p-3 text-[14px] border-[#b00000] font-normal font-ff-pop leading-[24px] text-[#fff]   rounded-lg ">
                      Create an Account
                    </button>
                    <button className="bg-transparent shdw hover:border-transparent !bg-[#B00000]  shadow-[inset_18rem_0_0_0_#fff] hover:shadow-[0_0_0_0_inset]  duration-500  border-[1px]   p-2 md:p-3 text-[14px] border-[#000] font-normal font-ff-pop leading-[24px] hover:text-[#fff] text-[#000]  rounded-lg ">
                      Choose your plan
                    </button>
                  </div>
                </div>
              )}
              {first === "tab2" && (
                <div>
                  {" "}
                  <div className="pb-[30px]">
                    <p className="text-[40px] lg:text-[64px] text-center md:text-start font-bold font-ff-pop leading-[50px] lg:leading-[77px] text-[#2E2E2E] max-w-[608px] pb-5 lg:pb-[34px] pt-[26px]">
                      Premium Web Domain for Your Website
                    </p>
                    <div className="flex items-center justify-center md:justify-start">
                      <p className="text-[16px] font-normal  text-center md:text-start font-ff-inter leading-[28px] tracking-[.8px] max-w-[440px] text-[808080] pb-[20px] lg:pb-[60px]">
                        Blazing fast web Domain for individuals and businesses
                        of all sizes backed by 24x7x365 Support.
                      </p>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-[24px]">
                      <button className="bg-transparent hover:shadow-btn_hv_1 hover:border-transparent duration-500 p-2 md:p-3 text-[14px] border-[#000] font-normal font-ff-pop leading-[24px] hover:text-[#fff] text-[#000] border-[1px] rounded-lg hover:bg-[#b00000]">
                        Create an Account
                      </button>
                      <button className="bg-transparent hover:shadow-btn_hv_1 hover:border-transparent duration-500 p-2 md:p-3 text-[14px] border-[#000] font-normal font-ff-pop leading-[24px] hover:text-[#fff] text-[#000] border-[1px] rounded-lg hover:bg-[#b00000]">
                        Choose your plan
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {first === "tab3" && (
                <div>
                  {" "}
                  <div className="pb-[30px]">
                    <p className="text-[40px] lg:text-[64px] text-center md:text-start font-bold font-ff-pop leading-[50px] lg:leading-[77px] text-[#2E2E2E] max-w-[608px] pb-5 lg:pb-[34px] pt-[26px]">
                      Premium Web Domain for Your Website
                    </p>
                    <div className="flex items-center justify-center md:justify-start">
                      <p className="text-[16px] font-normal  text-center md:text-start font-ff-inter leading-[28px] tracking-[.8px] max-w-[440px] text-[808080] pb-[20px] lg:pb-[60px]">
                        Blazing fast web Domain for individuals and businesses
                        of all sizes backed by 24x7x365 Support.
                      </p>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-[24px]">
                      <button className="bg-transparent hover:shadow-btn_hv_1 hover:border-transparent duration-500 p-2 md:p-3 text-[14px] border-[#000] font-normal font-ff-pop leading-[24px] hover:text-[#fff] text-[#000] border-[1px] rounded-lg hover:bg-[#b00000]">
                        Create an Account
                      </button>
                      <button className="bg-transparent hover:shadow-btn_hv_1 hover:border-transparent duration-500 p-2 md:p-3 text-[14px] border-[#000] font-normal font-ff-pop leading-[24px] hover:text-[#fff] text-[#000] border-[1px] rounded-lg hover:bg-[#b00000]">
                        Choose your plan
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {first === "tab4" && (
                <div>
                  {" "}
                  <div className="pb-[30px]">
                    <p className="text-[40px] lg:text-[64px] text-center md:text-start font-bold font-ff-pop leading-[50px] lg:leading-[77px] text-[#2E2E2E] max-w-[608px] pb-5 lg:pb-[34px] pt-[26px]">
                      Premium Web Domain for Your Website
                    </p>
                    <div className="flex items-center justify-center md:justify-start">
                      <p className="text-[16px] font-normal  text-center md:text-start font-ff-inter leading-[28px] tracking-[.8px] max-w-[440px] text-[808080] pb-[20px] lg:pb-[60px]">
                        Blazing fast web Domain for individuals and businesses
                        of all sizes backed by 24x7x365 Support.
                      </p>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-[24px]">
                      <button className="bg-transparent hover:shadow-btn_hv_1 hover:border-transparent duration-500 p-2 md:p-3 text-[14px] border-[#000] font-normal font-ff-pop leading-[24px] hover:text-[#fff] text-[#000] border-[1px] rounded-lg hover:bg-[#b00000]">
                        Create an Account
                      </button>
                      <button className="bg-transparent hover:shadow-btn_hv_1 hover:border-transparent duration-500 p-2 md:p-3 text-[14px] border-[#000] font-normal font-ff-pop leading-[24px] hover:text-[#fff] text-[#000] border-[1px] rounded-lg hover:bg-[#b00000]">
                        Choose your plan
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div> */}
          <div className=" w-full md:w-1/2 px-3 pt-5">
            <div className=" flex justify-center md:block">
              <div className=" flex items-center relative after:absolute after:w-full after:h-[1px] after:bg-[#E5E5E5] after:left-0 after:bottom-[-5px] after:max-w-[242px]">
                <span
                  onClick={() => tabs("tab1")}
                  className={`${
                    first === "tab1" ? "tab_1 " : ""
                  } font-poppins font-semibold text-[15px] text-[#DBD9D9] mr-[23px] leading-[normal] cursor-pointer`}
                >
                  Hosting
                </span>
                <span
                  onClick={() => tabs("tab2")}
                  className={`${
                    first === "tab2" ? "tab_1" : ""
                  } font-poppins font-semibold text-[15px] text-[#DBD9D9] mr-[18px] leading-[normal] cursor-pointer`}
                >
                  Domain
                </span>
                <span
                  onClick={() => tabs("tab3")}
                  className={`${
                    first === "tab3" ? "tab_1" : ""
                  } font-poppins font-semibold text-[15px] text-[#DBD9D9] mr-[15px] leading-[normal] cursor-pointer`}
                >
                  SEO
                </span>
                <span
                  onClick={() => tabs("tab4")}
                  className={`${
                    first === "tab4" ? "tab_1" : ""
                  } font-poppins font-semibold text-[15px] text-[#DBD9D9] leading-[normal] cursor-pointer`}
                >
                  Email
                </span>
              </div>
            </div>
            {first === "tab1" && (
              <p className=" mx-auto md:mx-0 text-center md:text-start font-poppins text-[30px] 450:text-[37px] 576:text-[43px] min-[800px]:text-[50px] min-[900px]:text-[58px] 992:text-[64px] font-bold leading-[45px] 450:leading-[55px] 576:leading-[62.5px]  min-[900px]:leading-[77.5px] text-[#2E2E2E] mt-[10px] min-[800px]:mt-[30px] max-w-[608px]">
                Premium Web Hosting for Your Website
              </p>
            )}
            {first === "tab2" && (
              <p className=" mx-auto md:mx-0 text-center md:text-start font-poppins text-[30px] 450:text-[37px] 576:text-[43px] min-[800px]:text-[50px] min-[900px]:text-[58px] 992:text-[64px] font-bold leading-[45px] 450:leading-[55px] 576:leading-[62.5px]  min-[900px]:leading-[77.5px] text-[#2E2E2E] mt-[10px] min-[800px]:mt-[30px] max-w-[608px]">
                Premium Web Domain for Your Website
              </p>
            )}
            {first === "tab3" && (
              <p className=" mx-auto md:mx-0 text-center md:text-start font-poppins text-[30px] 450:text-[37px] 576:text-[43px] min-[800px]:text-[50px] min-[900px]:text-[58px] 992:text-[64px] font-bold leading-[45px] 450:leading-[55px] 576:leading-[62.5px]  min-[900px]:leading-[77.5px] text-[#2E2E2E] mt-[10px] min-[800px]:mt-[30px] max-w-[608px]">
                Premium Web SEO for Your Website
              </p>
            )}
            {first === "tab4" && (
              <p className=" mx-auto md:mx-0 text-center md:text-start font-poppins text-[30px] 450:text-[37px] 576:text-[43px] min-[800px]:text-[50px] min-[900px]:text-[58px] 992:text-[64px] font-bold leading-[45px] 450:leading-[55px] 576:leading-[62.5px]  min-[900px]:leading-[77.5px] text-[#2E2E2E] mt-[10px] min-[800px]:mt-[30px] max-w-[608px]">
                Premium Web Email for Your Website
              </p>
            )}
            <p className=" mx-auto md:mx-0 text-center md:text-start font-inter md:pb-[60px] pb-[30px] text-[14px] 992:text-base font-normal text-[#808080] leading-[20px] min-[900px]:leading-[28px] tracking-[0.8px] max-w-[448px] mt-[10px] min-[900px]:mt-[34px]">
              Blazing fast web hosting for individuals and businesses of all
              sizes backed by 24x7x365 Support.
            </p>
            <div className="flex items-center justify-center md:justify-start pb-[30px] md:pb-0  gap-[24px]">
              <button className="bg-[#b00000] shdw  hover:border-transparent   shadow-[inset_18rem_0_0_0_#b00000] hover:shadow-[0_0_0_0_inset]  duration-500  border-[1px]   p-2 md:p-3 text-[14px] border-[#b00000] font-normal font-ff-pop leading-[24px] text-[#fff]   rounded-lg ">
                Create an Account
              </button>
              <button className="bg-transparent shdw hover:border-transparent !bg-[#B00000]  shadow-[inset_18rem_0_0_0_#fff] hover:shadow-[0_0_0_0_inset]  duration-500  border-[1px]   p-2 md:p-3 text-[14px] border-[#000] font-normal font-ff-pop leading-[24px] hover:text-[#fff] text-[#000]  rounded-lg ">
                Choose your plan
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative lg:w-6/12 px-3">
            <div className="">
              <img className="w-full" src={herogirl} alt="" />
              <span className="absolute bottom-[28%] left-0">
                <Triangle1 />
              </span>
              <span className="absolute top-[12%] right-0 lg:right-[-1%]">
                <Triangle2 />
              </span>
              <span className="absolute bottom-[8%] right-0 lg:right-[-1%]">
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
