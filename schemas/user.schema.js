const { Schema } = require("mongoose");

const UserSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
  isCreator: Boolean,
});

module.exports = UserSchema;
