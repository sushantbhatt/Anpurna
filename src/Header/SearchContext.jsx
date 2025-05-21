// src/contexts/SearchContext.js
import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  return (
    <SearchContext.Provider value={{ 
      searchResults, 
      setSearchResults, 
      searchQuery, 
      setSearchQuery,
      showResults,
      setShowResults
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);