const { Schema } = require("mongoose");
const { ObjectId } = Schema;

const PurchaseSchema = new Schema({
  userId: { type: ObjectId, ref: "users", unique: true, required: true },
  courseId: { type: ObjectId, ref: "courses", unique: true, required: true },
});

module.exports = PurchaseSchema;
