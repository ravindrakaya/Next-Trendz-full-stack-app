const express = require("express");

const router = express.Router();

router.post("/place-order", (req, res) => {
  const cartItems = req.body;
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = Math.round((totalPrice * 1) / 100);

  const charges = Math.round(discount * 0.5);

  const savings = discount + charges;

  const totalAmount = totalPrice - savings;
  // console.log("totalItems", totalItems);
  // console.log("totoalAmount", totalAmount);

  res.json({
    totalItems,
    totalPrice,
    totalAmount,
    discount,
    charges,
    savings
  });
});

module.exports = router;
