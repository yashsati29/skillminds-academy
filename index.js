const express = require("express");
const app = express();

const userRouter = require("./user.router");
app.use("/user", userRouter);

const coursesRouter = require("./courses.router");
app.use("/courses", coursesRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
