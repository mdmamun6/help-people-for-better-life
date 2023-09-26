import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Header() {

  const location = useLocation();

  const isRouteActive = (routePath) => {
    return location.pathname === routePath;
  };

  const activeClass = 'text-red-500 underline'; 
  const inactiveClass = 'text-gray-600'; 

  return (
    <div>
      <div className="navbar	 flex justify-between mx-auto py-6 w-[90%] md:w-[80%] bg-white">
        <div className="">
          <a href='/' className="text-left w-32	md:w-48 text-xl"><img src="../img/Group 39461.png" alt="" /></a>
        </div>
        <div className="">
          <div className="hidden lg:flex">
            <ul className="menu space-x-8 font-semibold uppercase menu-horizontal px-1">
              <NavLink to='/' className={`${isRouteActive('/') ? activeClass : inactiveClass
          }`}>Home</NavLink>
              <NavLink to='/donation' className={`${isRouteActive('/donation') ? activeClass : inactiveClass
          }`}>Donation</NavLink>
              <NavLink to='/statistics' className={`${isRouteActive('/statistics') ? activeClass : inactiveClass
          }`}>Statistics</NavLink>
            </ul>
          </div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm space-y-6 dropdown-content mt-4  z-[1] p-2 shadow bg-base-100 rounded-box -ml-28 w-40">
              <NavLink to='/' className={`${isRouteActive('/') ? activeClass : inactiveClass
          }`}>Home</NavLink>
              <NavLink to='/donation' className={`${isRouteActive('/donation') ? activeClass : inactiveClass
          }`}>Donation</NavLink>
              <NavLink to='/statistics' className={`${isRouteActive('/statistics') ? activeClass : inactiveClass
          }`}>Statistics</NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
