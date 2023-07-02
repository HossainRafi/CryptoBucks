import React, { useState } from "react";
import searchIcon from "../assets/search-icon.svg";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  let handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setSearchText(query);
  };

  return (
    <>
      <form className="w-96 relative flex items-center ml-7 font-nunito">
        <input
          className="w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan"
          placeholder="Search Here ....."
          type="text"
          name="search"
          onChange={handleInput}
          value={searchText}
        />
        <button className="absolute right-1 cursor-pointer" type="submit">
          <img src={searchIcon} alt="icon" className="w-full h-auto" />
        </button>
      </form>

      {
        searchText.length>0 ? 

        <ul>
          <li>bitcoin</li>
          <li>ethereum</li>
        </ul>
        :


        null
      }
    </>
  );
};

export default Search;
