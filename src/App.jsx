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
        {/* Contêiner para a logo e o nome do projeto */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2, // Espaçamento entre os elementos
            mb: 2 // Margem inferior
          }}
        >
          {/* Logo */}
          <Box 
            component="img"
            sx={{ 
              height: 100, // Altura ajustada para combinar com o texto
            }}
            alt="Disney Logo"
            src={logo}
          />
          {/* Nome do projeto */}
          <Typography variant="h3" component="h1" sx={{ color: '#0041C2' }}>
            Enciclopédia Mágica Disney
          </Typography>
        </Box>
        <SearchBar />
      </Box>

      {/* 1. Exibir loading quando estiver carregando */}
      {carregando && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {/* 2. Exibir erro se houver um */}
      {!carregando && erro && (
        <Alert severity="error" sx={{ mt: 4 }}>
          {erro}
        </Alert>
      )}

      {/* 3. Exibir mensagem de "Nenhum resultado" se a lista estiver vazia */}
      {!carregando && !erro && personagens.length === 0 && (
         <Alert severity="info" sx={{ mt: 4 }}>
            Nenhum personagem encontrado.
         </Alert>
       )}

      {/* 4. Renderizar a grade de personagens quando os dados estiverem disponíveis */}
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
    </Container>
  );
}

export default App;