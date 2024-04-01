import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://i.ibb.co/tbsVy2T/funny-404-error-page-design.gif"
        loading="lazy"
        alt="404-Img"
      />
      <h1 className="mt-10 text-center text-3xl md:text-6xl  font-bold text-gray-600">
        404! | NOT FOUND
      </h1>
      <Link className="flex justify-center mt-5" to="/">
        <button className="bg-primary p-3 text-xl rounded-md text-white">
          Go Back To Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
