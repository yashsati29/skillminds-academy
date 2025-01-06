const express = require("express");
const app = express();

app.post("/login", (req, res) => {});
app.post("/signup", (req, res) => {});
app.get("/courses/view", (req, res) => {});
app.post("/courses/purchase", (req, res) => {});
app.get("/courses/own", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
