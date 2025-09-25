// src/components/CharacterCard.jsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function CharacterCard({ imageUrl, name }) {
  // 1. Definimos nossa imagem reserva (placeholder) em uma variável
  const placeholderImage = 'https://dummyimage.com/300x200/cccccc/000000.png&text=Disney';

  // 2. "Plano B": Verificação inteligente para decidir qual URL usar
  // Se a imageUrl existir E começar com 'http', usamos ela. Senão, usamos o placeholder.
  const finalImageUrl = (imageUrl && imageUrl.startsWith('http')) 
    ? imageUrl 
    : placeholderImage;

  return (
    <Card 
      sx={{ 
        width: 250,
        height: 300,
        m: 'auto',
        display: 'flex', 
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={finalImageUrl} // <-- Usamos nossa variável segura aqui
        alt={`Imagem do personagem ${name}`}
        sx={{ objectFit: 'cover' }}
        // 3. "Plano C": Um paraquedas para o caso de o link da API estar quebrado
        onError={(e) => {
          e.target.onerror = null; // Previne um loop infinito de erros
          e.target.src = placeholderImage; // Troca a imagem quebrada pelo placeholder
        }}
      />
      <CardContent sx={{ 
        flexGrow: 1, 
        p: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Typography 
            variant="h6" 
            component="div"
            align="center"
            sx={{ 
                minHeight: '2rem',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;