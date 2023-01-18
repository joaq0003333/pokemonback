const axiosGet = require("../../helpers/axiosGet.js");

const getPokemonAPIByName = async (PokemonName) => {
  const url = `https://pokeapi.co/api/v2/pokemon/`; 
    try {
        const infoApi = await axiosGet(url, PokemonName)

        const pokemon = infoApi.data;
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
    } catch {
        return ({msg: "Not Found"})
    }


};
module.exports = getPokemonAPIByName;
