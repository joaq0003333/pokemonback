const { DataTypes } = require("sequelize");
module.exports = (dataBase) => {
    //Definimos un modelo que sera una tabla en nuestra base de datos
  dataBase.define("type", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 20],
        notNull: {
          msg: "Please enter your name",
        },
      }
    },
  },{
    timestamps: false
  });
};
