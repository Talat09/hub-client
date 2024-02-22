import React from "react";
// import service from "../../assets/icons/service.png";
// import hotoffer from "../../assets/icons/hot-offer.png";
// import securepayment from "../../assets/icons/secure-payment.png";
// import freedelivery from "../../assets/icons/free-delivery.png";
import { FaShippingFast, FaLock } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
// import { TbLockPlus } from "react-icons/tb";
import { MdOutlineLocalOffer } from "react-icons/md";
const Info = () => {
  const items = [
    {
      icons: <FaShippingFast className="text-primary text-4xl" />,
      title: "Free shipping",
      des: "For orders from $50",
    },
    {
      icons: <BiPhoneCall className="text-primary text-4xl" />,
      title: "Support 24/7",
      des: "Call us anytime",
    },
    {
      icons: <FaLock className="text-primary text-4xl" />,
      title: "100% Safety",
      des: "Only secure payments",
    },
    {
      icons: <MdOutlineLocalOffer className="text-primary text-4xl" />,
      title: "Hot Offers",
      des: "Discounts up to 90%",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto lg:px-10">
      <div className="grid lg:grid-cols-4 md:grid-col gap-7 lg:gap-5 my-8 ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-evenly items-center  p-4  bg-white rounded-md shadow-lg "
          >
            <div>{item.icons}</div>

            <div>
              <h5 className="text-md font-semibold text-center lg:text-left text-primary">
                {item.title}
              </h5>
              <p className="text-sm">{item.des}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="divider hidden md:block bg-primary  h-[2px] w-full"></div>
    </div>
  );
};

export default Info;
