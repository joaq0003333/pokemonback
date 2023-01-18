const axios = require("axios");
const axiosGet = require("../../helpers/axiosGet.js");

const getPokemonsFromApi = async () => {
  try {
    const urlAPI = "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0";

    const pokemons = await axiosGet(urlAPI);

    // pokemons.data.results = [{name, url},{name, url}]



    //datos de results.url de la API que me trae todos los datos de los pokemons como promesas
    const dataPokemons = pokemons.map(async (p) => {
      const pokemon = await axios
        .get(p.url, {
          headers: { "Accept-Encoding": "null" },
        })
      //le asigno a "dataPokemons" la data de todos los pokemons
      return pokemon.data;
    });
  
    //Declaro array que va a contener los datos necesarios para pasar al cliente de los pokemons
    let dataNecesaria;
    //hago un await al array de promesas para que pueda aguantar antes de mandar la data hacia "dataNecesaria"
    await Promise.all(dataPokemons)
      .then((arrayPokemons) => {
        dataNecesaria = arrayPokemons.map((pokemon) => ({
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
        }));
        //obtengo el error por si algo falla en alguna de las promesas
      })
    return dataNecesaria;
  } catch (error) {
    throw new Error(error.message)
  }
};
module.exports = getPokemonsFromApi;
