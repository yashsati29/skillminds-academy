const express = require("express");
const bcrypt = require("bcrypt");

const { HASH_SALT_ROUNDS } = require("../config");

const userCoursesRouter = require("./user-courses.router");
const UsersModel = require("../models/users.model");

const router = express.Router();

router.use("/courses", userCoursesRouter);

router.post("/signup", (req, res) => {
  const { email, password, firstName, lastName, isCreator } = req.body;
  const passwordHash = bcrypt.hashSync(password, HASH_SALT_ROUNDS);

  const user = new UsersModel({
    email,
    password: passwordHash,
    firstName,
    lastName,
    isCreator,
  });

  user
    .save()
    .then(() => res.status(200).json({ message: "Signup successful!" }))
    .catch(() => res.status(411).json({ message: "Signup failed!" }));
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
});

module.exports = router;
