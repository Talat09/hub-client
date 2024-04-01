import React from "react";
import Counter from "../Shared/Counter/Counter";
import { FaUserAlt, FaCommentAlt, FaDollarSign, FaTools } from "react-icons/fa";

const BusinessSummary = () => {
  return (
    <div className="max-w-7xl mx-auto mb-20 lg:px-10 mt-6">
      <div className="flex justify-center items-center gap-5 md:gap-10 mt-14 px-6">
        <h2 className="text-2xl md:text-3xl text-center uppercase font-semibold text-primary">
          Our Statistics At A Glance
        </h2>
      </div>
      <p p className="w-fit mx-auto text-gray-400">
        Get Insight
      </p>
      <hr className="border-primary w-20 h-[1px] mx-auto" />
      <hr className="border-primary w-16 h-[1px] mx-auto mt-1" />
      <hr className="border-primary w-12 h-[1px] mx-auto mt-1" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 my-14 md:mt-16 md:mb-24 md:px-24 text-center">
        <div>
          <FaUserAlt className="w-12 h-12 text-xl text-secondary bg-primary mx-auto  rounded-full p-3"></FaUserAlt>
          <p className="uppercase text-md font-[600] mt-2">Served Customer</p>
          <hr className="block mx-auto mt-2 h-[3px] w-24 bg-primary border-none" />
          <Counter end="380">
            <span>+</span>
          </Counter>
        </div>
        <div>
          <FaDollarSign className="w-12 h-12 text-xl text-secondary bg-primary mx-auto rounded-full p-3"></FaDollarSign>
          <p className="uppercase text-md font-[600] mt-2">Annual Revenue</p>
          <hr className="block mx-auto mt-2 h-[3px] w-24 bg-primary border-none" />
          <Counter end="150">
            <span>m+</span>
          </Counter>
        </div>
        <div>
          <FaCommentAlt className="w-12 h-12 text-xl text-secondary bg-primary mx-auto rounded-full p-3"></FaCommentAlt>
          <p className="uppercase text-md font-[600] mt-2">Total Reviews</p>
          <hr className="block mx-auto mt-2 h-[3px] w-24 bg-primary border-none" />
          <Counter end="1150">
            <span>+</span>
          </Counter>
        </div>
        <div>
          <FaTools className="w-12 h-12 text-xl text-secondary bg-primary mx-auto  rounded-full p-3"></FaTools>
          <p className="uppercase text-md font-[600] mt-2">
            Parts Manufacturing
          </p>
          <hr className="block mx-auto mt-2 h-[3px] w-24 bg-primary border-none" />
          <Counter end="60">
            <span>+</span>
          </Counter>
        </div>
      </div>
      <hr className="border-[#363C45] h-[1px]" />
    </div>
  );
};

export default BusinessSummary;
