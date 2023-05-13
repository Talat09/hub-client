import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
const PartsCard = ({ parts }) => {
  const {
    id,
    name,
    image,
    price,
    description,
    MinimumOrder,
    AvailableQuantity,
  } = parts;
  return (
    <div
      data-aos="zoom-out-up"
      data-aos-duration="1000"
      class="rounded-2xl border-2 border-[#21252c]"
    >
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="hover:scale-95 transition-all rounded-tl-2xl rounded-tr-2xl w-full"
        />
      </figure>
      <div class="card-body pt-0 pl-3 mt-2 ">
        <h2 class="card-title">{name}</h2>
        <p className="mb-0">{description}</p>
        <small>
          Minimum order:{" "}
          <span className="text-orange-600 font-bold">
            {MinimumOrder} Piece
          </span>
        </small>
        <small>
          Available:{" "}
          <span className="text-orange-600 font-bold">
            {AvailableQuantity} Piece
          </span>
        </small>
        <div className="flex justify-between items-center">
          <p className="font-bold text-red-500">${price}</p>
          <Link to={`/purchase/${id}`}>
            <button className="btn btn-accent btn-sm hover:btn-primary hover:text-white">
              Place Order <FaCartPlus className="ml-1"></FaCartPlus>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartsCard;
