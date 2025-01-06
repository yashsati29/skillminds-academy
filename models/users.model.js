const mongoose = require("mongoose");
const schema = require("../schemas/user.schema");

const usersModel = mongoose.model("users", schema);

module.exports = usersModel;
