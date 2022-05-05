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
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false
    },
    img:{
      type: DataTypes.STRING,
    },
    Health:{
      type: DataTypes.FLOAT
    },
    strength:{
      type: DataTypes.FLOAT
    },
    defending:{
      type: DataTypes.FLOAT
    },
    velocity:{
      type: DataTypes.FLOAT
    },
    
    height:{
      type: DataTypes.FLOAT
    },
    weight:{
      type: DataTypes.FLOAT
    }
  });
};
