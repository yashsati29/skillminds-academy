const mongoose = require("mongoose");
const schema = require("../schemas/course.schema");

const coursesModel = mongoose.model("courses", schema);

module.exports = coursesModel;
