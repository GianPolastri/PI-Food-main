const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('diet', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [8, 35]
        }
    })
}












// ID. *
// Nombre. *