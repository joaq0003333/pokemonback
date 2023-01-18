const getTypesAPI = require("./getTypesAPI.js");
const { Type } = require("../../db");

const getTypesDb = async () => {
  const typesDb = await Type.findAll();
  if (!typesDb.length) {
    try {
      //Array de tipos de pokeons con objetos [{name, url},{name, url}]
      const typesAPI = await getTypesAPI();
      const namesTypes = typesAPI.map((t) => ({name: t.name}));
      await Type.bulkCreate(namesTypes);
      
      return namesTypes;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  return typesDb;
};
module.exports = getTypesDb;
