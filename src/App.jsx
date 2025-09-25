import { useContext, useEffect } from 'react';
import { Container, Grid, Typography, Box, CircularProgress, Alert } from '@mui/material';
import CharacterCard from './components/CharacterCard';
import SearchBar from './components/SearchBar';
import { SearchContext } from './contexts/SearchContext';
import './App.css';

function App() {
  const { personagens, carregando, erro, buscarPersonagens } = useContext(SearchContext);

  useEffect(() => {
    buscarPersonagens(''); 
  }, [buscarPersonagens]); // Adiciona 'buscarPersonagens' para seguir as regras do React

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Enciclopédia Mágica Disney
        </Typography>
        <SearchBar />
      </Box>

      {carregando && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress color="primary" />
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
          <Grid item xs={12} sm={6} md={4} lg={3} key={personagem._id}>
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