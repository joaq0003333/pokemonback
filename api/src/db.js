require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');


const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

//Pasamos los datos para la conexion de la base de datos.
const dataBase = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  //                                            User      password        HOST  Base de datos
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

//Autenticacion de DB
dataBase.authenticate()
.then(()=>console.log('Conexion a base de datos Exitosa'))
.catch((err)=> console.error("Unable to connect to the database:", err))





const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });



// Injectamos la conexion (dataBase) a todos los modelos
modelDefiners.forEach(model => model(dataBase));



// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(dataBase.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
dataBase.models = Object.fromEntries(capsEntries);



// En dataBase.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

//Modelos Disponibles


const { Pokemon, Type } = dataBase.models;
Pokemon.belongsToMany(Type, {through: "PokemonsTypes"});
Type.belongsToMany(Pokemon, {through : "PokemonsTypes"});


// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
  dataBase,     // para importar la conexión { conn } = require('./db.js');
  ...dataBase.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
};
