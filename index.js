const express = require("express");
const { connect } = require("mongoose");

const userRouter = require("./routers/user.router");

const app = express();

app.use("/api/v1/user", userRouter);

connect(
  "mongodb+srv://admin:Test%401234@cluster0.vr1yl.mongodb.net/skillminds-academy"
)
  .then(() =>
    app.listen(3000, () => console.log("Server is running on port 3000"))
  )
  .catch(() => console.log("Failed to connect to the MongoDB database!"));
