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
      className="rounded-2xl border-2 border-black bg-white"
    >
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="hover:scale-95 transition-all rounded-tl-2xl rounded-tr-2xl w-full"
        />
      </figure>
      <div className="card-body pt-0 pl-3 mt-2 ">
        <h2 className="card-title text-black">{name}</h2>
        <p className="mb-0 text-black">{description}</p>
        <small className="text-black">
          Minimum order:{" "}
          <span className="text-black font-bold">{minOrder} </span>Piece
        </small>
        <small className="text-black">
          Available: <span className="text-black font-bold">{available} </span>
          Piece
        </small>
        <div className="flex justify-between items-center">
          <small className=" text-black">
            Price:
            <span className="font-bold text-black"> ${price} </span>
            Unit
          </small>
          <Link to={`/purchase/${_id}`}>
            <button className="btn btn-primary btn-sm hover:bg-secondary text-white hover:text-black hover:border-none">
              Order now <FontAwesomeIcon className="ml-1" icon={FaCartPlus} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartsCard;
