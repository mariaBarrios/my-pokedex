export const getPokemonList = () => {
  return fetch("https://pokeapi.co/api/v2/pokemon").then((data) => data.json());
};

export const getPokemonDetail = (id: number) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data) => {
    if (data.status >= 400) {
      throw new Error(data.statusText);
    }
    return data.json();
  });
};
