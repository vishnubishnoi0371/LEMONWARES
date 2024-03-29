import React, { useEffect, useState } from "react";
import { Tick } from "../common_svg/icon";
import AOS from "aos";
import "aos/dist/aos.css";
const Lemon_wares = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const [first, setFirst] = useState("tab1");
  function tabs(tab) {
    setFirst(tab);
  }
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <div
        id="Blog"
        className="max-w-[1121px] relative px-3 mx-auto overflow-hidden "
      >
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="flex items-center justify-center"
        >
          <p className="font-ff-pop md:[30px] lg:mt-[70px] font-semibold text-[30px] md:text-[50px] leading-[40px]  md:leading-[60px] text-[#000] text-center max-w-[650px] pb-[20px]">
            Ready to get started with Lemon Wares?
          </p>
        </div>
        <p
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="lg:text-[25px] text-[18px] font-normal leading-[25px] font-ff-pop text-center text-[#000] md:mt-[16px] md:mb-[23px]"
        >
          Choose the package that suits you
        </p>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className=" flex items-center mx-auto xs_1:justify-center mt-[15px]  lg:mt-[57px] justify-between max-w-[300px] xs_1:max-w-[unset]"
        >
          <p className=" font-ff-pop text-[20px] xs_1:text-[25px] font-normal leading-[25px] text-[#000] xs_1:mr-[31px]">
            Monthly
          </p>
          <label htmlFor="toggle" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                id="toggle"
                className="hidden"
                checked={isChecked}
                onChange={toggleSwitch}
              />
              <div
                className={`${
                  isChecked ? "bg-[#18191f]" : "bg-[#B00000]"
                } duration-300 rounded-[73px] w-[75px] xs_1:w-[93px] h-[35px] xs_1:h-[50px] p-[10px_9px]`}
              >
                <div
                  className={`absolute w-[22px] xs_1:w-[30px] h-[22px] xs_1:h-[30px] bg-white rounded-full shadow inset-y-0 top-[6px] xs_1:top-[10px] duration-300 ${
                    isChecked
                      ? " translate-x-[37px] xs_1:translate-x-[43px]"
                      : "translate-x-0"
                  }`}
                ></div>
              </div>
            </div>
          </label>
          <p className=" font-ff-pop text-[20px] xs_1:text-[25px] font-normal leading-[25px] text-[#000] xs_1:ml-[26px] xs_1:mr-[17px]">
            Yearly
          </p>
          <button className=" hidden xs_1:block     font-ff-pop text-[10px] leading-[9px] font-medium text-[#000] p-[7px_8px] rounded-[8px] bg-[#FFE87A]">
            20% discount
          </button>
        </div>
        <button className=" block xs_1:hidden mx-auto mt-[8px] font-ff-pop text-[10px] leading-[9px] font-medium text-[#000] p-[7px_8px] rounded-[8px] bg-[#FFE87A]">
          20% discount
        </button>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className=" max-w-[856px] mb-4 md:mb-[45px] mx-auto flex relative after:absolute after:w-full after:left-0 after:h-[4px] after:bottom-[-6px] after:bg-[#C4C4C4] mt-[20px]  lg:mt-[70px]"
        >
          <div
            onClick={() => tabs("tab1")}
            className={` ${
              first === "tab1" ? "tab_2 " : ""
            } w-[50%] flex justify-center`}
          >
            <span
              onClick={() => tabs("tab1")}
              className="text-[#000] font-ff-pop text-[30px] font-semibold leading-[40px] cursor-pointer"
            >
              Basic
            </span>
          </div>
          <div
            onClick={() => tabs("tab2")}
            className={` ${
              first === "tab2" ? "tab_2 " : ""
            } w-[50%] flex justify-center`}
          >
            <span
              onClick={() => tabs("tab2")}
              className=" text-[#000] font-ff-pop text-[30px] font-semibold leading-[40px] cursor-pointer"
            >
              Premium
            </span>
          </div>
        </div>
     
        {first === "tab1" && (
          <div className="flex flex-row justify-center flex-wrap  -mx-3 md:pb-[40px] pt-5 md:pt-[50px] overflow-hidden">
            <div className="xs_1:w-1/2 sm:w-4/12   px-3">
              <div data-aos="fade-right" data-aos-duration="2000">
                <div className="lg:p-[34px_29px_48px_35px] md:p-[25px] p-[15px] border-[1.5px] sm:max-w-[299px] rounded-[15px] border-[#c4c4c4] duration-500 shadow-crd_sh_2 hover:shadow-crd_sh_1">
                  <p className="text-[28px] font-semibold font-ff-pop leading-[25px] text-[#000]">
                    Starter
                  </p>
                  <p className="pt-2 sm:pt-[11px] mb-2 md:mb-[28px] text-[12px] font-ff-pop font-normal text-[#000] leading-[18px] max-w-[237px]">
                    with all your customers via all conversation channels in one
                    central dashboard.
                  </p>
                  <p className="text-[30px] md:text-[42px] font-ff-pop font-semibold text-[#000] leading-[32px] mb-2 md:mb-[11px]">
                    {isChecked ? "$15.80" : "$2.80"}
                  </p>
                  <p className="text-[14px] font-[300] font-ff-pop leading-[14px] text-[#000] mb-3 lg:mb-[35px]">
                    {isChecked ? "Per year" : "Per month"}
                  </p>
                  <button className="py-1 md:py-[9px] max-w-[245px] w-full bg-transparent  hover:border-transparent !bg-[#808080] hover:text-[#fff]  shadow-[inset_18rem_0_0_0_#fff] hover:shadow-[0_0_0_0_inset]  duration-500  border-[2px]    border-[#000] rounded-[12px] clear-start leading-[25px] md:leading-[32px] text-[14px] font-ff-pop font-semibold">
                    Choose this Plan
                  </button>
                  <div className="pt-[10px] lg:pt-[35px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      2GB SSD
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      10GB Bandwidth
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      15 Email Accounts
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      Unlimited Database
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      4 Subdomains
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      1 Parked Domain
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      2 Websites
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      Free SSL
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      Softaculous
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="xs_1:w-1/2 sm:w-4/12   pt-4 xs_1:pt-0 px-3">
              <div data-aos="fade-right" data-aos-duration="2000">
                <div className="lg:p-[34px_29px_48px_35px] md:p-[25px] p-[15px] border-[1.5px] sm:max-w-[299px] rounded-[15px] border-[#c4c4c4] duration-500 shadow-crd_sh_2 hover:shadow-crd_sh_1">
                  <p className="text-[28px] font-semibold font-ff-pop leading-[25px] text-[#000]">
                    Standard
                  </p>
                  <p className="pt-2 sm:pt-[11px] mb-2 md:mb-[28px] text-[12px] font-ff-pop font-normal text-[#000] leading-[18px] max-w-[237px]">
                    with all your customers via all conversation channels in one
                    central dashboard.
                  </p>
                  <p className="md:text-[42px] text-[30px] font-ff-pop font-semibold text-[#000] leading-[32px] mb-[11px]">
                    {isChecked ? "$19.80" : "$4.20"}
                  </p>
                  <p className="text-[14px] font-[300] font-ff-pop leading-[14px] text-[#000] mb-3 lg:mb-[35px]">
                    {isChecked ? "Per year" : "Per month"}
                  </p>
                  <button className="py-1 md:py-[9px] max-w-[245px] hover:border-transparent w-full !bg-[#808080] hover:text-[#fff]  shadow-[inset_18rem_0_0_0_#fff] hover:shadow-[0_0_0_0_inset]  duration-500  border-[2px] border-[#000] rounded-[12px] clear-start leading-[25px] md:leading-[32px] text-[14px] font-ff-pop font-semibold">
                    Choose this Plan
                  </button>
                  <div className="pt-[10px] lg:pt-[35px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      2GB SSD
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      10GB Bandwidth
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      15 Email Accounts
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      Unlimited Database
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      4 Subdomains
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      1 Parked Domain
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      2 Websites
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      Free SSL
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      Softaculous
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="xs_1:w-1/2 sm:w-4/12 pt-4 sm:pt-0  px-3">
              <div data-aos="fade-left" data-aos-duration="2000">
                <div className="lg:p-[34px_29px_48px_35px] md:p-[25px] p-[15px] border-[1.5px] sm:max-w-[299px] rounded-[15px] border-[#c4c4c4] duration-500 shadow-crd_sh_2 hover:shadow-crd_sh_1">
                  <p className="text-[28px] font-semibold font-ff-pop leading-[25px] text-[#000]">
                    Suprem
                  </p>
                  <p className="sm:pt-[11px] pt-2 mb-2 md:mb-[28px] text-[12px] font-ff-pop font-normal text-[#000] leading-[18px] max-w-[237px]">
                    with all your customers via all conversation channels in one
                    central dashboard.
                  </p>
                  <p className="text-[30px] md:text-[42px] font-ff-pop font-semibold text-[#000] leading-[32px] mb-[11px]">
                    {isChecked ? "$25.80" : "$7.00"}
                  </p>
                  <p className="text-[14px] font-[300] font-ff-pop leading-[14px] text-[#000] mb-3  lg:mb-[35px]">
                    {isChecked ? "Per year" : "Per month"}
                  </p>
                  <button className="py-1 md:py-[9px] max-w-[245px] w-full hover:border-transparent !bg-[#808080] hover:text-[#fff]  shadow-[inset_18rem_0_0_0_#fff] hover:shadow-[0_0_0_0_inset]  duration-500  border-[2px] border-[#000] rounded-[12px] clear-start leading-[25px] md:leading-[32px] text-[14px] font-ff-pop font-semibold">
                    Choose this Plan
                  </button>
                  <div className="pt-[10px] lg:pt-[35px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      2GB SSD
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      10GB Bandwidth
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      15 Email Accounts
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      Unlimited Database
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      4 Subdomains
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      1 Parked Domain
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      2 Websites
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      Free SSL
                    </p>
                  </div>
                  <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                    <Tick />
                    <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                      Softaculous
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {first === "tab2" && (
          <div className="flex flex-row justify-center flex-wrap  -mx-3 pb-[40px] pt-5 md:pt-[50px]">
            <div className="xs_1:w-1/2 sm:w-4/12   px-3">
              <div className="lg:p-[34px_29px_48px_35px] md:p-[25px] p-[15px] border-[1.5px] sm:max-w-[299px] rounded-[15px] border-[#c4c4c4] duration-500  hover:shadow-crd_sh_1">
                <p className="text-[28px] font-semibold font-ff-pop leading-[25px] text-[#000]">
                  Starter
                </p>
                <p className="mt-2 sm:mt-[11px] mb-2 md:mb-[28px] text-[12px] font-ff-pop font-normal text-[#000] leading-[18px] max-w-[237px]">
                  with all your customers via all conversation channels in one
                  central dashboard.
                </p>
                <p className="text-[30px] md:text-[42px] font-ff-pop font-semibold text-[#000] leading-[32px] mb-2 md:mb-[11px]">
                  {isChecked ? "$35.80" : "$9.00"}
                </p>
                <p className="text-[14px] font-[300] font-ff-pop leading-[14px] text-[#000] mb-3 lg:mb-[35px]">
                  {isChecked ? "Per year" : "Per month"}
                </p>
                <button className="py-1 md:py-[9px] max-w-[245px] w-full hover:border-transparent !bg-[#808080] hover:text-[#fff]  shadow-[inset_18rem_0_0_0_#fff] hover:shadow-[0_0_0_0_inset]  duration-500  border-[2px] border-[#000] rounded-[12px] clear-start leading-[25px] md:leading-[32px] text-[14px] font-ff-pop font-semibold">
                  Choose this Plan
                </button>
                <div className="pt-[10px] lg:pt-[35px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    2GB SSD
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    10GB Bandwidth
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    15 Email Accounts
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    Unlimited Database
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    4 Subdomains
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    1 Parked Domain
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    2 Websites
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    Free SSL
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    Softaculous
                  </p>
                </div>
              </div>
            </div>
            <div className="xs_1:w-1/2 sm:w-4/12   pt-4 xs_1:pt-0 px-3">
              <div className="lg:p-[34px_29px_48px_35px] md:p-[25px] p-[15px] border-[1.5px] sm:max-w-[299px] rounded-[15px] border-[#c4c4c4] duration-500  hover:shadow-crd_sh_1">
                <p className="text-[28px] font-semibold font-ff-pop leading-[25px] text-[#000]">
                  Standard
                </p>
                <p className="mt-2 sm:mt-[11px] mb-2 md:mb-[28px] text-[12px] font-ff-pop font-normal text-[#000] leading-[18px] max-w-[237px]">
                  with all your customers via all conversation channels in one
                  central dashboard.
                </p>
                <p className="md:text-[42px] text-[30px] font-ff-pop font-semibold text-[#000] leading-[32px] mb-[11px]">
                  {isChecked ? "$45.80" : "$12.00"}
                </p>
                <p className="text-[14px] font-[300] font-ff-pop leading-[14px] text-[#000] mb-3 lg:mb-[35px]">
                  {isChecked ? "Per year" : "Per month"}
                </p>
                <button className="py-1 md:py-[9px] max-w-[245px] w-full hover:border-transparent !bg-[#808080] hover:text-[#fff]  shadow-[inset_18rem_0_0_0_#fff] hover:shadow-[0_0_0_0_inset]  duration-500  border-[2px] border-[#000] rounded-[12px] clear-start leading-[25px] md:leading-[32px] text-[14px] font-ff-pop font-semibold">
                  Choose this Plan
                </button>
                <div className="pt-[10px] lg:pt-[35px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    2GB SSD
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    10GB Bandwidth
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    15 Email Accounts
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    Unlimited Database
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    4 Subdomains
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    1 Parked Domain
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    2 Websites
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    Free SSL
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    Softaculous
                  </p>
                </div>
              </div>
            </div>
            <div className="xs_1:w-1/2 sm:w-4/12 pt-4 sm:pt-0  px-3">
              <div className="lg:p-[34px_29px_48px_35px] md:p-[25px] p-[15px] border-[1.5px] sm:max-w-[299px] rounded-[15px] border-[#c4c4c4] duration-500  hover:shadow-crd_sh_1">
                <p className="text-[28px] font-semibold font-ff-pop leading-[25px] text-[#000]">
                  Suprem
                </p>
                <p className="sm:mt-[11px] mt-2 mb-2 md:mb-[28px] text-[12px] font-ff-pop font-normal text-[#000] leading-[18px] max-w-[237px]">
                  with all your customers via all conversation channels in one
                  central dashboard.
                </p>
                <p className="text-[30px] md:text-[42px] font-ff-pop font-semibold text-[#000] leading-[32px] mb-[11px]">
                  {isChecked ? "$25.80" : "$7.00"}
                </p>
                <p className="text-[14px] font-[300] font-ff-pop leading-[14px] text-[#000] mb-3  lg:mb-[35px]">
                  {isChecked ? "Per year" : "Per month"}
                </p>
                <button className="py-1 md:py-[9px] max-w-[245px] w-full hover:border-transparent !bg-[#808080] hover:text-[#fff]  shadow-[inset_18rem_0_0_0_#fff] hover:shadow-[0_0_0_0_inset]  duration-500  border-[2px] border-[#000] rounded-[12px] clear-start leading-[25px] md:leading-[32px] text-[14px] font-ff-pop font-semibold">
                  Choose this Plan
                </button>
                <div className="pt-[10px] lg:pt-[35px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    2GB SSD
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    10GB Bandwidth
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    15 Email Accounts
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    Unlimited Database
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    4 Subdomains
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    1 Parked Domain
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    2 Websites
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    Free SSL
                  </p>
                </div>
                <div className="sm:pt-[6px] lg:pt-[15px] flex items-center gap-[8px] md:gap-[12px] lg:gap-[24px]">
                  <Tick />
                  <p className="text-[12px] md:text-[16px] font-ff-inter font-semibold leading-[24px] text-[#808080]">
                    Softaculous
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lemon_wares;
