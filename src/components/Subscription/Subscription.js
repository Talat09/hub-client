import React from "react";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { FaArrowCircleRight } from "react-icons/fa";
const Subscription = () => {
  return (
    <div className="max-w-7xl mx-auto mb-20 px-6 lg:px-10 border-t-[1px] border-primary">
      <p className="text-sm text-primary uppercase text-center mt-20 font-bold">
        special offer <span className="text-[#5A6069]">for subscribers</span>
      </p>
      <p className="text-lg text-center uppercase font-bold tracking-widest my-2">
        ten percent membership discount
      </p>
      <p className="text-xs text-center tracking-wider my-4 text-[#5A6069]">
        You may unsubscribe at any moment. For that purpose, please find our
        contact info in the legal notice.
      </p>
      <form className="flex justify-center items-center md:w-1/2 mx-auto my-14 md:my-20 relative">
        <input
          type="text"
          placeholder="Your email"
          className="bg-white text-white outline-primary border border-gray-500 p-4 pl-8 rounded-full w-full text-sm"
        />
        <button className="bg-secondary text-primary  rounded-full absolute right-1">
          <FaArrowCircleRight className="w-12 h-12 "></FaArrowCircleRight>
        </button>
      </form>
    </div>
  );
};

export default Subscription;
