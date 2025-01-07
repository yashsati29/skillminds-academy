const { Schema } = require("mongoose");
const { ObjectId } = Schema;

const CourseSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  imageUrl: String,
  creatorId: { type: ObjectId, ref: "users", required: true },
});

module.exports = CourseSchema;
