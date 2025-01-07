const { Router } = require("express");
const jwt = require("jsonwebtoken");

const { JWT_TOKEN_SECRET } = require("../config");

const authMiddleware = require("../middlewares/auth.middleware");
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

router.use(authMiddleware);

router.get("/purchased", (req, res) => {});

router.post("/create", (req, res) => {
  const {
    body: { title, description, price, imageUrl },
    userId,
  } = req;

  const course = new CoursesModel({
    title,
    description,
    price,
    imageUrl,
    creatorId: userId,
  });

  course
    .save()
    .then(() =>
      res
        .status(200)
        .json({ message: "Your course has been created successfully!" })
    )
    .catch(() =>
      res
        .status(400)
        .json({ message: "Failed to create your course, please try again!" })
    );
});

router.post("/purchase", (req, res) => {});

router.put("/update", (req, res) => {});

router.delete("/delete", (req, res) => {
  const {
    userId: creatorId,
    body: { courseId },
  } = req;

  CoursesModel.deleteOne({ creatorId, _id: courseId })
    .then(() =>
      res.status(200).json({ message: "Course deleted successfully!" })
    )
    .catch(() =>
      res
        .status(400)
        .json({ message: "Failed to delete course, please try again!" })
    );
});

module.exports = router;
