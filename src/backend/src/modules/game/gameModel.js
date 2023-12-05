import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

class Game extends Model { }

Game.init(
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
        platform: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        first_category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        second_category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize,
        modelName: "Game",
    }
);

Game.sync()
    .then(() => {
        console.log("Game table created or already exists.");
    })
    .catch((error) => {
        console.error("Error during User table synchronization:", error);
    });

export default Game;
