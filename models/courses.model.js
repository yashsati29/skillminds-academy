const mongoose = require("mongoose");
const schema = require("../schemas/course.schema");

const model = mongoose.model("courses", schema);

module.exports = model;
