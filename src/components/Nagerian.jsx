import React, { useEffect } from "react";
import over1 from "../Assets/images/over-1.webp";
import over2 from "../Assets/images/over-2.webp";
import over3 from "../Assets/images/over-3.webp";
import over4 from "../Assets/images/over-4.webp";
import over5 from "../Assets/images/over-5.webp";
import over6 from "../Assets/images/over-6.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const Nagerian = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div>
      <div className="max-w-[1195px] px-3 mx-auto xl:pb-[30px] pt-[30px] lg:py-[50px] ">
        <div className="flex flex-row items-center justify-between flex-wrap  -mx-3 overflow-hidden">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="md:w-1/2 lg:w-6/12 px-3"
          >
            <h2 className="font-ff-inter text-center md:text-start text-[35px] lg:text-[48px] pb-2 font-extrabold leading-[45px] lg:leading-[64px] text-[#18191f]">
              We serve over 100 Nigerian Websites{" "}
            </h2>
            <div className="flex items-center justify-center md:justify-start">
              <p className="text-lg font-ff-inter text-center md:text-start font-normal max-w-[445px]  leading-[32px] self-stretch text-[#18191f]">
                Connect LemonWares with your favourite tools that you use daily
                and keep things on track.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="md:w-1/2 lg:w-6/12 px-3"
          >
            <div className="flex flex-row items-center justify-center flex-wrap  -mx-3 ">
              <div className="w-1/3 xs_1:w-1/6  md:w-1/3 px-3 ">
                <img
                  className="md:w-[120px] md:h-[120px] w-[90px] h-[90px]"
                  src={over1}
                  alt="#"
                />
              </div>
              <div className="w-1/3 xs_1:w-1/6  md:w-1/3 px-3 ">
                <img
                  className="md:w-[120px] md:h-[120px] w-[90px] h-[90px]"
                  src={over2}
                  alt="#"
                />
              </div>
              <div className="w-1/3 xs_1:w-1/6  md:w-1/3 px-3 ">
                <img
                  className="md:w-[120px] md:h-[120px] w-[90px] h-[90px]"
                  src={over3}
                  alt="#"
                />
              </div>
              <div className="w-1/3 xs_1:w-1/6  md:w-1/3 px-3 mt-[-30px] md:mt-[-15px] lg-[mt-0] xs_1:mt-0">
                <img
                  className="md:w-[120px] md:h-[120px] w-[90px] h-[90px]"
                  src={over4}
                  alt="#"
                />
              </div>
              <div className="w-1/3 xs_1:w-1/6  md:w-1/3 px-3 mt-[-30px] md:mt-[-15px] lg-[mt-0] xs_1:mt-0">
                <img
                  className="md:w-[120px] md:h-[120px] w-[90px] h-[90px]"
                  src={over5}
                  alt="#"
                />
              </div>
              <div className="w-1/3 xs_1:w-1/6  md:w-1/3 px-3 mt-[-30px] md:mt-[-15px] lg-[mt-0] xs_1:mt-0">
                <img
                  className="md:w-[120px] md:h-[120px] w-[90px] h-[90px]"
                  src={over6}
                  alt="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nagerian;
