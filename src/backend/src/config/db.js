import { Sequelize } from "sequelize";
import sqlite3 from "sqlite3";

export const db = new sqlite3.Database("C:/Users/Luis/Downloads/luvicao/EntregaFinalA3/src/backend/src/mygamelist.db");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "C:/Users/Luis/Downloads/luvicao/EntregaFinalA3/src/backend/src/mygamelist.db",
});

export default sequelize;
