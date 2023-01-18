const getDetailPokemonDb = require("./getDetailPokemonDb.js");
const createPokemon = require("../postPokemons/createPokemon");
const getPokemonDbByName = require("../getPokemonsByName/getPokemonDbByName");
const deletePokemonDB = require("../deletePokemons/deletePokemonFromDB.js");
const newPokemon = require("../../helpers/pokemonTest")

describe("Obtener un pokemon Especifico por medio del ID pasado como parametro desde la Base de datos", () => {
  let pokemonTest;
  let idThrow = 23;
  beforeAll(async () => {
    await createPokemon(newPokemon);
    const pokemonByName = await getPokemonDbByName("pokemonTest");
    pokemonTest = await getDetailPokemonDb(pokemonByName.id);
  });
  afterAll(async () => {
    await deletePokemonDB(pokemonTest.name);
  });

  it("Debe devolver un objeto ", () => {
    expect(pokemonTest).toBeInstanceOf(Object);
  });

  //Errores
  it("Si no se ingresa un numero debe de arrojar un error", () => {
    expect(
      async () => await getDetailPokemonDb().toThrow("No se ingreso un ID")
    );
  });
  it("Si se ingresa un ID no valido arroja un error notFound", () => {
    expect(async () =>
      getDetailPokemonDb(idThrow).toThrow("No se encontro el pokemon")
    );
  });
});
