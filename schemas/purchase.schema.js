const { Schema } = require("mongoose");
const { ObjectId } = Schema;

const PurchaseSchema = new Schema({
  userId: { type: ObjectId, ref: "users" },
  courseId: { type: ObjectId, ref: "courses" },
});

module.exports = PurchaseSchema;
