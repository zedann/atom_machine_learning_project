const express = require("express");
const router = express.Router({ mergeParams: true });

const exmineService = require("../services/examineService");
const examinValidator = require("../utils/validators/examineValidator");
const authService = require("../services/authService");

const {
  createExamine,
  getExamine,
  getAllExamine,
  updateExamine,
  deleteExamine,
} = exmineService;

router.route("/").post(createExamine).get(authService.protect, getAllExamine);
router
  .route("/:id")
  .get(getExamine)
  .patch(authService.protect, updateExamine)
  .delete(authService.protect, deleteExamine);

module.exports = router;
