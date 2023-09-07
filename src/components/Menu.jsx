import { useState } from "react";
import React from "react";
import { CgMenuMotion } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
// import { Route, Routes, Link } from "react-router-dom";
const Menu = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="bg-yellow-200 h-[100px]">
        <div className="flex justify-between  mx-6 pt-6">
          <h1 className="font-bold text-4xl cursor-pointer ">Foodyar</h1>

          <nav className="hidden lg:flex">
            <ul className="flex cursor-pointer mt-2">
              <li className="px-4 text-2xl ">Home</li>
              <li className="px-4 text-2xl">Beverages</li>
              <li className="px-4 text-2xl">Chef</li>
              <li className="px-4 text-2xl">Ingredient</li>
              <li className="px-4 text-2xl">Stories</li>
            </ul>
            <button
              type="button"
              className="bg-yellow-300 hover:bg-yellow-400 font-bold py-2 px-4 rounded-full"
            >
              My Kitchen
            </button>
          </nav>
          <div className="cursor-pointer block lg:hidden" onClick={handleNav}>
            {!nav ? <MdOutlineClose size={36} /> : <CgMenuMotion size={36} />}
          </div>
          {/* <div className='cursor-pointer'><MdOutlineClose size={36} /></div> */}
          {/* mobile menu */}
          <div
            className={
              !nav
                ? "fixed z-10 top-0 mt-[80px] bg-yellow-200 left-0 w-full h-full mt-12 ease-in-out duration-500"
                : "fixed top-[-100%]"
            }
          >
            <ul className="cursor-pointer">
              <li className="p-4 text-2xl ">Home</li>
              <li className="p-4 text-2xl">Beverages</li>
              <li className="p-4 text-2xl">Chef</li>
              <li className="p-4 text-2xl">Ingredient</li>
              <li className="p-4 text-2xl">Stories</li>
            </ul>
            <button
              type="button"
              className="w-full bg-yellow-300 hover:bg-yellow-400 font-bold py-2 px-4 rounded-full"
            >
              My Kitchen
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
