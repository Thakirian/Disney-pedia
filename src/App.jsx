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

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
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
          <Typography variant="h3" component="h1" sx={{ color: '#1976D2' }}>
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
        <Grid container spacing={4} justifyContent="center">
          {personagens.map((personagem) => (
            <Grid 
              item 
              xs={12} sm={6} md={4} lg={3} 
              key={personagem._id}
              sx={{ display: 'flex', justifyContent: 'center' }}
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