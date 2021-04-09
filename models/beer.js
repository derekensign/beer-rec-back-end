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
    style: DataTypes.STRING,
    brewery: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'beer',
  });
  return beer;
};