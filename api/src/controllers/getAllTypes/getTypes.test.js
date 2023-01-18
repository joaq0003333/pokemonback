const getTypesDb = require("./getTypesDb");

describe("Obtener los tipos de pokemons", () => {
  let types;
  beforeAll(async () => {
    return (types = await getTypesDb());
  });
  it("Los tipos deben de estar en un array", () => {
    expect(types).toBeInstanceOf(Array);
  });
  it("Deben de ser 20 tipos de pokemons", () => {
    expect(types).toHaveLength(20);
  });
});
