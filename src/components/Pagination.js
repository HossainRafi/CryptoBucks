import React, { useContext } from "react";
import paginationArrow from "../assets/pagination-arrow.svg";
import { CryptoContext } from './../context/CryptoContext';

const Pagination = () => {
  let {page, setPage} = useContext(CryptoContext)

  const TotalNumber = 250;

  // ========== Next btn functionality ===========
  const next = () => {
    if (currentPage === TotalNumber) {
      return null;
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  // ========== Previus btn functionality ===========
  const prev = () => {
    if (currentPage === 1) {
      return null;
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  // ========== Function for if user wants to go more than one page forward =============
  const multiStepNext = () => {
    if (currentPage + 3 >= TotalNumber) {
      setCurrentPage(TotalNumber - 1);
    } else {
      setCurrentPage(currentPage + 3);
    }
  };

  // ========== Function for if user wants to go more than one page backward =============
  const multiStepPrev = () => {
    if (currentPage - 3 <= 1) {
      setCurrentPage(TotalNumber + 1);
    } else {
      setCurrentPage(currentPage - 2);
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

        {currentPage + 1 === TotalNumber || currentPage === TotalNumber ? (
          <li>
            <button
              onClick={multiStepPrev}
              className="ouline-0 hover:text-cyan  rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold"
            >
              ...
            </button>
          </li>
        ) : null}

        {currentPage - 1 !== 0 ? (
          <li>
            <button
              onClick={prev}
              className="ouline-0 hover:text-cyan  rounded-full w-7 h-7 flex items-center justify-center bg-gray-200 mx-1.5 font-bold"
            >
              {currentPage - 1}
            </button>
          </li>
        ) : null}

        <li>
          <button
            disabled
            className="ouline-0  rounded-full w-7 h-7 flex items-center justify-center bg-cyan text-gray-300 mx-1.5 font-bold"
          >
            {currentPage}
          </button>
        </li>

        {currentPage + 1 !== TotalNumber && currentPage !== TotalNumber ? (
          <li>
            <button
              onClick={next}
              className="ouline-0 hover:text-cyan  rounded-full w-7 h-7 flex items-center justify-center bg-gray-200 mx-1.5 font-bold"
            >
              {currentPage + 1}
            </button>
          </li>
        ) : null}

        {currentPage + 1 !== TotalNumber && currentPage !== TotalNumber ? (
          <li>
            <button
              onClick={multiStepNext}
              className="ouline-0 hover:text-cyan  rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold"
            >
              ...
            </button>
          </li>
        ) : null}

        {currentPage !== TotalNumber ? (
          <li>
            <button
              onClick={() => setCurrentPage(TotalNumber)}
              className="ouline-0 hover:text-cyan  rounded-full w-7 h-7 flex items-center justify-center bg-gray-200 mx-1.5 font-bold"
            >
              {TotalNumber}
            </button>
          </li>
        ) : null}

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
