const router = require("express").Router();
const getDetailPokemon = require("../controllers/getPokemonsByID/getDetailPokemon.js");
//Viene el ID por parametro
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    //hago la peticion a la APi o DB dependiendo del ID con la funcion getDetailPokemon()
    const pokemon = await getDetailPokemon(id);
    res.json(pokemon);
  } catch (error) {
    //agarro el error si es que surge
    res.status(400).send(error.message);
  }
});

module.exports = router;
