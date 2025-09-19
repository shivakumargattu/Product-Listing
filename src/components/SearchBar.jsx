import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      />
    </div>
  );
};

export default SearchBar;
