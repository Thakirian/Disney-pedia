import React, { useContext, useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchContext } from '../contexts/SearchContext'; //contexto importado

function SearchBar() { 
  
  //Pegamos tudo que precisamos do contexto
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
      sx={{ display: 'flex', justifyContent: 'center', p: 2, m: 2 }}
    >
      <TextField
        label="Buscar por personagem..."
        variant="outlined"
        value={termoBusca}
        onChange={(evento) => setTermoBusca(evento.target.value)}
        onKeyDown={handleKeyDown} 
        sx={{ width: '50%', mr: 2 }}
      />
      <Button
        type="submit" 
        variant="contained"
        endIcon={<SearchIcon />}
      >
        Buscar
      </Button>
    </Box>
  );
}

export default SearchBar;