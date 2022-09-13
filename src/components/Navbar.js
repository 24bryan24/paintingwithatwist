import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import arrowUp from '../assets/arrowUp.svg'
import arrowDown from '../assets/arrowDown.svg'
import Hamburger from './Hamburger'

const navLinkList = [
  { redirect: "/locations", text: "Find a location" },
  { redirect: "/#!", text: "Events" },
  { redirect: "/how-to-throw-a-paint-party", text: "Private Party" },
  { redirect: "/giftcards", text: "Gift Cards" },
  { redirect: "/#", text: "About" },
  { redirect: "https://www.facebook.com/", text: "Franchise" },
];

const Navbar = ({ linkList = navLinkList }) => {

    const [hamburgerClicked, setHamburgerClicked] = useState(false);

    const handleHamburgerClick = () => {
      setHamburgerClicked((prev) => !prev);
    };

    const [arrowEvents, setArrowEvents] = useState(false)
    const [arrowAbout, setArrowAbout] = useState(false)

    const changeEvents = () => {
        setArrowEvents(prev => !prev)
    };

    const changeAbout = () => {
        setArrowAbout(prev => !prev)
    };

    // console.log(arrowView)
  return (
    <div className="w-full h-[68px] large:h-[139px] bg-white flex items-center">
      {/* Image Left */}
      <div className="m-4 h-[60%] large:h-[55%]">
        <img
          className="h-full"
          src="https://www.paintingwithatwist.com/images/logo-main.png"
          alt="/"
        />
      </div>

      {/* Link List */}
      <div className="flex items-center ml-8 font-Montserrat uppercase text-[#75787B] text-[14px] large:text-[16px]">
        <Link
          className="hover:text-red-600 duration-300 mx-4"
          to={linkList[0].redirect}
        >
          {linkList[0].text}
        </Link>
        <div
          onMouseEnter={changeEvents}
          onMouseLeave={changeEvents}
          className="flex justify-center items-center justify-center mx-3 relative"
        >
          <Link
            className="hover:text-red-600 duration-300"
            to={linkList[1].redirect}
          >
            {linkList[1].text}
          </Link>
          <img
            className="cursor-pointer w-8 h-8 text-red-400"
            src={arrowEvents ? arrowUp : arrowDown}
            alt="/"
          />
          {arrowEvents && (
            <div className="z-10 w-[160px] h-[185px] bg-white absolute left-0 top-12 border border-slate-400">
              <div className="uppercase flex flex-col items-left m-[12px] text-[13.75px] m-0">
                <div className="hover:bg-[#a1cbe3] hover:text-red-600 duration-300 px-[12px] py-[8px]">
                  Girls Night
                </div>
                <div className="hover:bg-[#a1cbe3] hover:text-red-600 duration-300 px-[12px] py-[8px]">
                  Date Night
                </div>
                <div className="hover:bg-[#a1cbe3] hover:text-red-600 duration-300 px-[12px] py-[8px]">
                  Trivia Night
                </div>
                <div className="hover:bg-[#a1cbe3] hover:text-red-600 duration-300 px-[12px] py-[8px]">
                  Team Building
                </div>
                <div className="hover:bg-[#a1cbe3] hover:text-red-600 duration-300 px-[10px] py-[8px]">
                  Zen Collection
                </div>
              </div>
            </div>
          )}
        </div>

        <Link
          className="hover:text-red-600 duration-300 m-4 invisible large:visible"
          to={linkList[2].redirect}
        >
          {linkList[2].text}
        </Link>
        <a
          href={linkList[3].redirect}
          className="hover:text-red-600 duration-300 m-3 invisible large:visible"
        >
          {linkList[3].text}
        </a>

        <div
          onMouseEnter={changeAbout}
          onMouseLeave={changeAbout}
          className="flex justify-center items-center mx-3 relative"
        >
          <Link
            className="hover:text-red-600 duration-300 m-3 invisible large:visible"
            to={linkList[4].redirect}
          >
            {linkList[4].text}
          </Link>
          <img
            className="cursor-pointer w-8 h-8 text-red-400 invisible large:visible"
            src={arrowAbout ? arrowUp : arrowDown}
            alt="/"
          />
          {!hamburgerClicked && arrowAbout && (
            <div className="z-10 w-[292px] h-[149px] bg-white absolute left-0 top-12 border border-slate-400">
              <div className="uppercase flex flex-col items-left m-[12px] text-[13.75px] m-0">
                <div className="hover:bg-[#a1cbe3] hover:text-red-600 duration-300 px-[12px] py-[8px]">
                  What is Painting With a Twist?
                </div>
                <div className="hover:bg-[#a1cbe3] hover:text-red-600 duration-300 px-[12px] py-[8px]">
                  Our Story
                </div>
                <div className="hover:bg-[#a1cbe3] hover:text-red-600 duration-300 px-[12px] py-[8px]">
                  Painting with a Purpose
                </div>
                <div className="hover:bg-[#a1cbe3] hover:text-red-600 duration-300 px-[12px] py-[8px]">
                  Blog
                </div>
              </div>
            </div>
          )}
        </div>
        <Link
          className="hover:text-red-600 duration-300 m-3 invisible large:visible"
          to={linkList[5].redirect}
        >
          {linkList[5].text}
        </Link>
      </div>
      <Link
        className="hover:text-blue-800 uppercase duration-300 ml-24 invisible large:visible font-bold text-[#C11271] text-[16px]"
        to="/"
      >
        Rewards
      </Link>
      <Hamburger handleClick={handleHamburgerClick} state={hamburgerClicked} />

      {/* Sliding NavDropdown */}
      <div
        className={
          hamburgerClicked
            ? "w-full min-h-[321px] bg-white absolute top-[4.3rem] left-0 z-10 duration-200 overflow-hidden flex flex-col justify-center items-center"
            : "w-full min-h-[321px] bg-white absolute top-[4.3rem] left-[-100%] z-10 duration-300 overflow-hidden"
        }
      >
        {hamburgerClicked &&
          navLinkList.slice(2).map((item) => {
            if (item.text === "About") {
              return (
                <div className="flex flex-col items-center">
                  <div
                    onMouseEnter={changeAbout}
                    onMouseLeave={changeAbout}
                    className="flex items-center my-4"
                  >
                    <Link
                      className="hover:text-red-600 duration-300 font-Montserrat uppercase text-[14px] ml-6"
                      to={item.redirect}
                    >
                      {item.text}
                    </Link>
                    <img
                      className="cursor-pointer w-8 h-8 text-red-400"
                      src={arrowAbout ? arrowUp : arrowDown}
                      alt="/"
                    />
                  </div>
                  {arrowAbout && (
                    <div className="uppercase flex flex-col font-Montserrat text-[12px] w-full h-[100px] bg-blue-200">
                      <div className="hover:bg-[#a1cbe3] hover:text-red-600 duration-300">
                        What is Painting With a Twist?
                      </div>
                      <div className="hover:bg-[#a1cbe3] hover:text-red-600 duration-300">
                        Our Story
                      </div>
                      <div className="hover:bg-[#a1cbe3] hover:text-red-600 duration-300">
                        Painting with a Purpose
                      </div>
                      <div className="hover:bg-[#a1cbe3] hover:text-red-600 duration-300">
                        Blog
                      </div>
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                <Link
                  className="my-4 font-Montserrat uppercase text-[#75787B] text-[14px] flex flex-col hover:text-red-600 duration-300"
                  to={item.redirect}
                >
                  {item.text}
                </Link>
              );
            }
            
          })}
        <Link
          className="hover:text-blue-800 uppercase duration-300 font-bold text-[#C11271] text-[16px]"
          to="/"
        >
          Rewards
        </Link>
        
      </div>
    </div>
  );
}

export default Navbar