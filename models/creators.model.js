const mongoose = require("mongoose");
const schema = require("../schemas/user.schema");

const model = mongoose.model("creators", schema);

module.exports = model;
