import { useState } from 'react';

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar usuarios..."
      className="border border-gray-300 p-2 rounded w-full mb-6"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
