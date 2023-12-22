import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PartsCard = ({ parts }) => {
  const { _id, name, image, price, description, minOrder, available } = parts;
  return (
    <div
      data-aos="zoom-out-up"
      data-aos-duration="1000"
      className="rounded-2xl border-2 border-[#FF0000]"
    >
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="hover:scale-95 transition-all rounded-tl-2xl rounded-tr-2xl w-full"
        />
      </figure>
      <div className="card-body pt-0 pl-3 mt-2 ">
        <h2 className="card-title text-white">{name}</h2>
        <p className="mb-0 text-white">{description}</p>
        <small className="text-white">
          Minimum order:{" "}
          <span className="text-[#FF0000] font-bold">{minOrder} </span>Piece
        </small>
        <small className="text-white">
          Available:{" "}
          <span className="text-[#FF0000] font-bold">{available} </span>Piece
        </small>
        <div className="flex justify-between items-center">
          <small className=" text-white">
            Price:
            <span className="font-bold text-[#FF0000]"> ${price} </span>
            Unit
          </small>
          <Link to={`/purchase/${_id}`}>
            <button className="btn btn-primary btn-sm hover:bg-gray-500 hover:text-white hover:border-none">
              Order now <FontAwesomeIcon className="ml-1" icon={FaCartPlus} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartsCard;
