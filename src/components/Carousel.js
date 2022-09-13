import React, { useEffect, useState } from 'react'

const photoList = [
  {
    src: "https://images.unsplash.com/photo-1510832842230-87253f48d74f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "Elaine H.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit pariatur facere minus amet est accusantium vel molestiae dolor earum ut itaque labore quasi hic, ex rerum quas placeat nisi nemo.",
  },
  {
    src: "https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFpbnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "Donnie H.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit pariatur facere minus amet est accusantium vel molestiae dolor earum ut itaque labore quasi hic, ex rerum quas placeat nisi nemo.",
  },
  {
    src: "https://images.unsplash.com/photo-1615339725569-80172615f345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBhaW50aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: "Bryan H.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit pariatur facere minus amet est accusantium vel molestiae dolor earum ut itaque labore quasi hic, ex rerum quas placeat nisi nemo.",
  },
];

const Carousel = ({ name, src }) => {

    const [index, setIndex] = useState(0)

    const cycleIndexAuto = () => {
        setIndex(prev => {
            if(prev === photoList.length - 1) {
                return 0
            } else {
            return prev + 1
        }
    })
}

    const cycleIndex = (num) => {
        setIndex(num)
}

useEffect(() => {
    setTimeout(() => {
        cycleIndexAuto()
    }, 3000)
},[index])

  return (
    <div className="w-full mt-20">
      {/* Picture and Testimonial */}
      <div className="w-full h-[536px] flex justify-center items-center">
        <div className="w-[95.5%] large:w-[85%] h-full flex justify-center items-center bg-blue-300 overflow-hidden">
          <img className="w-[50%]" src={photoList[index].src} />

          <div className="bg-[#38101a] w-[50%] h-full flex flex-col justify-center">
            <div className="flex items-center pl-8">
              <p className="font-Allura text-[72px] text-white mr-1">Twist</p>
              <p className="uppercase text-[24px] text-white font-thin">
                a-monials
              </p>
            </div>

            <div className="font-Montserrat text-white pl-14">
              <p className="text-[20px] font-bold">{photoList[index].name}</p>
              <p className="text-[16px]">"{photoList[index].text}"</p>
            </div>
          </div>
        </div>
      </div>
{/* Hover Ball for changing photo */}
      <div className="w-full py-8 flex justify-center items-center gap-3">
        <div onClick={() => cycleIndex(0)} className="w-6 h-6 bg-slate-400 rounded-full flex justify-center items-center">
          <div className="w-5 h-5 bg-white hover:bg-slate-400 duration-300 rounded-full"></div>
        </div>
        <div onClick={() => cycleIndex(1)} className="w-6 h-6 bg-slate-400 rounded-full flex justify-center items-center">
          <div className="w-5 h-5 bg-white hover:bg-slate-400 duration-300 rounded-full"></div>
        </div>
        <div onClick={() => cycleIndex(2)} className="w-6 h-6 bg-slate-400 rounded-full flex justify-center items-center">
          <div className="w-5 h-5 bg-white hover:bg-slate-400 duration-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Carousel