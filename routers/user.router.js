const express = require("express");

const userCoursesRouter = require("./user-courses.router");

const router = express.Router();

router.use("/courses", userCoursesRouter);

router.post("/signup", (req, res) => {});
router.post("/signin", (req, res) => {});

module.exports = router;
