const mongoose = require("mongoose");
const schema = require("../schemas/course.schema");

const CoursesModel = mongoose.model("courses", schema);

module.exports = CoursesModel;
