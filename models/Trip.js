const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init(
  {
<<<<<<< HEAD
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
=======

       trip1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 125]
        }
      },
       trip2: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 125]
        }
      },
       trip3: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 125]
        }
      },

//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     location: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },

>>>>>>> baa7707bfe1710fdbb03529aaa87ff2c97b95943
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Trip'
  }
);

<<<<<<< HEAD
module.exports = Trip;
=======

Trip.belongsTo(User, {
    foreginKey: {
        allowNull: false
    },
    onDelete: 'cascade',
});

module.exports = { Trip };
=======
// module.exports = Trip;

>>>>>>> baa7707bfe1710fdbb03529aaa87ff2c97b95943
