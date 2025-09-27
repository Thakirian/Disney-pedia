// src/App.jsx

import { useContext, useEffect } from 'react';
import { Container, Grid, Typography, Box, CircularProgress, Alert } from '@mui/material';
import CharacterCard from './components/CharacterCard';
import SearchBar from './components/SearchBar';
import { SearchContext } from './contexts/SearchContext';
import logo from './image/logo.png';
import './App.css';

function App() {
  const { personagens, carregando, erro, buscarPersonagens } = useContext(SearchContext);

  useEffect(() => {
    buscarPersonagens(''); 
  }, [buscarPersonagens]); 

  // PONTO 1: A chave da animação. Usamos o estado de carregamento para garantir que o Grid
  // seja renderizado após o carregamento (ou alteração de busca), o que dispara a animação.
  const gridKey = carregando ? 'loading' : 'loaded-' + personagens.length; 

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: '100vh' }}>
      <Box sx={{ my: 4, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2, 
            mb: 2
          }}
        >
          <Box 
            component="img"
            sx={{ 
              height: 100, 
            }}
            alt="Disney Logo"
            src={logo}
          />
          <Typography 
            variant="h3" 
            component="h1" 
            // PONTO 2: Removemos o estilo inline 'color: #FFFFFF'
            // O título usará agora a cor '#1976D2' definida no theme.js.
          >
            Enciclopédia Mágica Disney
          </Typography>
        </Box>
        <SearchBar />
      </Box>

      {carregando && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {erro && (
        <Alert severity="error" sx={{ mt: 4 }}>
          {erro}
        </Alert>
      )}

      {!carregando && !erro && (
        // Usamos a chave aqui para forçar a re-renderização e a animação
        <Grid container spacing={4} justifyContent="center" key={gridKey}>
          {personagens.map((personagem, index) => (
            <Grid 
              item 
              xs={12} sm={6} md={4} lg={3} 
              key={personagem._id}
              sx={{ display: 'flex', justifyContent: 'center' }}
              // Aplica a classe de animação e o delay cascata
              className="character-entry" 
              style={{ animationDelay: `${index * 0.05}s` }} 
            >
              <CharacterCard 
                name={personagem.name} 
                imageUrl={personagem.imageUrl} 
              />
            </Grid>
          ))}
        </Grid>
      )}

      {!carregando && !erro && personagens.length === 0 && (
         <Alert severity="info" sx={{ mt: 4 }}>
            Nenhum personagem encontrado.
         </Alert>
       )}
    </Container>
  );
}

export default App;