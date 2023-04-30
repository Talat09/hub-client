import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#131111d0]">
      <div className="flex flex-col md:flex-row justify-between gap-5 px-6 md:px-10 lg:px-20 py-8 border-t-[1px] border-[#ffffff14] text-[#c4c3c3] text-sm">
        <p className="text-center">&copy;Copyright 2022 PARTSMASTER</p>
        <div className="flex justify-center gap-5">
          <p>Privacy Policy</p>
          <p>Terms &amp; Conditions</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
