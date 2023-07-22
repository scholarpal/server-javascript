'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  School.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    slug: DataTypes.STRING,
    photo: DataTypes.TEXT,
    name: DataTypes.STRING,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'School',
  });
  return School;
};