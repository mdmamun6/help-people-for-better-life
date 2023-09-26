import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isRouteActive = (routePath) => {
    return location.pathname === routePath;
  };

  const activeClass = 'text-red-500 underline';
  const inactiveClass = 'text-gray-600';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="navbar flex justify-between mx-auto py-6 w-[90%] md:w-[80%] bg-white">
        <div className="">
          <a href='/' className="text-left w-32 md:w-48 text-xl">
            <img src="../img/Group 39461.png" alt="" />
          </a>
        </div>
        <div className="">
          <div className="hidden lg:flex">
            <ul className="menu space-x-8 font-semibold uppercase menu-horizontal px-1">
              <NavLink
                to="/"
                className={`${isRouteActive('/') ? activeClass : inactiveClass}`}
              >
                Home
              </NavLink>
              <NavLink
                to="/donation"
                className={`${isRouteActive('/donation') ? activeClass : inactiveClass}`}
              >
                Donation
              </NavLink>
              <NavLink
                to="/statistics"
                className={`${isRouteActive('/statistics') ? activeClass : inactiveClass}`}
              >
                Statistics
              </NavLink>
            </ul>
          </div>
          <div className="dropdown">
            <label
              tabIndex={0}
              className=" lg:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
              )}
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm space-y-6 dropdown-content mt-4 ${
                isMenuOpen ? 'block' : 'hidden'
              } z-[1] p-5 shadow bg-base-100 flex space-y-8 rounded-box -ml-28 w-40`}
            >
              <NavLink
                to="/"
                className={`${isRouteActive('/') ? activeClass : inactiveClass}`}
                onClick={toggleMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/donation"
                className={`${isRouteActive('/donation') ? activeClass : inactiveClass}`}
                onClick={toggleMenu}
              >
                Donation
              </NavLink>
              <NavLink
                to="/statistics"
                className={`${isRouteActive('/statistics') ? activeClass : inactiveClass}`}
                onClick={toggleMenu}
              >
                Statistics
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
