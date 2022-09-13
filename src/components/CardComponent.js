import React, { useState } from 'react'
import doubleArrow from "../assets/doubleArrow.svg";


const CardComponent = ({ src, heading, body}) => {
  const [hovering, setHovering] = useState(false);

  const handleHover = () => {
    setHovering((prev) => !prev);
  };
  return (
    <div className="w-full box-border flex flex-col justify-center items-center cursor-pointer">
      <img className="w-full" src={src} alt="/" />
      <div className="border-b-[1px] border-l-[1px] border-r-[1px] border-gray-500 h-[200px]">
        <div className="mx-6">
          <p className="my-2 font-bold text-[24px] font-Montserrat text-[#7C2885]">
            {heading}
          </p>
          <p className="text-[#75787B] text-[16px] font-Montserrat">{body}</p>
        </div>

        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          className="w-full h-[50px] flex justify-end items-center cursor-pointer mt-[30px]"
        >
          <p className="text-[14px] font-bold uppercase mr-1 text-[#C11271]">
            Learn More
          </p>
          <img
            className={
              hovering
                ? "w-3 h-3 mr-4 translate-x-1 duration-300"
                : "w-3 h-3 duration-300 mr-4"
            }
            src={doubleArrow}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}

export default CardComponent