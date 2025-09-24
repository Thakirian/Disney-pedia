import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ termoBusca, setTermoBusca }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2, m: 2 }}>
      <TextField
        label="Buscar por personagem..."
        variant="outlined"
        value={termoBusca}
        onChange={(evento) => setTermoBusca(evento.target.value)}
        sx={{ width: '50%', mr: 2 }}
      />
      <Button
        variant="contained"
        endIcon={<SearchIcon />}
      >
        Buscar
      </Button>
    </Box>
  );
}

export default SearchBar;