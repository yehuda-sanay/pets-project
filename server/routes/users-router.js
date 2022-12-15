const express = require("express");
const {
  signup,
  login,
  verifyToken,
  getUser,
  refreshToken,
  logout,
  getUsers,
} = require("../controllers/user-ctrl");

const usersRouter = express.Router();

usersRouter.get("/getusers",getUsers)
usersRouter.post("/signup", signup);
usersRouter.post("/login", login);
usersRouter.get("/user", verifyToken, getUser);
usersRouter.get("/refresh", refreshToken, verifyToken, getUser);
usersRouter.post("/logout", verifyToken, logout);
module.exports = usersRouter;