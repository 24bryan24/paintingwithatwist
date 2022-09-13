import "./Hero.css"
import React from 'react'
import SearchBar from "./SearchBar";
import searchIcon from "../assets/searchIcon.svg";


const Hero = () => {
  return (
    <div>
      <div className="w-full h-[61px] medium:h-[66px] bg-[#7C2855] large:hidden">
        <div className="w-full h-full flex items-center">
          <p className="font-Montserrat text-[14px] text-white font-normal mb-4 w-32 px-4 my-auto min-w-[25%]">
            Find an event near you.
          </p>

          {/* Input Box */}
          <div className="flex items-center">
            <div className="w-[644px] min-w-[5%] bg-white h-[45px] medium:h-[50px] flex justify-start items-center mr-6">
              <img
                className="w-6 h-6 ml-2"
                src="https://static.thenounproject.com/png/389295-200.png"
                alt="/"
              />
              <input
                className="ml-2 text-slate-900 text-[18px] font-thin w-full outline-none"
                placeholder="Willow Grove, Pennsylvania"
              />
              <div className="flex justify-center items-center ml-auto">
                <p className="hover:text-black cursor-pointer text-red-600  text-[13px]">
                  Use my location
                </p>
                <img
                  className="w-20 h-20 cursor-pointer"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtMzc2IDMyNC4zOGMtMjguNDE0IDAtNTEuNjIxIDIzLjIwNy01MS42MjEgNTEuNjIxIDAuMDAzOTA2IDI4LjQxNCAyMy4yMDcgNTEuNjE3IDUxLjYyMSA1MS42MTcgMjguNDE4IDAgNTEuNjIxLTIzLjIwMyA1MS42MjEtNTEuNjIxIDAtMjguNDE0LTIzLjIwMy01MS42MTctNTEuNjIxLTUxLjYxN3ptMCA4NC4yOTdjLTE3Ljk5NiAwLTMyLjY3Ni0xNC42OC0zMi42NzYtMzIuNjc2czE0LjY4LTMyLjY3NiAzMi42NzYtMzIuNjc2IDMyLjY3NiAxNC42OCAzMi42NzYgMzIuNjc2YzAuMDAzOTA3IDE3Ljk5Mi0xNC42OCAzMi42NzYtMzIuNjc2IDMyLjY3NnptMTMyLjYxLTQyLjE0OGgtOS40NzI3Yy00LjczNDQtNjAuNjE3LTUzLjA0My0xMDguOTItMTEzLjY2LTExMy42NnYtOS40NzI3YzAtNS4yMTA5LTQuMjYxNy05LjQ3MjctOS40NzI3LTkuNDcyN3MtOS40NzI3IDQuMjYxNy05LjQ3MjcgOS40NzI3djkuNDcyN2MtNjAuNjE3IDQuNzM0NC0xMDguOTIgNTMuMDQzLTExMy42NiAxMTMuNjZoLTkuNDcyN2MtNS4yMTA5IDAtOS40NzI3IDQuMjYxNy05LjQ3MjcgOS40NzI3IDAgNS4yMTA5IDQuMjYxNyA5LjQ3MjcgOS40NzI3IDkuNDcyN2g5LjQ3MjdjNC43MzQ0IDYwLjYxNyA1My4wNDMgMTA4LjkyIDExMy42NiAxMTMuNjZ2OS40NzI3YzAgNS4yMTA5IDQuMjYxNyA5LjQ3MjcgOS40NzI3IDkuNDcyN3M5LjQ3MjctNC4yNjE3IDkuNDcyNy05LjQ3Mjd2LTkuNDcyN2M2MC42MTctNC43MzQ0IDEwOC45Mi01My4wNDMgMTEzLjY2LTExMy42Nmg5LjQ3MjdjNS4yMTA5IDAgOS40NzI3LTQuMjYxNyA5LjQ3MjctOS40NzI3LTAuMDAzOTA2LTUuMjEwOS00LjI2NTYtOS40NzI3LTkuNDcyNy05LjQ3Mjd6bS02MS4wOTQgMTguOTQxaDMyLjY3NmMtNC43MzQ0IDUwLjE5OS00NC41MTYgODkuOTgtOTQuNzE1IDk0LjcxNXYtMzIuNjc2YzAtNS4yMTA5LTQuMjYxNy05LjQ3MjctOS40NzI3LTkuNDcyN3MtOS40NzI3IDQuMjYxNy05LjQ3MjcgOS40NzI3bDAuMDAzOTA2IDMyLjY3NmMtNTAuMTk5LTQuNzM0NC04OS45OC00NC41MTYtOTQuNzE1LTk0LjcxNWgzMi42NzZjNS4yMTA5IDAgOS40NzI3LTQuMjYxNyA5LjQ3MjctOS40NzI3cy00LjI2MTctOS40NzI3LTkuNDcyNy05LjQ3MjdsLTMyLjY4IDAuMDAzOTA2YzQuNzM0NC01MC4xOTkgNDQuNTE2LTg5Ljk4IDk0LjcxNS05NC43MTV2MzIuNjc2YzAgNS4yMTA5IDQuMjYxNyA5LjQ3MjcgOS40NzI3IDkuNDcyN3M5LjQ3MjctNC4yNjE3IDkuNDcyNy05LjQ3Mjd2LTMyLjY4YzUwLjE5OSA0LjczNDQgODkuOTggNDQuNTE2IDk0LjcxNSA5NC43MTVoLTMyLjY3NmMtNS4yMTA5IDAtOS40NzI3IDQuMjYxNy05LjQ3MjcgOS40NzI3czQuMjY1NiA5LjQ3MjcgOS40NzI3IDkuNDcyN3oiLz4KPC9zdmc+Cg=="
                  alt="/"
                />
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="bg-[#009FAB] w-[120px] h-[40px] flex items-center justify-center hover:bg-slate-600 cursor-pointer">
            <img className="w-5 h-5 mr-2" src={searchIcon} alt='/' />
            <p className="uppercase text-white font-bold">Search</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[580px] relative">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1580196969807-cc6de06c05be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fHBhaW50aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="/"
        />

        {/* Black Cover with Text Centered */}
        <div className="w-full h-full bg-black/70 absolute left-0 top-0 flex flex-col text-white justify-center items-center pt-8">
          <div className="flex justify-center items-center h-[100px] pt-12">
            <p className="font-Allura text-[150px] mr-4">Twist</p>
            <div>
              <p className="font-Montserrat text-[36px] font-light uppercase pt-8">
                Things Up
              </p>
            </div>
          </div>
          <p className="font-Montserrat text-[26px] pt-8">
            Get creative with us!
          </p>
        </div>

        <SearchBar />
      </div>
    </div>
  );
}

export default Hero