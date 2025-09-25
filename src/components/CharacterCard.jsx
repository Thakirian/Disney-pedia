import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function CharacterCard({ imageUrl, name }) {
  return (
    <Card 
      sx={{ 
        maxWidth: 300, 
        m: 'auto', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between' 
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={`Imagem do personagem ${name}`}
        sx={{ 
          objectFit: 'cover',
          // O background é um fallback caso a imagem falhe
          background: 'url(https://via.placeholder.com/200x200.png?text=Imagem+Nao+Encontrada) center / cover no-repeat'
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography 
            gutterBottom 
            variant="h6" 
            component="div"
            align="center"
            sx={{ minHeight: '3rem' }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;