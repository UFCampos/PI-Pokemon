const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0
      }
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Libre"
    },
  }, {
    timestamps: false
  });
};
