const express = require("express");
const router = express.Router({ mergeParams: true });

const exmineService = require("../services/examineService");
const examinValidator = require("../utils/validators/examineValidator");



const { createExamine  , getExamine, getAllExamine, updateExamine, deleteExamine} = exmineService;

router.route("/").post(createExamine).get(getAllExamine);

