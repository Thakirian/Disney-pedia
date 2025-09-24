import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [personagens, setPersonagens] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [termoBusca, setTermoBusca] = useState('');
  const [erro, setErro] = useState(null);

  const buscarPersonagens = async (termo) => {
    setCarregando(true);
    setErro(null); 
    const url = termo 
      ? `https://api.disneyapi.dev/character?name=${termo}`
      : `https://api.disneyapi.dev/character?pageSize=50`;

    try {
      const response = await fetch(url);
      if (!response.ok) { 
        throw new Error('Erro na resposta da API');
      }
      const data = await response.json();
      setPersonagens(data.data || []); 
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
      setPersonagens([]);
      setErro("Não foi possível carregar os personagens. Tente novamente."); 
    } finally {
      setCarregando(false);
    }
  };

  const value = {
    personagens,
    carregando,
    erro, 
    termoBusca,
    setTermoBusca,
    buscarPersonagens,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}