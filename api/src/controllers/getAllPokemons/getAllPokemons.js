const getPokemonsFromApi = require("./getPokemonsFromApi.js");
const getPokemonsFromDb = require("./getPokemonsFromDb.js");

const getAllPokemons = async () => {
  try {
    //LLamo a los pokemons de la Db y de la API
    const pokemonsApi = await getPokemonsFromApi();
    const pokemonsDb = await getPokemonsFromDb();
    
    const allPokemons = [...pokemonsDb, ...pokemonsApi];
    //Retorno todos los pokemons
    return allPokemons;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = getAllPokemons;