import { useState } from 'react';

function SearchBar() {
  const [termoBusca, setTermoBusca] = useState('');

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar por personagem..."
        value={termoBusca}
        onChange={(evento) => setTermoBusca(evento.target.value)}
      />
    </div>
  );
}

export default SearchBar;