const express = require("express");
const userRouter = express.Router();

userRouter.get("/purchases", (req, res) => {});

userRouter.post("/signup", (req, res) => {});
userRouter.post("/login", (req, res) => {});

module.exports = userRouter;
