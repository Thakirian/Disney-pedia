import { createTheme } from '@mui/material/styles';

const disneyTheme = createTheme({
  palette: {
    primary: {
<<<<<<< Updated upstream
      main: '#1a50e5', // Um azul vibrante que remete a um céu mágico
    },
    secondary: {
      main: '#ffcc00', // Um dourado/amarelo que lembra brilho e magia
    },
    background: {
      default: '#f4f7f9', // Um fundo suave e claro
      paper: '#ffffff',
=======
      main: '#0072e1', // Cor principal do tema, um azul clássico da Disney
    },
    secondary: {
      main: '#ff6600', // Um laranja vibrante para contraste
    },
    background: {
      default: '#f0f2f5', // Um cinza claro para o fundo
      paper: '#ffffff', // Branco para os elementos de papel, como os cards
>>>>>>> Stashed changes
    },
  },
  typography: {
    fontFamily: [
<<<<<<< Updated upstream
      'Roboto',
=======
      'Roboto', // Uma fonte padrão limpa
>>>>>>> Stashed changes
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h3: {
<<<<<<< Updated upstream
      fontWeight: 700,
      color: '#1a50e5',
      textShadow: '1px 1px 2px rgba(0,0,0,0.1)', // Efeito de sombra no texto
=======
      fontWeight: 700, // Deixa o título mais forte
      color: '#0072e1', // Aplica a cor do tema no título
>>>>>>> Stashed changes
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
<<<<<<< Updated upstream
          borderRadius: 20,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Sombra no botão
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'translateY(-2px)', // Efeito de "levitar"
            boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
          },
=======
          borderRadius: 20, // Borda arredondada para um visual mais suave
>>>>>>> Stashed changes
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
<<<<<<< Updated upstream
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.03)',
            boxShadow: '0 8px 15px rgba(0,0,0,0.15)',
=======
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Sombra mais suave
          transition: 'transform 0.2s', // Adiciona uma transição para o hover
          '&:hover': {
            transform: 'scale(1.03)', // Efeito de zoom no hover
>>>>>>> Stashed changes
          },
        },
      },
    },
  },
});

export default disneyTheme;