const { Pokemon } = require('../../db')

const deletePokemonDB = async (name) => {
    try {
        await Pokemon.destroy({
            where: {name}
        })
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = deletePokemonDB