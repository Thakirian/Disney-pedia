import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import disneyTheme from './theme.js';
import './index.css';
import { SearchProvider } from './contexts/SearchContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={disneyTheme}>
      <CssBaseline />
      <SearchProvider>
        <App />
      </SearchProvider>
    </ThemeProvider>
  </React.StrictMode>,
)