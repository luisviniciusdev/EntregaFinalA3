import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db.js";

class Platform extends Model {}

Platform.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "Platform",
  }
);

Platform.sync()
  .then(() => {
    console.log("Platform table created or already exists.");
  })
  .catch((error) => {
    console.error("Error during User table synchronization:", error);
  });

export default Platform;
