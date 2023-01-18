const { Pokemon, Type } = require("../../db");
const getPokemonAPIByName = require("../getPokemonsByName/getPokemonAPIByName.js")
const createPokemon = async ({
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  types,
  image,
}) => {
  if (
    !name ||
    !hp ||
    !attack ||
    !defense ||
    !speed ||
    !height ||
    !weight ||
    !types.length
  )
    throw new Error("No se ingresaron los datos necesarios");
    //el nombre del pokemon creado lo buscamos para q no se repita si es que esta en la API
    const repeated = await getPokemonAPIByName(name)

    if(repeated.name) throw new Error("Nombre de pokemon repetido")

    const existTypes = await Type.findAll()

    if(!existTypes.length) throw new Error("No se puede crear pokemon, porque no estan los tipos de pokemons cargados")
    
    if(image === "" || image === null || image === undefined) image = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/77/latest/20150621181250/Pikachu.png/1200px-Pikachu.png";
    
    const newPokemon = await Pokemon.create({
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    image
  });
                        //[1,2,3]
  await newPokemon.addType(types);

  return newPokemon;
};
module.exports = createPokemon;
