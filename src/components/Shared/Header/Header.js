import React, { useContext } from "react";
import {
  faRightFromBracket,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import auth from "../../../Firebase/firebase.init";
import { PartsIdContext } from "../../../App";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const navigate = useNavigate();
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

  const signOutHandle = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    navigate("/");
  };
  const menuItems = (
    <>
      <li>
        <NavLink
          className="md:py-1 text-white hover:bg-secondary hover:text-black rounded-md "
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="md:py-1  text-white hover:bg-secondary hover:text-black rounded-md"
          to="/review"
        >
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          className="md:py-1  text-white hover:bg-secondary hover:text-black rounded-md"
          to="/blogs"
        >
          Blogs
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              className="md:py-1 text-white hover:bg-secondary hover:text-black rounded-md"
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>

          <span className="flex items-center">
            <button
              className="btn btn-primary btn-sm w-full text-white font-normal hover:btn-neutral hover:text-white"
              onClick={signOutHandle}
            >
              Sign Out{" "}
              <FontAwesomeIcon className="ml-2" icon={faRightFromBracket} />
            </button>
          </span>
        </>
      ) : (
        <Link to="/login" className="flex items-center ">
          <button className="btn btn-primary btn-sm w-full text-white font-normal hover:btn-neutral hover:text-white">
            Login <FontAwesomeIcon className="ml-2" icon={faRightToBracket} />
          </button>
        </Link>
      )}
    </>
  );

  return (
    <section className="bg-[#00BF63]">
      <div
        className={`navbar  max-w-7xl mx-auto lg:px-10 ${path ? "" : "hidden"}`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#21252c] rounded-box w-40 gap-1"
            >
              {menuItems}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-white text-3xl "
          >
            TOOLS <span className="text-secondary">MASTER</span>
          </Link>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal p-0 mr-2 hidden lg:flex items-center gap-3">
            {menuItems}
          </ul>
          {user && (
            <div className="dropdown dropdown-end">
              <label
                tabIndex="0"
                className="w-10 h-10 flex justify-center items-center rounded-full uppercase  cursor-pointer bg-white"
              >
                {user?.displayName.split(" ")[0].slice(0, 1)}
                {user?.displayName.split(" ")[1]?.slice(0, 1)}
              </label>
              <ul
                tabIndex="0"
                class="dropdown-content menu menu-compact mt-3 p-2 shadow bg-[#21252c] text-white rounded-box w-40"
              >
                <li>
                  <Link
                    className={`hover:bg-primary ${
                      p === "/dashboard" && "border-[1px] border-info"
                    }`}
                    to="/dashboard"
                  >
                    My Profile
                  </Link>
                </li>
                {admin && (
                  <>
                    <li>
                      <Link
                        className={`hover:bg-primary ${
                          p === "/dashboard/all-users" &&
                          "border-[1px] border-info"
                        }`}
                        to="all-users"
                      >
                        All Users
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`hover:bg-primary ${
                          p === "/dashboard/manage-orders" &&
                          "border-[1px] border-info"
                        }`}
                        to="manage-orders"
                      >
                        Manage Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`hover:bg-primary ${
                          p === "/dashboard/manage-products" &&
                          "border-[1px] border-info"
                        }`}
                        to="manage-products"
                      >
                        Manage Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`hover:bg-primary ${
                          p === "/dashboard/add-product" &&
                          "border-[1px] border-info"
                        }`}
                        to="add-product"
                      >
                        Add Product
                      </Link>
                    </li>
                  </>
                )}
                {!admin && (
                  <>
                    <li>
                      <Link
                        className={`hover:bg-primary ${
                          p === "/dashboard/my-orders" &&
                          "border-[1px] border-info"
                        }`}
                        to="/dashboard/my-orders"
                      >
                        My Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`hover:bg-primary ${
                          p === "/dashboard/add-review" &&
                          "border-[1px] border-info"
                        }`}
                        to="/dashboard/add-review"
                      >
                        Add a Review
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
