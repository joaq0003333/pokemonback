const router = require("express").Router();
const deletePokemonFromDB = require('../controllers/deletePokemons/deletePokemonFromDB')

router.delete("/", async (req, res) => {
    try {
        let {name} = req.query
        await deletePokemonFromDB(name)
        res.send('Se elimino pokemon correctamente')
    } catch (error) {
        res.status(400).send(error.message)
    }
});

module.exports = router;
