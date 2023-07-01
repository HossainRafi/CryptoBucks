import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-[40%] mt-16 flex justify-around align-middle border border-cyan rounded-lg">
      <NavLink
        to="/"
        className="w-full text-base text-center font-nunito m-2.5 bg-gray-100 hover:text-cyan active:text-gray-300 border-0 cursor-pointer rounded capitalize font-semibold"
      >
        Crypto
      </NavLink>

      <NavLink
        to="/trending"
        className="w-full text-base text-center font-nunito m-2.5 bg-gray-100 hover:text-cyan active:text-gray-300 border-0 cursor-pointer rounded capitalize font-semibold"
      >
        Trending
      </NavLink>

      <NavLink
        to="/saved"
        className="w-full text-base text-center font-nunito m-2.5 bg-gray-100 hover:text-cyan active:text-gray-300 border-0 cursor-pointer rounded capitalize font-semibold"
      >
        Saved
      </NavLink>
    </nav>
  );
};

export default Navigation;
