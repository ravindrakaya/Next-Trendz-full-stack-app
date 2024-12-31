const express = require("express");

const paymentSection = require("./paymentSection");

const router = express.Router();

router.post("/payment", paymentSection);

module.exports = router;
