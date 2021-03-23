function CharacterCard({ name, status, species, location, image }) {
  return (
    <div data-testid='character-card'>
      <h3>{name}</h3>
      <p>{status}</p>
      <img src={image} alt={`${name}`} />
      <p>{location.name}</p>
      <p>{species}</p>
    </div>
  );
}

export default CharacterCard;
