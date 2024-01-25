import React, { useEffect } from "react";
import story1 from "../Assets/images/story-1.webp";
import story2 from "../Assets/images/story-2.webp";
import story3 from "../Assets/images/story-3.webp";
import { Small66, Story_66 } from "../common_svg/icon";
import AOS from "aos";
import "aos/dist/aos.css";
const Stories = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div>
      <div
        id="story"
        className="max-w-[1285px] px-3 mx-auto sm:pt-[50px] md:pt-[0] lg:pt-[50px] overflow-hidden "
      >
        <div className="flex flex-row items-center justify-center flex-wrap  -mx-3 ">
          <div className="sm:w-1/2 px-3">
            <div className="flex flex-col relative ">
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className="sm:flex  sm:flex-col sm:self-end"
              >
                <p className="text-[30px]  text-center md:text-start lg:text-[48px] pt-[40px] self-end font-extrabold pb-2 font-ff-inter leading-[35px] lg:leading-[64px] text-[#18191f] max-w-[465px]">
                  Real Stories from Real Customers
                  <span className="absolute top-[8%] lg:top-[-8%] left-[2%] xl:left-[-18%]">
                    <Story_66 />
                  </span>
                </p>
                <p className="text-lg  text-center md:text-start font-normal leading-[32px] text-[#18191f] font-ff-inter pb-[24px] ">
                  Get inspired by these stories.
                </p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className="shadow-box_sh_2 rounded-[8px] hover:shadow-btn_hv_2 duration-500  self-center sm:self-end max-w-[350px] px-5 lg:px-[32px] bg-[#fff] pt-2 pb-[20px] md:pb-[40px] lg:pb-[96px] mb-[32px] sm:mb-0 "
              >
                <img
                  className="ps-[28px] mb-[-25px] mt-[-28px] md:mt-0 md:mb-0"
                  src={story1}
                  alt=""
                />
                <div className="flex gap-[16px]">
                  <Small66 />
                  <div>
                    <p className="text-[16px] font-ff-inter font-normal leading-[22px] lg:leading-[32px] max-w-[254px] lg:pb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus magna
                      fringilla urna, porttitor rhoncus dolor purus non enim
                      praesent elem
                    </p>
                    <p className="pt-3 text-lg font-ff-inter font-bold leading-[28px] text-[#18191f]">
                      Floyd Miles
                    </p>
                    <p className="text-[14px] font-ff-inter font-medium leading-[24px] text-[#969bab]">
                      Vice President, CLI
                    </p>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="sm:w-1/2 px-3 overflow-hidden md:pt-[40px] ">
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="md:pt-[50px]"
            >
              <div className="shadow-box_sh_2 rounded-[8px] md:mt-[70px] duration-500  hover:shadow-btn_hv_2 max-w-[345px] px-5 lg:px-[32px] pt-2 lg:pt-[40px] bg-[#fff] pb-[14px] mb-[32px] ">
                <img className="ps-[28px] mb-3 md:mb-0" src={story2} alt="" />

                <div className="flex gap-[16px]">
                  <Small66 />
                  <div>
                    {" "}
                    <p className="text-[16px] font-ff-inter font-normal leading-[22px] lg:leading-[32px] max-w-[345px] lg:pb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus magna
                      fringilla urna, porttitor rhoncus dolor purus non enim
                      praesent elem
                    </p>
                    <p className="pt-3 text-lg font-ff-inter font-bold leading-[28px] text-[#18191f]">
                      Jane Cooper
                    </p>
                    <p className="text-[14px] font-ff-inter font-medium leading-[24px] text-[#969bab]">
                      CEO, JPNL{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000">
              <div className="shadow-box_sh_2 mb-4 md:mb-[50px] rounded-[8px] duration-500  hover:shadow-btn_hv_2 max-w-[350px] px-5 lg:px-[32px] pt-3 lg:pt-[41px] bg-[#fff] pb-5 lg:pb-[32px] ">
                <img
                  className="ps-[28px] mt-[-14px] md:mt-0"
                  src={story3}
                  alt=""
                />

                <div className="flex gap-[16px]">
                  <Small66 />
                  <div>
                    <p className="text-[16px] font-ff-inter font-normal leading-[22px] lg:leading-[32px] max-w-[345px] lg:pb-3">
                      LemonWares saved our time in Hosting my company page.
                    </p>
                    <p className="pt-3 text-lg font-ff-inter font-bold leading-[28px] text-[#18191f]">
                      Kristin Watson
                    </p>
                    <p className="text-[14px] font-ff-inter font-medium leading-[24px] text-[#969bab]">
                      Co-Founder, LeeveOn Branding
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
