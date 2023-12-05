import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as routes from "./modules/index.js"

import sequelize from "./config/db.js";
import User from "./modules/user/userModel.js";
import Platform from "./modules/platform/platformModel.js";


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/user", routes.userRouter);
app.use("/platform", routes.platformRouter);
app.use("/game", routes.gameRouter);

const userData = {
  username: "Teste",
  email: "teste@gmail.com",
  password: "test",
};

const platformData = {
  name: "Playstation 4",
};

// Insert new user
User.create(userData)
  .then((user) => {
    console.log("New User Created:", user);
  })
  .catch((error) => {
    console.error("Error creating new user:", error);
  });

Platform.create(platformData)
  .then((platform) => {
    console.log("New platform Created:", platform);
  })
  .catch((error) => {
    console.error("Error creating new user:", error);
  });

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
