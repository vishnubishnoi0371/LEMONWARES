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
    }, 2500);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div>
      <div
        className="preloader min-h-full z-50 min-w-full flex items-center justify-center  bg-gradient-to-r from-[#243040] to-[#8C939B] fixed top-0 start-0"
        style={{ display: Load ? "none" : "block", zIndex: 80 }}
      >
        <div class="waviy relative text-[40px] md:text-[60px] flex justify-center items-center m-auto h-screen">
          <span className="--i:1 inline-block relative text-white uppercase">F</span>
          <span className="--i:2 inline-block relative text-white uppercase">U</span>
          <span className="--i:3 inline-block relative text-white uppercase">R</span>
          <span className="--i:4 inline-block relative text-white uppercase">N</span>
          <span className="--i:5 inline-block relative text-white uppercase">I</span>
          <span className="--i:7 inline-block relative text-white uppercase">T</span>
          <span className="--i:8 inline-block relative text-white uppercase">U</span>
          <span className="--i:9 inline-block relative text-white uppercase">R</span>
          <span className="--i:10 inline-block relative text-white uppercase">E</span>
        </div>
      </div>
    </div>
  );
};

export default Preload;
