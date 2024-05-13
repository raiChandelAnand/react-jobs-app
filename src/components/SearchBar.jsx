import React, { useEffect, useRef, useState } from "react";

const SearchBar = ({ typedSearchInput }) => {
  const [searchInput, setSearchInput] = useState("");

  const inputRef = useRef();

  const clearInput = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    setSearchInput("");
  };

  const onSearchInputChange = (userInput) => {
    setSearchInput(userInput);
    typedSearchInput(userInput);
  };

  useEffect(() => {
    onSearchInputChange(searchInput);
  }, [searchInput]);

  return (
    <form className="max-w-md mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative  shadow-md">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-500 border border-gray-600 rounded-lg bg-white focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Search Jobs"
          required
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          ref={inputRef}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2"
          onClick={(e) => clearInput(e)}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
