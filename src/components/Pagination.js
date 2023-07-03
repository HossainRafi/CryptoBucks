import React from "react";
import paginationArrow from "../assets/pagination-arrow.svg";
import { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const TotalNumber = 250;

  const next = () => {
    if (currentPage === TotalNumber) {
      return null;
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage === 1) {
      return null;
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex items-center">
      <ul className="flex items-center justify-end text-sm">
        <li className="flex items-center">
          <button className="outline-0 hover:text-cyan w-6" onClick={prev}>
            <img
              className="w-full h-auto rotate-180"
              src={paginationArrow}
              alt=""
            />
          </button>
        </li>
        <li>
          <button className="ouline-0 hover:text-cyan  rounded-full w-7 h-7 flex items-center justify-center text-lg">
            ...
          </button>
        </li>
        <li>
          <button className="ouline-0 hover:text-cyan  rounded-full w-7 h-7 flex items-center justify-center bg-gray-200 mx-1.5">
            1
          </button>
        </li>
        <li>
          <button className="ouline-0  rounded-full w-7 h-7 flex items-center justify-center bg-cyan text-gray-300 mx-1.5">
            2
          </button>
        </li>
        <li>
          <button className="ouline-0 hover:text-cyan  rounded-full w-7 h-7 flex items-center justify-center bg-gray-200 mx-1.5">
            3
          </button>
        </li>
        <li>
          <button className="ouline-0 hover:text-cyan  rounded-full w-7 h-7 flex items-center justify-center text-lg">
            ...
          </button>
        </li>
        <li>
          <button className="ouline-0 hover:text-cyan  rounded-full w-7 h-7 flex items-center justify-center bg-gray-200 mx-1.5">
            100
          </button>
        </li>
        <li className="flex items-center">
          <button className="outline-0 hover:text-cyan w-6" onClick={next}>
            <img className="w-full h-auto" src={paginationArrow} alt="" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
