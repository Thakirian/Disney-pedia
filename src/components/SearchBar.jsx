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

<<<<<<< Updated upstream
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
        m: 'auto',
        maxWidth: 600,
=======
function SearchBar({ termoBusca, setTermoBusca, buscarPersonagens }) { 
  const handleSearch = (e) => {
    e.preventDefault(); 
    if (buscarPersonagens) {
      buscarPersonagens(termoBusca);
    }
  };

  return (
    <Box 
      component="form"
      onSubmit={handleSearch}
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' }, 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 2, 
        p: 2, 
        m: 'auto', 
        maxWidth: 600, 
>>>>>>> Stashed changes
      }}
    >
      <TextField
        label="Buscar por personagem..."
        variant="outlined"
        value={termoBusca}
<<<<<<< Updated upstream
        onChange={(evento) => setTermoBusca(evento.target.value)}
        onKeyDown={handleKeyDown} 
        sx={{ width: { xs: '100%', sm: '70%' } }}
=======
        onChange={(e) => setTermoBusca(e.target.value)}
        sx={{ 
          width: { xs: '100%', sm: '70%' }, 
          minWidth: 200 
        }}
>>>>>>> Stashed changes
      />
      <Button
        type="submit" 
        variant="contained"
        endIcon={<SearchIcon />}
<<<<<<< Updated upstream
        sx={{ width: { xs: '100%', sm: 'auto' } }}
=======
        type="submit"
        sx={{ width: { xs: '100%', sm: 'auto' } }} 
>>>>>>> Stashed changes
      >
        Buscar
      </Button>
    </Box>
  );
}

export default SearchBar;