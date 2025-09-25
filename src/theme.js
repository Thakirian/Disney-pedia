import { createTheme } from '@mui/material/styles';

const disneyTheme = createTheme({
  palette: {
    primary: {
      main: '#1a50e5', // Um azul vibrante que remete a um céu mágico
    },
    secondary: {
      main: '#ffcc00', // Um dourado/amarelo que lembra brilho e magia
    },
    background: {
      default: '#f4f7f9', // Um fundo suave e claro
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h3: {
      fontWeight: 700,
      color: '#1a50e5',
      textShadow: '1px 1px 2px rgba(0,0,0,0.1)', // Efeito de sombra no texto
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Sombra no botão
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'translateY(-2px)', // Efeito de "levitar"
            boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.03)',
            boxShadow: '0 8px 15px rgba(0,0,0,0.15)',
          },
        },
      },
    },
  },
});

export default disneyTheme;