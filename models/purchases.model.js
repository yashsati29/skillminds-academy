const mongoose = require("mongoose");
const schema = require("../schemas/purchase.schema");

const model = mongoose.model("purchases", schema);

module.exports = model;
