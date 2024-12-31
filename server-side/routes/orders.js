const express = require("express");

const db = require("../database/db");

const router = express.Router();

// 1. Get Orders API
router.get("/orders", (req, res) => {
  const query = `SELECT * FROM orders`;
  db.all(query, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    // console.log(rows);
    const updatedRows = rows.map((eachItem) => ({
      cartItems: JSON.parse(eachItem.cartItems),
      address: JSON.parse(eachItem.address),
      orderDetails: JSON.parse(eachItem.orderDetails),
      activePaymentMode: eachItem.activePaymentMode,
      uniqueId: eachItem.uniqueId,
    }));
    res.json({ updatedRows });
  });
});

// 2. Cancel Order API

router.post("/cancel-order", (req, res) => {
  const { id } = req.body;
  // console.log("id to be cancle: ", id);
  // step:1 Retriving Current CartItems
  db.get(`SELECT cartItems FROM orders `, (err, row) => {
    if (err) return res.status(500).json({ message: "Server Error" });
    if (!row) return res.status(404).json({ message: "Order not Found" });

    // step:2 Updating cartItems in Database
    if (row) {
      const cartItems = JSON.parse(row.cartItems);
      const newItem = cartItems.filter((items) => items.id !== id);
      // console.log("cartItems: ", cartItems);
      // console.log("newItem: ", newItem);
      // if (cartItems.length === 0) {
      //   db.run(`DELETE FROM orders WHERE cartItems = ?`, [], (err) => {
      //     if (err)
      //       return res
      //         .status(500)
      //         .json({ message: "Error Occured While Deleting Order" });
      //   });
      // }
      // db.run(
      //   `
      //     UPDATE orders SET cartItems = ?
      //     `,
      //   [JSON.stringify(newItem)],
      //   (err) => {
      //     if (err) return res.status(500).json({ message: "Server Error" });
      //     res.json({ message: newItem });
      //   }
      // );
    }

    // step:3 Deleting cartItems in Database
    // if (cartItems.length === 0) {

    // }
  });
});

module.exports = router;
