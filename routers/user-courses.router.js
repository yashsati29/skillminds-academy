const { Router } = require("express");
const jwt = require("jsonwebtoken");

const { JWT_TOKEN_SECRET } = require("../config");
const CoursesModel = require("../models/courses.model");

const router = Router();

router.get("/view", (req, res) => {
  const token = req.headers.token;
  const findCourses = (query) =>
    CoursesModel.find(query)
      .then((courses) =>
        res.status(200).json({ courses, message: "Fetched all courses!" })
      )
      .catch(() =>
        res.status(500).json({
          message: "Error while fetching the courses, please try again!",
        })
      );

  if (!token) findCourses();
  else {
    const { userId: creatorId } = jwt.verify(token, JWT_TOKEN_SECRET);
    findCourses({ creatorId });
  }
});

router.get("/purchased", (req, res) => {});

router.post("/purchase", (req, res) => {});

router.put("/update", (req, res) => {});

router.delete("/delete", (req, res) => {});

module.exports = router;
