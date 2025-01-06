const mongoose = require("mongoose");
const schema = require("../schemas/user.schema");

const model = mongoose.model("users", schema);

module.exports = model;
