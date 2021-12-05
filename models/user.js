const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcryptjs")

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    // hooks: {
    //   beforeCreate:  async function (user, options) {
    //     console.log(user.password + " from before create")
    //     user.password = await bcrypt.hash(user.password, bcrypt.genSalt());
    //   },
    //   beforeBulkCreate: async function (user, options) {
    //     console.log(user.password)
    //     user.password = await bcrypt.hash(user.password, bcrypt.getSalt());
    //   }
    // }
  }
);

// User.beforeCreate((user, options) => {
//   console.log("before create fired")
//   user.username = user.username+"hello";
//   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync());
// })

// User.beforeBulkCreate((user, options) => {
//   console.log("before create fired")
//   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync());
// })

module.exports = User;