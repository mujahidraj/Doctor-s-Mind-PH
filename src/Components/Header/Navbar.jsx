import React from 'react';
import { NavLink } from 'react-router';
import '../../Styles/styles.css'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <div>
      <div className="navbar fixed top-0 right-0 z-100 left-0 bg-white/30   backdrop-blur-2xl sm:px-10 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <NavLink><li className='text-lg font-medium '>Home</li></NavLink>
              <NavLink><li className='text-base font-medium '>My-Bookings</li></NavLink>
              <NavLink><li className='text-base font-medium '>Blogs</li></NavLink>
              <NavLink><li className='text-base font-medium '>Contact Us</li></NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl pacifico uppercase">
            
            <img src={logo} alt="" />Doctor's Mind</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal jakarta flex flex-row gap-5 px-1">
            <NavLink to={`/`}><li className='text-base font-medium '>Home</li></NavLink>
            <NavLink to={`/bookings`}><li className='text-base font-medium '>My-Bookings</li></NavLink>
            <NavLink to={`/blogs`}><li className='text-base font-medium '>Blogs</li></NavLink>
            <NavLink to={`/contact`}><li className='text-base font-medium '>Contact Us</li></NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn rounded-full bg-[#176AE5] text-white">Emergency</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;