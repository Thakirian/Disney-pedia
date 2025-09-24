// src/contexts/SearchContext.jsx

import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  
  const [personagens, setPersonagens] = useState([]);

  const value = {
    personagens,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}