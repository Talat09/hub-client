import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import footerBg from "../../../assets/footer.jpg";
import { PartsIdContext } from "../../../App";
const Footer = () => {
  const { partsId } = useContext(PartsIdContext);
  const { pathname: p } = useLocation();
  let path = false;

  const dashboardPaths = [
    "/dashboard",
    "/dashboard/user/update-profile",
    "/dashboard/my-orders",
    "/dashboard/add-review",
    "/dashboard/all-users",
    "/dashboard/manage-orders",
    "/dashboard/manage-products",
    "/dashboard/add-product",
    "/dashboard/pending-orders",
    "/dashboard/shipped-orders",
    "/dashboard/unpaid-orders",
    `/purchase/${partsId}`,
    `/dashboard/payment/${partsId}`,
  ];

  const allPaths = [
    "/",
    "/top-rated",
    "/review",
    "/blogs",
    "/my-portfolio",
    "/login",
    "/signup",
    ...dashboardPaths,
  ];

  if (allPaths.includes(p)) {
    path = true;
  }
  return (
    <footer
      className={`footer ${path ? "block" : "hidden"}`}
      style={{ background: `url(${footerBg})` }}
    >
      <hr className="h-[2px] bg-primary border-none" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-7 py-14 lg:px-10 text-white">
        <div>
          <div>
            <p className="text-2xl font-semibold">
              TOOLS<span className="text-primary">MASTER</span>
            </p>
          </div>
          <div className="mt-3 text-[#c4c3c3] text-sm">
            <p>We meet your need. Feel free to trade with us.</p>
            <div className="grid grid-cols-2 gap-5 mt-4">
              <div>
                <p className="uppercase text-sm">phone number</p>
                <p className="text-sm text-white">+880 178100000</p>
              </div>

              <div>
                <p className="uppercase text-sm">email address</p>
                <p className="text-sm text-white">admin@toolsmaster.com</p>
              </div>

              <div>
                <p className="uppercase text-sm">Our Location</p>
                <p className="text-sm text-white">
                  915 HALISHAHAR, CHATTOGRAM BANGLADESH
                </p>
              </div>

              <div>
                <p className="uppercase text-sm">Working Hours</p>
                <p className="text-sm text-white">Mon-Sat 10:00pm - 7:00pm </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:mx-auto">
          <p className="uppercase font-bold">Useful links</p>
          <hr className="mt-2 h-[2px] w-6 bg-primary border-none" />
          <ul className="text-sm list-disc ml-3">
            <li>
              <Link to="/dashboard" className="flex items-center mt-3">
                <p className="text-[#c4c3c3]">Dashboard</p>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/my-orders" className="flex mt-3">
                <p className="text-[#c4c3c3]">My Orders</p>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/add-review" className="flex mt-3">
                <p className="text-[#c4c3c3]">Add A Review</p>
              </Link>
            </li>

            <li>
              <Link to="/all-cars" className="flex mt-3">
                <p className="text-[#c4c3c3]">Terms &amp; Conditions</p>
              </Link>
            </li>

            <li>
              <Link to="/all-cars" className="flex mt-3">
                <p className="text-[#c4c3c3]">Offers</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:mx-auto">
          <p className="uppercase font-bold">Find Us</p>
          <hr className="mt-2 h-[2px] w-6 bg-primary border-none" />
          <ul className="text-sm list-disc ml-3">
            <li>
              <Link to="/all-cars" className="flex items-center mt-3">
                <p className="text-[#c4c3c3]">Facebook</p>
              </Link>
            </li>

            <li>
              <Link to="/all-cars" className="flex mt-3">
                <p className="text-[#c4c3c3]">Twitter</p>
              </Link>
            </li>

            <li>
              <Link to="/all-cars" className="flex mt-3">
                <p className="text-[#c4c3c3]">Instagram</p>
              </Link>
            </li>

            <li>
              <Link to="/all-cars" className="flex mt-3">
                <p className="text-[#c4c3c3]">Telegram</p>
              </Link>
            </li>

            <li>
              <Link to="/all-cars" className="flex mt-3">
                <p className="text-[#c4c3c3]">LinkedIn</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:mx-auto">
          <p className="uppercase font-bold">About Us</p>
          <hr className="mt-2 h-[2px] w-6 bg-primary border-none" />
          <ul className="text-sm list-disc ml-3">
            <li>
              <Link to="/all-cars" className="flex items-center mt-3">
                <p className="text-[#c4c3c3]">Who We Are</p>
              </Link>
            </li>

            <li>
              <Link to="/all-cars" className="flex mt-3">
                <p className="text-[#c4c3c3]">Our Works</p>
              </Link>
            </li>

            <li>
              <Link to="/all-cars" className="flex mt-3">
                <p className="text-[#c4c3c3]">Careers</p>
              </Link>
            </li>

            <li>
              <Link to="/all-cars" className="flex mt-3">
                <p className="text-[#c4c3c3]">Our Rating</p>
              </Link>
            </li>

            <li>
              <Link to="/all-cars" className="flex mt-3">
                <p className="text-[#c4c3c3]">Our Clients</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-5 px-6 md:px-10 lg:px-20 py-8 border-t-[1px] border-[#ffffff14] text-[#c4c3c3] text-sm">
        <p className="text-center">&copy;Copyright 2023 TOOLS MASTER</p>
        <div className="flex justify-center gap-5">
          <p>Privacy Policy</p>
          <p>Terms &amp; Conditions</p>
          <p>Contact Us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
