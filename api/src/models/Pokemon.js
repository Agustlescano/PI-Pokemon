const { DataTypes } = require('sequelize');
const { create } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    img:{
      type: DataTypes.STRING,
    },
    Health:{
      type: DataTypes.INTEGER
    },
    strength:{
      type: DataTypes.INTEGER
    },
    defending:{
      type: DataTypes.INTEGER
    },
    velocity:{
      type: DataTypes.INTEGER
    },
    
    height:{
      type: DataTypes.INTEGER
    },
    weight:{
      type: DataTypes.INTEGER
    }
  });
};
