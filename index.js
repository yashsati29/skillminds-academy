const express = require("express");
const app = express();

const userRouter = require("./routers/user.router");
app.use("/api/v1/user", userRouter);

const coursesRouter = require("./routers/courses.router");
app.use("/api/v1/courses", coursesRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
