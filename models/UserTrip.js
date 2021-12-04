const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserTrip extends Model {}

UserTrip.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      trip_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'trip',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user_trip',
    }
  );
<<<<<<< HEAD
  
module.exports = UserTrip;
=======

  Trip.hasMany(User, {
    through: 'UserTrip',
    foreignKey: 'user',
  });
  

module.exports = { UserTrip };
=======
// module.exports = UserTrip;

>>>>>>> baa7707bfe1710fdbb03529aaa87ff2c97b95943
