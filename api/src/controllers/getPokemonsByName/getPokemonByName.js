const getPokemonDbByName = require("./getPokemonDbByName.js");
const getPokemonAPIByName = require("./getPokemonAPIByName.js");

const getPokemonByName = async (name) => {
try {
  let pokemonArr = []

  let pokemon = await getPokemonAPIByName(name);
  //si al obtener por el nombre indicado en la API me larga un error con la propiedad msg, busca en la base de datos
  if (pokemon.msg) {
    pokemon = await getPokemonDbByName(name)
    pokemon = JSON.parse(JSON.stringify(pokemon));
    pokemon.types = pokemon.types.map(t => t.name);
    pokemonArr.push(pokemon)
    return pokemonArr;
  }
  pokemonArr.push(pokemon)
  return pokemonArr;
} catch (error) {
  throw error
}

};
module.exports = getPokemonByName;
