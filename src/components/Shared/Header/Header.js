import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menu = (
    <>
      <li>
        <Link className=" text-xl text-white" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-xl text-white" to="/reviews">
          Reviews
        </Link>
      </li>
      <li>
        <Link className=" text-xl text-white" to="/blogs">
          Blogs
        </Link>
      </li>
      <li>
        <Link className="text-xl text-white" to="/dashboard">
          Dashboard
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-white text-3xl "
          >
            Parts <span className="text-red-500">Masters</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex navbar-end">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
