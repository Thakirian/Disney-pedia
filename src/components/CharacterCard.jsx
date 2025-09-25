// src/components/CharacterCard.jsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function CharacterCard({ imageUrl, name }) {
  return (
    <Card 
      sx={{ 
        width: 250, // Define uma largura fixa para todos os cards
        height: 300, // Define uma altura fixa para todos os cards
        m: 'auto',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between' 
      }}
    >
      <CardMedia
        component="img"
        height="200" // Altura fixa da imagem
        image={imageUrl}
        alt={`Imagem do personagem ${name}`}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, p: 1 }}>
        <Typography 
            variant="h6" 
            component="div"
            align="center"
            sx={{ 
                minHeight: '2rem',
                // Força o texto a não quebrar a linha para manter a largura
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