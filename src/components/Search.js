import React, { useContext, useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import debounce from "lodash.debounce";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  let { getSearchResult } = useContext(CryptoContext);

  const debounceFunc = debounce(function (val) {
    getSearchResult(val);
  }, 2000);

  let handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setSearchText(query);
    debounceFunc(query);
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

      {searchText.length > 0 ? (
        <ul className="absolute top-11 right-0 w-full h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md">
          <li>bitcoin</li>
          <li>ethereum</li>
        </ul>
      ) : null}
    </>
  );
};

export default Search;
