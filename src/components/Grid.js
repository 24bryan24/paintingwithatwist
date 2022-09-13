import React, { useState } from 'react'
import CardComponent from './CardComponent';
import doubleArrow from '../assets/doubleArrow.svg'
import arrowDown from '../assets/arrowDown.svg'
import arrowUp from '../assets/arrowUp.svg'

const Grid = () => {

  const [hovering, setHovering] = useState(false)

  const handleHover = () => {
    setHovering(prev => !prev)
  }

  const [loadMoreHover, setLoadMoreHover] = useState(false)
  const [loadMoreClick, setLoadMoreClick] = useState(false)

  const handleLoadMoreHover = () => {
    setLoadMoreHover(prev => !prev)
  }

  const handleLoadMoreClick = () => {
    setLoadMoreClick(prev => !prev)
  }
  

  return (
    <div className="w-full bg-white text-[40px] font-Montserrat text-[#7C2885]">
      <div className="w-full h-[120px]" />
      <div className="w-full h-[200px] flex justify-center items-center uppercase">
        <p>
          Create Some
          <span className="font-Allura text-[60px] mx-4">Colorful</span>
          Memories
        </p>
      </div>

      <div className="flex justify-center items-center mb-10">
        {/* Image Card with Text Grid */}
        <div className="w-[95.5%] large:w-[87.5%] grid grid-cols-1 medium:grid-cols-2 gap-5 large:gap-10">
          {/* First Grid Item */}
          <div className="w-full large:w-full mb-1 medium:col-span-2">
            <div className="w-full box-border flex flex-col justify-center items-center cursor-pointer">
              <img
                className="w-full"
                src="https://6f5295793b132e9764f4-3f2730cf5c1e4ad5dfe76e6d27af2964.ssl.cf5.rackcdn.com/franchise-288.jpg"
                alt="/"
              />
              <div className="border-b-[1px] border-l-[1px] border-r-[1px] border-gray-500 h-[200px]">
                <div className="mx-6">
                  <p className="my-2 font-bold text-[24px] font-Montserrat text-[#7C2885]">
                    Paint Your Pet to Help a Vet
                  </p>
                  <p className="text-[#75787B] text-[16px] font-Montserrat">
                    September is National Service Dog Month and we've partnered
                    with the Dogtopia Foundation to provide service dogs for
                    veterans! 50% of our Painting with a Purpose Paint Your Pet
                    events in the month of September will be donated to the
                    foundation. Find a participating studio!
                  </p>
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
          </div>

          <div className="">
            <CardComponent
              src="https://www.paintingwithatwist.com/images/event-types/event-type_girls-night.jpg"
              heading="Girls Night"
              body="Sick of the bar scene? Gather your best girls for an unforgettable night with paint, wine & lots of laughs."
            />
          </div>

          <div className="">
            <CardComponent
              src="https://www.paintingwithatwist.com/images/event-types/event-type_date-night.jpg"
              heading="Date Night"
              body="Skip dinner & and movie! Rekindle the spontaneity with a paint date with your partner."
            />
          </div>

          <div className="">
            <CardComponent
              src="https://www.paintingwithatwist.com/images/event-types/event-type_trivia.jpg"
              heading="Trivia Night"
              body="From wizards and zombies to space nights and 90s coffeehouse trivia, you can find a theme night you and your friends will love. Cheers to a little friendly competition!"
            />
          </div>

          <div className="">
            <CardComponent
              src="https://www.paintingwithatwist.com/images/event-types/event-type_paint-your-pet.jpg"
              heading="Paint Your Pet"
              body="Your furry (or scaly) friends deserve some love, too! Turn your pet’s photo into a portrait with step-by-step instruction from our amazing artists."
            />
          </div>

          {loadMoreClick && (
            <>
              <div className="">
                <CardComponent
                  src="https://www.paintingwithatwist.com/images/event-types/event-type_bachelorette.jpg"
                  heading="Bachelorette Parties"
                  body="Add a twist to the tried-and-true bachelorette party festivities with a night of painting, sipping and bonding for the I Do Crew!"
                />
              </div>

              <div className="">
                <CardComponent
                  src="https://www.paintingwithatwist.com/images/event-types/event-type_teambuilding.jpg"
                  heading="Team Building"
                  body="We specialize in not-so-corporate events to give your whole team a boost. They won’t call in sick for this one!"
                />
              </div>

              <div className="">
                <CardComponent
                  src="https://www.paintingwithatwist.com/images/event-types/event-type_family-day.jpg"
                  heading="Family Day"
                  body="Bring your whole crew for a unique family outing they’ll never forget. You focus on quality time & we’ll handle the rest!"
                />
              </div>

              <div className="">
                <CardComponent
                  src="https://www.paintingwithatwist.com/images/event-types/event-type_kids-camp.jpg"
                  heading="Kids Events"
                  body="https://www.paintingwithatwist.com/images/event-types/event-type_kids-camp.jpg"
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Load More */}
      <div className="w-full h-100 flex justify-center items-center">
        <div
          onClick={handleLoadMoreClick}
          onMouseEnter={handleLoadMoreHover}
          onMouseLeave={handleLoadMoreHover}
          className="cursor-pointer relative flex flex-col justify-center items-center border-b-[0.5px] border-slate-600/90 w-[500px] h-[111px]"
        >
          {loadMoreClick && (
            <img
              className={
                loadMoreHover
                  ? "absolute top-0 duration-300 left-[46%] scale-75"
                  : "absolute top-1 duration-300 left-[46%] scale-75"
              }
              src={arrowUp}
            />
          )}
          <div className="flex justify-center items-center">
            <p className="font-Montserrat text-[22px] font-light uppercase text-[#7C2885]">
              Load{" "}
              <span className="lowercase font-Allura text-[52px]">{loadMoreClick ? 'Less' : 'More'}</span>
            </p>
          </div>
          {!loadMoreClick && (
            <img
              className={
                loadMoreHover
                  ? "absolute bottom-0 duration-300 left-[46%] scale-75"
                  : "absolute bottom-1 duration-300 left-[46%] scale-75"
              }
              src={arrowDown}
            />
          )}
        </div>
      </div>
      
    </div>
  );
}

export default Grid