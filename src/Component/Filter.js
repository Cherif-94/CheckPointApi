import React from "react";
import "./Filter.css";
const Filter = ({ setText }) => {
  return (
    <div className="centerInput">
      <label for="site-search">Search </label>
      <input
        onChange={(e) => setText(e.target.value)}
        type="search"
        id="site-search"
        name="q"
        aria-label="Search through site content"
      ></input>
    </div>
  );
};

export default Filter;
