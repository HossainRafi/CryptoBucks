import React from "react";
import searchIcon from "../assets/search-icon.svg";

const Search = () => {
  return (
    <form>
      <input type="text" name="search" id="" />
      <button type="submit">
        <img src={searchIcon} alt="" />
      </button>
    </form>
  );
};

export default Search;
