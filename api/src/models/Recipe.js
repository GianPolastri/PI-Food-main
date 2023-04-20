const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    steps: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
    },
    created:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  });
};





// ID. *
// Nombre. *
// Imagen. *
// Resumen del plato. *
// Nivel de comida saludable (health score). *
// Paso a paso. *