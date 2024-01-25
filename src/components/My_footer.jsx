import React from "react";
import ftlogo from "../Assets/images/ft_logo.webp";
import { Heart } from "../common_svg/icon";
const My_footer = () => {
  return (
    <div id="contact" className="bg-[#B00000]">
      <div className="max-w-[1244px] px-3 mx-auto lg:pt-[50px] ">
        <div className="flex flex-row justify-between flex-wrap  -mx-3 pb-[44px] pt-5 md:pt-[14px]">
          <div className=" lg:w-3/12 w-full px-3">
            <img className="pb-[16px] cursor-pointer" src={ftlogo} alt="" />
            <p className="font-ff-inter  lg:max-w-[296px] font-normal pb-6 leading-[32px] not-italic text-[#E6E6E6] mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elem
            </p>
          </div>
          <div className=" lg:w-8/12 w-full px-3 pt-5 md:pt-0">
            <div className="flex flex-row  justify-between flex-wrap  -mx-3 ">
              <div className="w-1/2 xs_1:w-4/12 sm:w-3/12 px-3 pb-4 lg:pb-0">
                <p className="text-base font-bold text-white pb-2 sm:pb-[15px] lg:pb-[24px]  font-ff-inter leading-[24px] not-italic ">
                  Service
                </p>
                <ul>
                  <li className="lg:pb-[24px] ">
                    <a
                      href=""
                      className="text-base font-normal relative font-ff-inter leading-[32px] not-italic text-[#e6e6e6]  before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Domain{" "}
                    </a>
                  </li>
                  <li className="lg:pb-[24px]">
                    <a
                      href=""
                      className="text-base font-normal font-ff-inter leading-[32px] not-italic text-[#e6e6e6] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Shared Hosting{" "}
                    </a>
                  </li>
                  <li className="lg:pb-[24px]">
                    <a
                      href=""
                      className="text-base font-normal font-ff-inter leading-[32px] not-italic text-[#e6e6e6] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Cloud Hosting
                    </a>
                  </li>
                  <li className="lg:pb-[24px]">
                    <a
                      href=""
                      className="text-base font-normal font-ff-inter leading-[32px] not-italic text-[#e6e6e6] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Private Hosting
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-1/2 xs_1:w-4/12 sm:w-3/12 px-3 pb-4 xs_1:pb-0">
                <p className="text-base font-bold text-white pb-2 sm:pb-[15px] lg:pb-[24px] font-ff-inter leading-[24px] not-italic ">
                  Hosting
                </p>
                <ul>
                  <li className="lg:pb-[24px] ">
                    <a
                      href=""
                      className="text-base font-normal relative font-ff-inter leading-[32px] not-italic text-[#e6e6e6]  before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Cheap Hosting{" "}
                    </a>
                  </li>
                  <li className="lg:pb-[24px]">
                    <a
                      href=""
                      className="text-base font-normal font-ff-inter leading-[32px] not-italic text-[#e6e6e6] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Hosting Wordpress{" "}
                    </a>
                  </li>
                  <li className="lg:pb-[24px]">
                    <a
                      href=""
                      className="text-base font-normal font-ff-inter leading-[32px] not-italic text-[#e6e6e6] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Email Hosting
                    </a>
                  </li>
                  <li className="lg:pb-[24px]">
                    <a
                      href=""
                      className="text-base font-normal font-ff-inter leading-[32px] not-italic text-[#e6e6e6] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Hosting Unlimited
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 xs_1:w-4/12 sm:w-3/12 px-3 flex flex-col xs_1:items-center ">
                <p className="text-base font-bold text-white pb-2 sm:pb-[15px] lg:pb-[24px] font-ff-inter leading-[24px] not-italic ">
                  Company
                </p>
                <ul>
                  <li className="lg:pb-[24px]">
                    <a
                      href=""
                      className="text-base font-normal font-ff-inter leading-[32px] not-italic text-[#e6e6e6] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      About
                    </a>
                  </li>
                  <li className="lg:pb-[24px]">
                    <a
                      href=""
                      className="text-base font-normal font-ff-inter leading-[32px] not-italic text-[#e6e6e6] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Career
                    </a>
                  </li>
                  <li className="lg:pb-[24px]">
                    <a
                      href=""
                      className="text-base font-normal font-ff-inter leading-[32px] not-italic text-[#e6e6e6] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 xs_1:w-4/12 sm:w-3/12 px-3 flex flex-col md:items-center">
                <p className="text-base font-bold md:ms-[-53px] flex items-start text-start text-white pb-2 sm:pb-[15px] lg:pb-[24px] font-ff-inter leading-[24px] not-italic ">
                  Help
                </p>
                <ul>
                  <li className="lg:pb-[24px] ">
                    <a
                      href=""
                      className="text-base font-normal relative font-ff-inter leading-[32px] not-italic text-[#e6e6e6]  before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      FAQ{" "}
                    </a>
                  </li>
                  <li className="lg:pb-[24px]">
                    <a
                      href=""
                      className="text-base font-normal font-ff-inter leading-[32px] not-italic text-[#e6e6e6] relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-white before:contents'' hover:before:w-full hover:before:right-0"
                    >
                      Help support{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className=" text-[12px] sm:text-base pb-[30px] lg:pb-[80px] flex font-normal font-ff-inter text-[#FFF] md:pt-[44px] not-italic  ">
          Built by Jeremiah with <Heart /> in Lagos. Copyright 2024
        </p>
      </div>
    </div>
  );
};

export default My_footer;
