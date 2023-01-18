const { default: axios } = require("axios");
const axiosGet = require("../../helpers/axiosGet.js");
const getDetailPokemonAPI = async (id) => {
  if (!id) throw new Error("No se ingreso un ID");
  const url = `https://pokeapi.co/api/v2/pokemon/`;
  const info = await axiosGet(url, id);
  //Toda la data que me trae el pokemon
  const pokemon = info.data;
  //solo saco la info necesaria
  const infoEspecific = {
    id: pokemon.id,
    name: pokemon.name,
    hp: pokemon.stats[0].base_stat,
    attack: pokemon.stats[1].base_stat,
    defense: pokemon.stats[2].base_stat,
    speed: pokemon.stats[5].base_stat,
    height: pokemon.height,
    weight: pokemon.weight,
    image: pokemon.sprites.front_default,
    types: pokemon.types.map((t) => t.type.name),
    is_default: pokemon.is_default
  };
  return infoEspecific;
};
module.exports = getDetailPokemonAPI;
