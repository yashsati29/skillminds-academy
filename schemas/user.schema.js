const { Schema } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

module.exports = userSchema;
