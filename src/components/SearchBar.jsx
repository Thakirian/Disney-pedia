import React, { useContext } from 'react';
import { Box, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchContext } from '../contexts/SearchContext';

function SearchBar() { 
  const { termoBusca, setTermoBusca, buscarPersonagens } = useContext(SearchContext);

  const handleSearch = () => {
    buscarPersonagens(termoBusca);
  };

  const handleKeyDown = (evento) => {
    if (evento.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Box 
      component="form"
      onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 2,
        p: 2, 
        // Remover m: 'auto'
        width: '100%', // Força a largura para 100%
        maxWidth: 750, // Mantém a largura máxima
      }}
    >
      <TextField
        label="Buscar por personagem..."
        variant="outlined"
        value={termoBusca}
        onChange={(evento) => setTermoBusca(evento.target.value)}
        onKeyDown={handleKeyDown} 
        sx={{ width: '100%' }}
      />
      <Button
        type="submit" 
        variant="contained"
        endIcon={<SearchIcon />}
        sx={{ 
          backgroundColor: '#1976D2' 
        }}
      >
        Buscar
      </Button>
    </Box>
  );
}

export default SearchBar;