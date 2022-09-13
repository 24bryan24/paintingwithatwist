import React, { useState } from 'react'
import './Hamburger.css'

const active = {
  top: "rotate-45 translate-y-[0.46rem]",
  middle: "invisible",
  bottom: "-rotate-45 -translate-y-[0.46rem]",
};

const Hamburger = ({handleClick, state}) => {

  return (
    <div onClick={handleClick} className="w-[30px] h-[20px] mr-4 cursor-pointer large:invisible hover:[active]">
      <div className={`bg-[#75787B] w-full h-[15%] bg-black mb-[4px] duration-200 ${state && active.top}`}></div>
      <div className={`bg-[#75787B] w-full h-[15%] bg-black mb-[4px] ${state && active.middle}`}></div>
      <div className={`bg-[#75787B] w-full h-[15%] bg-black mt-[4px] duration-200 ${state && active.bottom}`}></div>
    </div>
  );
}

export default Hamburger