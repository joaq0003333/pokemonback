const router = require("express").Router();
const createPokemon = require("../controllers/postPokemons/createPokemon.js")

router.post("/", async (req, res) => {
    try {
        const pokemon = req.body;
        await createPokemon(pokemon)
        
        res.status(201).send(pokemon)
    } catch (error) {
        res.status(400).json(error.message)
    }

});
module.exports = router;
