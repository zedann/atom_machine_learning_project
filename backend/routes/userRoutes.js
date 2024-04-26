const express = require("express");
const userService = require("./../services/userService");
const authService = require("./../services/authService");

const router = express.Router();

router.post("/signup", authService.signup);
router.post("/login", authService.login);
router.get("/logout", authService.logout);

// router.post("/forgotPassword", authService.forgotPassword);
// router.patch("/resetPassword/:token", authService.resetPassword);

// Protect all routes after this middleware
// router.use(authService.protect);

module.exports = router;
