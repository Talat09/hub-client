import React from "react";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="avatar flex justify-center pt-40">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100">
          <img src="https://i.ibb.co/dmqnxys/1681152015415.jpg" alt="person" />
        </div>
      </div>
      <p className="desc  text-center font-mono px-3 mt-4 md:px-0 ">
        I am thoroughly impressed with ToolsMaster's innovative range of biking
        tools. Led by Mohammed Amir Hamja, they provide an effortless experience
        for cyclists of all levels. Their commitment to customer satisfaction is
        unmatched, offering expert advice and prompt assistance. With
        ToolsMaster, I've found top-quality equipment backed by unparalleled
        expertise. It's my go-to destination for all my biking needs.
      </p>
      <p className="text-center mt-10 text-primary uppercase font-mono">
        ~ MOHAMMED AMIR HAMJA ~
      </p>
    </div>
  );
};

export default Testimonial;
