const express = require("express");

const userRouter = require("./routers/user.router");
const coursesRouter = require("./routers/courses.router");
const creatorRouter = require("./routers/creator.router");

const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/courses", coursesRouter);
app.use("/api/v1/creator", creatorRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
