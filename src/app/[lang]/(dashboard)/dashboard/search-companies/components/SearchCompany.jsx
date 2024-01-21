'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchCompany = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // Mock API call to fetch search results
      const fetchSearchResults = async () => {
        try {
          // Replace this with your actual API endpoint
          const response = await axios.get(`https://jsonplaceholder.typicode.com/users`, {
            params: { q: searchQuery },
          });
          setSearchResults(response.data);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      };

      // Fetch search results only if there is a non-empty search query
      if (searchQuery.trim() !== '') {
        fetchSearchResults();
      } else {
        // Clear results if the search query is empty
        setSearchResults([]);
      }
    }, 5000); // 5-second delay

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    setShowDropdown(true);
  };

  const handleDropdownItemClick = (result) => {
    // Handle the click on a dropdown item, e.g., navigate to the selected company's page
    console.log(`Clicked on ${result.name}`);
    // Add your navigation logic here
  };

  return (
    <div className="mt-4">
      <form>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for a company..."
            required
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>
      </form>

      {showDropdown && searchResults?.length > 0 && (
        <div className="relative rounded-md mt-2 w-full bg-white shadow-lg">
          <ul className="divide-y  divide-gray-100">
            {searchResults.map((result) => (
              <li key={result.id}>
                <button
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-500 hover:text-white w-full text-left hover:rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  onClick={() => handleDropdownItemClick(result)}
                >
                  <div className="flex items-center justify-between">
                    <span>{result.name}</span>
                    <span className="text-gray-500">{result.email}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchCompany;
