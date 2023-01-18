const router = require("express").Router();
const { default: axios } = require("axios");
const getTypesDb = require("../controllers/getAllTypes/getTypesDb.js")



router.get("/", async (req, res)=>{
    try {
        const types = await getTypesDb();
        res.status(201).json(types)
    } catch (error) {
        res.status(400).send(error.message)
    }
})


module.exports = router