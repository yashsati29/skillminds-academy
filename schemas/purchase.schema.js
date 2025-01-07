const { Schema } = require("mongoose");
const { ObjectId } = Schema;

const PurchaseSchema = new Schema({
  userId: { type: ObjectId, ref: "users", required: true },
  courseId: { type: ObjectId, ref: "courses", required: true },
});

module.exports = PurchaseSchema;
