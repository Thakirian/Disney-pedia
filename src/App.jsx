import { useState, useEffect } from 'react';
import CharacterCard from './components/CharacterCard'; //componente de cards
import SearchBar from './components/SearchBar'; // componente barra de busca
import './App.css';

function App() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.disneyapi.dev/character?pageSize=50');
        const data = await response.json();
        setPersonagens(data.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Enciclopédia Mágica Disney</h1>
      <SearchBar /> {}
      
      <div className="characters-grid">
        {personagens.map((personagem) => (
          <CharacterCard 
            key={personagem._id} 
            name={personagem.name} 
            imageUrl={personagem.imageUrl} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;