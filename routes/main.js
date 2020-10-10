const express = require("express");
const router = express.Router();
const path = require("path");

const mainController = require("../controllers/main");

router.get("/checkout", mainController.getCheckoutPage);

router.post("/checkout", mainController.postCheckout);

router.get('/thank-you', mainController.getThankYouPage)

router.get("/", mainController.getIndexPage );

module.exports = router;