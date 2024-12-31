const express = require("express");

const db = require("../database/db");

const router = express.Router();

// 1.Getting All Products API
router.get("/products", (req, res) => {
  // console.log("All");
  const query = `
    SELECT * FROM products
    `;
  db.all(query, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// 2.Getting Single Product API
router.get("/products/:productId", (req, res) => {
  const { productId } = req.params;
  // console.log(productId);
  const query = `
    SELECT * FROM products WHERE id = ?
    `;
  db.get(query, [productId], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: err.message });
    res.json(row);
  });
});

module.exports = router;
