'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class beer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  beer.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    style: DataTypes.STRING,
    imageurl: DataTypes.TEXT,
    brewery: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'beer',
  });
  return beer;
};