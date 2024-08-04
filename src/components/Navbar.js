import React from "react";
import logo1 from "./img/labdox.logo.png";

const Navbar = () => {
  return (
    <div className="w-full flex py-4 px-10 items-center justify-between border-black">
      <img  className='h-12'  src={logo1}></img>
      <button className='bg-[#1a1a1a] text-white rounded-lg   text-2xl font-poppins w-40 py-3 hover:bg-[#3a3a3a] duration-150'>Enroll Now</button>
    </div>
  );
};

export default Navbar;
