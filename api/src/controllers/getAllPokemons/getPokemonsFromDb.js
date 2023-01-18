const { Pokemon, Type } = require("../../db.js");

const getPokemonsFromDb = async () => {
  try {
    //BUsco todos los pokemons en la Db
    let infoDb = await Pokemon.findAll({
      include: {
        //Tabla
        attributes: ["name"],
        model: Type,
        //Tabla intermedia
        through: {
          attributes: [],
        },
      },
    });
    infoDb = await infoDb.map( pokemon => {
      pokemon = JSON.parse(JSON.stringify(pokemon));
      pokemon.types = pokemon.types.map(t => t.name);
      return pokemon;
  })
  
    return infoDb;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = getPokemonsFromDb;
