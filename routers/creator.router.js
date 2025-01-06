const { Router } = require("express");

const creatorCoursesRouter = require("./creator-courses.router");

const router = Router();

router.use("/courses", creatorCoursesRouter);

router.post("/signup", (req, res) => {});
router.post("/signin", (req, res) => {});

module.exports = router;
