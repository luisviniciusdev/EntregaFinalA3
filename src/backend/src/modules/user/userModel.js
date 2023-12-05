import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/db.js"

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

User.sync()
  .then(() => {
    console.log("User table created or already exists.");
  })
  .catch((error) => {
    console.error("Error during User table synchronization:", error);
  });

export default User;
