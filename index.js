const express = require("express");

const userRouter = require("./routers/user.router");

const app = express();

app.use("/api/v1/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
