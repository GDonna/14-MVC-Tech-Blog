const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Posts extends Model {}

Posts.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postMessage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Posts",
  }
);

module.exports = Posts;
