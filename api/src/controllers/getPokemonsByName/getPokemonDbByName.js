const { Pokemon, Type } = require("../../db");

const getPokemonDbByName = async (name) => {
  const pokemon = await Pokemon.findOne({
    where: { name },
    include: {
      model: Type,
      through: {
        attributes: [],
      },
    },
  });
  if (pokemon === null) throw new Error("Not found by the name indicated");
  return pokemon;
};

module.exports = getPokemonDbByName;
