'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className='mb-4 flex justify-center'>
      <div className='relative w-full max-w-md'>
        <input
          type='text'
          placeholder='Search hospitals...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
          <FontAwesomeIcon icon={faSearch} className='h-5 w-5 text-gray-400' />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
