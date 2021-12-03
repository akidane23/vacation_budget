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

  Trip.hasMany(User, {
    through: 'UserTrip',
    foreignKey: 'user',
  });
  

module.exports = { UserTrip };
=======
// module.exports = UserTrip;

