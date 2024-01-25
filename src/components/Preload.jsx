import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Preload = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 3000,
    });
  }, []);
  const [Load, setLoad] = useState(false);
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoad(true);
      document.body.style.overflow = "";
    }, 3500);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div>
      <div
        data-aos="zoon-in"
        data-aos-duration="2500"
        className="preloader min-h-full z-50 min-w-full flex items-center justify-center bg-[#f3d9d9]  fixed top-0 start-0"
        style={{ display: Load ? "none" : "block", zIndex: 80 }}
      >
        <div class="waviy relative text-[40px] md:text-[120px] flex justify-center items-center m-auto h-screen">
          <div
            data-aos="zoon-in"
            data-aos-duration="2000"
            class="loader before:text-[#0000] before:content'LEMON_WARES' before:bg-inherit before:bg-clip-text font-semibold md:font-bold text-[30px] md:text-[50px] lg:text-[110px] font-ff-pop"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Preload;
