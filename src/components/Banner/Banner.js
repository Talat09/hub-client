import React from "react";
import "./Banner.css";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className=" bg-[#025364]  font-style py-8 bannerGround">
      <div className="max-w-[1440px]  mx-auto py-16 md:h-[700px]">
        <div className="flex justify-center items-center mx-auto">
          <div className="mt-32">
            <h1 className="text-4xl md:text-5xl font-semibold  text-white text-center">
              Empowering Your
              <span className="text-secondary "> Work with Quality</span> Tools
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-white text-center mt-6">
              Discover a World of Quality Tools for Every Task
            </p>
            <p className="text-base md:text-3xl mt-6 text-white font-semibold  text-center">
              We Offer
              <span className="text-secondary">
                <Typewriter
                  words={[" Bike Tools", " Bike  Parts"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
