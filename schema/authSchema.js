const Joi = require("joi");

const signupSchema = Joi.object().keys({
  username: Joi.string().required().min(4).max(8).messages({
    "string.base": "Username must be string type",
    "string.min": "Invalid username",
    "string.max": "Invalid username",
    "string.empty": "Username is a required field",
  }),
  password: Joi.string().required().min(4).max(8).messages({
    "string.base": "Password must be string type",
    "string.min": "Invalid password",
    "string.max": "Invalid password",
    "string.empty": "Password is a required field",
  }),
  email: Joi.string().email().required().messages({
    "string.base": "Email must be string type",
    "string.email": "Email must be a valid email address",
    "string.empty": "Email is a required field",
    "any.required": "Email is a required field",
  }),
  avatarColor: Joi.string().required().messages({
    "any.required": "Avatar color is required",
  }),
  avatarImage: Joi.string().required().messages({
    "any.required": "Avatar image is required",
  }),
});

const loginSchema = Joi.object().keys({
  username: Joi.string().required().min(4).max(8).messages({
    "string.base": "Username must be of type string",
    "string.min": "Invalid username",
    "string.max": "Invalid username",
    "string.empty": "Username is a required field",
  }),
  password: Joi.string().required().min(4).max(8).messages({
    "string.base": "Password must be of type string",
    "string.min": "Invalid password",
    "string.max": "Invalid password",
    "string.empty": "Password is a required field",
  }),
});

const emailSchema = Joi.object().keys({
  email: Joi.string().email().required().messages({
    "string.base": "Field must be valid",
    "string.required": "Field must be valid",
    "string.email": "Field must be valid",
  }),
});

const passwordSchema = Joi.object().keys({
  password: Joi.string().required().min(4).max(8).messages({
    "string.base": "Password should be of type string",
    "string.min": "Invalid password",
    "string.max": "Invalid password",
    "string.empty": "Password is a required field",
  }),
  passwordConfirm: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.only": "Passwords should match",
    "any.required": "Confirm password is a required field",
  }),
});

module.exports = { signupSchema, loginSchema, emailSchema, passwordSchema };
