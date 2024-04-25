const express = require("express");

const router = express.Router();

const userService = require("../services/userService");

router.route('/').post(userService.createUser);

module.exports = router;
