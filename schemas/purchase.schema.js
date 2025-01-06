const { Schema } = require("mongoose");
const { ObjectId } = Schema;

const purchaseSchema = new Schema({
  userId: { type: ObjectId, ref: "users" },
  courseId: { type: ObjectId, ref: "courses" },
});

module.exports = purchaseSchema;
