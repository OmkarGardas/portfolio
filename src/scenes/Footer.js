import React, { useEffect } from "react";
import "../scenes/slider.css";
import anime from "animejs";

const Footer = () => {

  return (
    <div className="py-3">
      <div className="border-y-2 border-gray-300 text-white hover:text-red ">
        <a href="mailto:omkargardas23@gmail.com">
          <div className="flex flex-row item-center justify-center space-x-3 slide-text">
            <h2 className="text-[30px] md:text-[30px] font-bold">THE</h2>
            <h2 className="text-[30px] md:text-[30px] font-bold">END</h2>
            <h2 className="text-[30px] md:text-[30px] font-bold">IS</h2>
            <h2 className="text-[30px] md:text-[30px] font-bold">THE</h2>
            <h2 className="text-[30px] md:text-[30px] font-bold">NEW</h2>
            <h2 className="text-[30px] md:text-[30px] font-bold">BEGINNING</h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
