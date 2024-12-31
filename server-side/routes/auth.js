const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../database/db");
// const { request } = require("http");
// const { error } = require("console");

const router = express.Router();

// Signup API
router.post("/signup", async (request, response) => {
  const { username, password } = request.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    } else {
      db.run(`INSERT INTO users (username,password) VALUES (?,?)`, [
        username,
        hashedPassword,
      ]);
    }
    response.json({ message: "User Signed Up Successfully" });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

// Login API
router.post("/login", (request, response) => {
  const { username, password } = request.body;
  // console.log(username, password);
  db.get(
    `SELECT * FROM users WHERE username = ?`,
    [username],
    async (err, user) => {
      if (err || !user) {
        response.status(401).json({ data: "User does not exist!" });
      } else {
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
          return response.status(401).json({ data: "Incorrect Password" });
        } else {
          const jwtToken = jwt.sign(
            { id: user.id, username: user.username },
            "SECRET_KEY",
            { expiresIn: "1h" }
          );
          response.json({ jwtToken: jwtToken });
        }
      }
    }
  );
});

module.exports = router;
