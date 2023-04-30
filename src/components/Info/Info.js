import React from "react";
import service from "../../assets/icons/service.png";
import hotoffer from "../../assets/icons/hot-offer.png";
import securepayment from "../../assets/icons/secure-payment.png";
import freedelivery from "../../assets/icons/free-delivery.png";
const Info = () => {
  const items = [
    {
      images: freedelivery,
      title: "Free shipping",
      des: "For orders from $50",
    },
    {
      images: service,
      title: "Support 24/7",
      des: "Call us anytime",
    },
    {
      images: securepayment,
      title: "100% Safety",
      des: "Only secure payments",
    },
    {
      images: hotoffer,
      title: "Hot Offers",
      des: "Discounts up to 90%",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto lg:px-10">
      <div className="grid lg:grid-cols-4 md:grid-col gap-7 lg:gap-5 my-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-evenly items-center border p-3 border-red-500 bg-white rounded-md shadow-lg"
          >
            <img className="w-12" src={item.images} alt="item images" />
            <div>
              <h5 className="text-md font-semibold text-center lg:text-left">
                {item.title}
              </h5>
              <p className="text-sm">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className="divider hidden md:block bg-red-500 h-1" />
    </div>
  );
};

export default Info;
