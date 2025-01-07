const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { HASH_SALT_ROUNDS, JWT_TOKEN_SECRET } = require("../config");

const userCoursesRouter = require("./user-courses.router");
const UsersModel = require("../models/users.model");

const router = express.Router();

router.use("/courses", userCoursesRouter);

router.post("/signup", (req, res) => {
  const { email, password, firstName, lastName, isCreator } = req.body;
  const passwordHash = bcrypt.hashSync(password, Number(HASH_SALT_ROUNDS));

  const user = new UsersModel({
    firstName,
    lastName,
    email,
    password: passwordHash,
    isCreator,
  });

  user
    .save()
    .then(() => res.status(200).json({ message: "Signup successful!" }))
    .catch(() => res.status(411).json({ message: "Signup failed!" }));
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  UsersModel.findOne({ email }, (err, user) => {
    if (err) return res.status(401).message({ message: "Invalid email!" });

    const doesPasswordMatch = bcrypt.compareSync(password, user.password);

    if (doesPasswordMatch) {
      const token = jwt.sign({ userId: user._id }, JWT_TOKEN_SECRET);

      return res.status(200).json({ token, message: "Signin successful!" });
    } else return res.status(401).json({ message: "Invalid password!" });
  });
});

module.exports = router;
