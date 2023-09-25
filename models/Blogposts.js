const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blogposts extends Model { }

Blogposts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postMessage: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogposts',
  }
);

module.exports = Blogposts;
