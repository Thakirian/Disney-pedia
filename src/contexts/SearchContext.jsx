import React, { createContext, useState } from 'react';

// Crição do contexto
export const SearchContext = createContext();

// Criação do "Provedor" do contexto
export function SearchProvider({ children }) {
  
  // Estados da busca
  const [personagens, setPersonagens] = useState([]);
  const [carregando, setCarregando] = useState(false); // Para saber quando a busca está em andamento
  const [termoBusca, setTermoBusca] = useState(''); // Para guardar o que o usuário digita

  // Função de busca
  const buscarPersonagens = async (termo) => {
    console.log(`Buscando por: "${termo}"`);
    setCarregando(true);

    // Define a URL da API. Se o termo estiver vazio, busca uma lista geral.
    // Se tiver um termo, busca por aquele nome específico.
    const url = termo 
      ? `https://api.disneyapi.dev/character?name=${termo}`
      : `https://api.disneyapi.dev/character?pageSize=50`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      setPersonagens(data.data || []); 

    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
      setPersonagens([]); // Em caso de erro, limpa a lista de personagens
    } finally {
      setCarregando(false);
    }
  };

  // O "value" agora disponibiliza nossos estados E a nossa função de busca
  const value = {
    personagens,
    carregando,
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