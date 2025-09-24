function CharacterCard({ imageUrl, name }) {
  return (
    <div className="character-card">
      <img src={imageUrl} alt={`Imagem do personagem ${name}`} width="150" />
      <h3>{name}</h3>
    </div>
  );
}

export default CharacterCard;