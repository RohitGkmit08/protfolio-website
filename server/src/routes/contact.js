const express = require("express");

const { submitContact } = require("../controllers/contactController");
const validate = require("../middleware/validate");
const contactLimiter = require("../middleware/rateLimit");
const contactValidation = require("../validation/contactValidation");

const router = express.Router();

router.post(
  "/",
  contactLimiter,
  contactValidation,
  validate,
  submitContact
);

module.exports = router;