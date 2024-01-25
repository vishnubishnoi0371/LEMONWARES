import React, { useEffect, useState } from "react";
import cloud1 from "../Assets/images/cloud-1.webp";
import cloud2 from "../Assets/images/cloud-2.webp";
import cloud3 from "../Assets/images/cloud-3.webp";
import cloud4 from "../Assets/images/cloud-4.webp";
import cloud5 from "../Assets/images/cloud-5.webp";
import cloud6 from "../Assets/images/cloud-6.webp";
import { True1, True2, True3, True4 } from "../common_svg/icon";
import AOS from "aos";
import "aos/dist/aos.css";
const mycardinfo = [
  {
    aos: "fade-right",
    svg: <True1 />,
    name: "99.9% Uptime",
  },
  {
    aos: "fade-right",
    svg: <True2 />,
    name: "Blazing Fast Web Hosting",
  },
  {
    aos: "fade-left",
    svg: <True3 />,
    name: "Free SSL Certificates",
  },
  {
    aos: "fade-left",
    svg: <True4 />,
    name: "24x7 Friendly Support",
  },
];

const True_cloud = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);
  const [first, setfirst] = useState();
  function index(first) {
    setfirst(!first);
  }
  const mycard = mycardinfo.map((mycard) => (
    <div className="xs_1:w-1/2 md:w-1/3 lg:w-3/12 px-3 pt-5 overflow-hidden">
      <div
        className={`${
          index === 1 ? "max-w-[260px]" : ""
        } max-w-[252px] mx-auto flex justify-center flex-col`}
        data-aos={mycard.aos}
      >
        <div className="flex items-center justify-center">{mycard.svg}</div>
        <p className="text-xl  font-bold font-ff-pop text-nowrap leading-[normal] text-center text-[#000] pt-3 pb-1">
          {mycard.name}
        </p>
        <div className="flex items-center justify-center">
          <p className="text-[12px] font-[300] font-ff-pop leading-[normal] max-w-[252px] text-center text-[$000]">
            We Keep Your Web build Online 24x7x365. Downtime not only costs you
            lost visitors but also damages your reputation and search engine
            rankings.
          </p>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div
        id="About"
        className="max-w-[1285px] px-3 mx-auto py-[30px] sm:pt-[79px] sm:pb-[50px] "
      >
        <div className="flex flex-row items-center justify-center flex-wrap  -mx-3 overflow-hidden ">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="md:w-1/2 lg:w-7/12 px-3"
          >
            <h2 className="font-ff-inter text-center md:text-start text-[30px] lg:text-[48px] mb-4 lg:mb-7 font-extrabold leading-[45px] lg:leading-[64px] text-[#18191f]">
              True Cloud Web Hosting
            </h2>
            <p className=" text-[16px] mb-4 text-center md:text-start lg:text-lg font-ff-inter font-normal md:max-w-[573px] leading-[25px] lg:leading-[32px] text-[#18191f]">
              True Cloud Web Hosting All of the hosting packages we offer are
              deployed instantly on our SSD powered cloud. We don’t use
              dedicated servers that operate on single pieces of hardware. Our
              entire infrastructure is built to be reliable, secure, and
              scalable.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="md:w-1/2 lg:w-5/12 px-3"
          >
            <div className="flex flex-row items-center justify-center  flex-wrap  -mx-3 ">
              <div className="w-1/2 xs_1:w-1/3 md:w-1/2 lg:w-1/3 px-3  mx-auto lg:pb-[55px]">
                <img
                  className="max-w-[140px] max-h-[30px]"
                  src={cloud1}
                  alt="#"
                />
              </div>
              <div className="w-1/2 xs_1:w-1/3 md:w-1/2 lg:w-1/3 px-3  mx-auto lg:pb-[55px]">
                <img
                  className="max-w-[125px] max-h-[50px]"
                  src={cloud2}
                  alt="#"
                />
              </div>
              <div className="w-1/2 xs_1:w-1/3 md:w-1/2 lg:w-1/3 px-3  mx-auto lg:pb-[55px]">
                <img
                  className="max-w-[125px] max-h-[53px]"
                  src={cloud3}
                  alt="#"
                />
              </div>
              <div className="w-1/2 xs_1:w-1/3 md:w-1/2 lg:w-1/3 px-3  mx-auto">
                <img
                  className="max-w-[172px] max-h-[72px] md:max-h-[92px]"
                  src={cloud4}
                  alt="#"
                />
              </div>
              <div className="w-1/2 xs_1:w-1/3 md:w-1/2 lg:w-1/3 px-3  mx-auto">
                <img
                  className="max-w-[168px] max-h-[56px]"
                  src={cloud5}
                  alt="#"
                />
              </div>
              <div className="w-1/2 xs_1:w-1/3 md:w-1/2 lg:w-1/3 px-3  mx-auto">
                <img
                  className="max-w-[143px] max-h-[47px]"
                  src={cloud6}
                  alt="#"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center flex-wrap pt-[40px] lg:pt-[90px] -mx-3 ">
          {mycard}
        </div>
      </div>
    </div>
  );
};

export default True_cloud;
