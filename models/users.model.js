const mongoose = require("mongoose");
const schema = require("../schemas/user.schema");

const UsersModel = mongoose.model("users", schema);

module.exports = UsersModel;
