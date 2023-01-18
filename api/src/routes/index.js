const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getAllPokemons = require("./Pokemons.js");
const getPokemonById = require("./getPokemonById.js");
const postPokemon = require("./postPokemon.js")
const getAllPokemonsDb = require("./getAllPokemonsDb.js")
const deletePokemonsDb = require('./deletePokemon')
const Types = require("./Types.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//Obtenemos todos los pokemons => la ruta solo trae 20
router.use("/pokemons", [
    getAllPokemonsDb,
    getAllPokemons,
    getPokemonById,
    postPokemon,
    deletePokemonsDb
]);

router.use('/types', Types)

module.exports = router;
