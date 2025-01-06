const mongoose = require("mongoose");
const schema = require("../schemas/purchase.schema");

const purchasesModel = mongoose.model("purchases", schema);

module.exports = purchasesModel;
