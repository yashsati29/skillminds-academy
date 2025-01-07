require("dotenv").config();
const express = require("express");
const { connect } = require("mongoose");

const { MONGODB_CONNECTION_STRING } = require("./config");
const userRouter = require("./routers/user.router");

const app = express();

app.use(express.json());
app.use("/api/v1/user", userRouter);

connect(MONGODB_CONNECTION_STRING)
  .then(() =>
    app.listen(3000, () => console.log("Server is running on port 3000"))
  )
  .catch(() => console.log("Failed to connect to the MongoDB database!"));
