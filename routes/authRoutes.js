const express = require("express");
const authController = require("./../controllers/authController");
const { joiValidation } = require("../utils/joiValidation");
const { signupSchema, loginSchema } = require("../schema/authSchema");

const router = express.Router();

router.post("/signup", joiValidation(signupSchema), authController.signup);
router.post("/login", joiValidation(loginSchema), authController.login);

module.exports = router;
