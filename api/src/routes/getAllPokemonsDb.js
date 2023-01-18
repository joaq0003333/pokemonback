const router = require("express").Router();
const getPokemonsFromDb = require("../controllers/getAllPokemons/getPokemonsFromDb");

router.get("/dataBase", async (req, res) => {
  try {
    const pokemons = await getPokemonsFromDb();
    if(!pokemons.length) throw new Error("No se encontro pokemons en la Db")
    res.json(pokemons);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
