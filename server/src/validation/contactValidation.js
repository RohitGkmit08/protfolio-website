const { body } = require("express-validator");

const contactValidation = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .trim()
    .notEmpty()
    .escape()
    .withMessage("Name is required"),

  body("email")
    .isString()
    .withMessage("Email must be a string")
    .trim()
    .isEmail()
    .withMessage("Please enter a valid email address"),

  body("subject")
    .isString()
    .withMessage("Subject must be a string")
    .trim()
    .notEmpty()
    .escape()
    .withMessage("Subject is required"),

  body("message")
    .isString()
    .withMessage("Message must be a string")
    .trim()
    .notEmpty()
    .escape()
    .withMessage("Message is required"),
];

module.exports = contactValidation;