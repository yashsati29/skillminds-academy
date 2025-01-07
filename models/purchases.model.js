const mongoose = require("mongoose");
const schema = require("../schemas/purchase.schema");

const PurchasesModel = mongoose.model("purchases", schema);

module.exports = PurchasesModel;
