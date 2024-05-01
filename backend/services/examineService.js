const factoryHandler = require("./factoryService");
const Examine = require("../models/examineModel");

exports.createExamine = factoryHandler.createOne(Examine);
exports.getExamine = factoryHandler.getOne(Examine);
exports.getAllExamine = factoryHandler.getAll(Examine);
exports.updateExamine = factoryHandler.updateOne(Examine);
exports.deleteExamine = factoryHandler.deleteOne(Examine);
