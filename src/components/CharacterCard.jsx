import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function CharacterCard({ imageUrl, name }) {
  return (
    <Card sx={{ maxWidth: 300, m: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={`Imagem do personagem ${name}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;