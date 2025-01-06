const { Schema } = require("mongoose");
const { ObjectId } = Schema;

const purchaseSchema = new Schema({
  userId: ObjectId,
  courseId: ObjectId,
});

module.exports = purchaseSchema;
