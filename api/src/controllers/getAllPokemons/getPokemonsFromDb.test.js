const getPokemonsFromDb = require("./getPokemonsFromDb.js");

describe("Obtener pokemons desde la BD", () => {
  let pokemons;
  beforeAll(async () => {
    return (pokemons = await getPokemonsFromDb());
  });

  it("debe de retornar un array", () => {
    expect(pokemons).toBeInstanceOf(Array);
  });
});
