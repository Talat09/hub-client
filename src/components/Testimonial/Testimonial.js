import React from "react";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="avatar flex justify-center pt-40">
        <div className="w-24 rounded-full ring ring-[#FF0000] ring-offset-base-100">
          <img src="https://i.ibb.co/dmqnxys/1681152015415.jpg" alt="person" />
        </div>
      </div>
      <p className="desc  text-center font-mono px-3 mt-4 md:px-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi
        alias, nesciunt, quisquam dolorum incidunt ut nostrum soluta quos id
        nemo distinctio illum. Culpa excepturi explicabo a voluptate
        necessitatibus doloremque similique natus libero quis sint nobis rerum
        non saepe suscipit, dolorem quod amet eligendi sapiente esse nihil
        labore repellendus eum laboriosam error.
      </p>
      <p className="text-center mt-10 text-[#FF0000] uppercase font-mono">
        ~ MOHAMMED AMIR HAMJA ~
      </p>
    </div>
  );
};

export default Testimonial;
