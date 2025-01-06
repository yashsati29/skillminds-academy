const { Schema } = require("mongoose");
const { ObjectId } = Schema;

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId,
});

module.exports = courseSchema;
