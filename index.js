const express = require("express");
const app = express();

const userRouter = require("./user.router");
app.use("/user", userRouter);

app.get("/courses/view", (req, res) => {});
app.post("/courses/purchase", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
