const { Router } = require("express");

const adminCoursesRouter = require("./admin-courses.router");

const router = Router();

router.use("/courses", adminCoursesRouter);

router.post("/signup", (req, res) => {});
router.post("/signin", (req, res) => {});

module.exports = router;
