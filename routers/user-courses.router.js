const { Router } = require("express");
const jwt = require("jsonwebtoken");

const { JWT_TOKEN_SECRET } = require("../config");

const authMiddleware = require("../middlewares/auth.middleware");
const CoursesModel = require("../models/courses.model");
const UsersModel = require("../models/users.model");

const router = Router();

router.get("/view", (req, res) => {
  const token = req.headers.token;

  const findCourses = async (query) => {
    const courses = await CoursesModel.find(query);

    if (courses) return res.status(200).json({ courses });
    else return res.status(200).json({ message: "Failed to fetch courses!" });
  };

  if (!token) findCourses();
  else {
    const { userId: creatorId } = jwt.verify(token, JWT_TOKEN_SECRET);
    findCourses({ creatorId });
  }
});

router.use(authMiddleware);

router.get("/purchased", (req, res) => {});

router.post("/create", async (req, res) => {
  const {
    body: { title, description, price, imageUrl },
    userId,
  } = req;

  const user = await UsersModel.findById({ _id: userId });

  if (!user || !user.isCreator)
    return res.status(400).json({ message: "Unauthorised access!" });

  const course = new CoursesModel({
    title,
    description,
    price,
    imageUrl,
    creatorId: userId,
  });

  await course.save();

  return res
    .status(200)
    .json({ message: "Your course has been created successfully!" });
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
