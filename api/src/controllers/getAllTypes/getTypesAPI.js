const axiosGet = require("../../helpers/axiosGet.js")

const getTypesAPI = async ()=>{
    const url = "https://pokeapi.co/api/v2/type"
    const allTypes = await axiosGet(url);
    return allTypes
}

module.exports = getTypesAPI;