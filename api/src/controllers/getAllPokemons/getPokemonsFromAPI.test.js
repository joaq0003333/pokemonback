const getPokemonsFromApi = require("./getPokemonsFromApi.js");
const pokemonsAPI = require("../../helpers/pokemonsAPI.js");

describe("Obtener Pokemons desde la API con getPokemonsAPI", () => {
  let pokemons;
  beforeAll(async () => {
    return (pokemons = await getPokemonsFromApi());
  });
  it("debe de retornar un array", () => {
    expect(pokemons).toBeInstanceOf(Array);
  });

  it("Debe ser igual a los siguientes 40 pokemons", () => {
    expect(pokemons).toEqual(pokemonsAPI);
  });

  it("Deben retornar 40 pokemons", () => {
    expect(pokemons).toHaveLength(40);
  });
});
