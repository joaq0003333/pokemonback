const getDetailPokemonAPI = require("./getDetailPokemonAPI.js")

describe('Obtener un pokemon Especifico por medio del ID pasado como parametro desde la API', () => {
    let pokemon1;
    let pokemon2;
    let pokemonThrow;
    const numberThrow = parseInt(1 + Math.random() * 20000)
    beforeAll(async() => {
    pokemon1 = await getDetailPokemonAPI(1)
    pokemon2 = await getDetailPokemonAPI(2)
    });
    it('Debe devolver un objeto ', () => {
        expect(pokemon1).toBeInstanceOf(Object)
        expect(pokemon2).toBeInstanceOf(Object)
    });
    
    //Errores
    it("Si no se ingresa un numero debe de arrojar un error", ()=> {
        expect(async ()=> await getDetailPokemonAPI().toThrow("No se ingreso un ID"))
    })
    it("Si se ingresa un numero de ID que no corresponde a los que ya hay arroja un error", ()=> {
        expect(async ()=> await getDetailPokemonAPI(pokemonThrow).toThrow())
    })
});