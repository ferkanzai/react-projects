export const characterMapper = (data) => {
  if (!data || !Object.keys(data).length) {
    return null;
  }

  return {
    name: data.name,
    status: data.status,
    species: data.species,
    location: { name: data.location.name },
    image: data.image,
  };
};
