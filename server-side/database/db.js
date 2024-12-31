const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./nxt-trendz.db", (err) => {
  if (err) console.error(err.message);
  console.log("Connected to SQlite database.");
});

// Create Tables:

// 1. Users Table
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
    )`);

  // 2. Product Table
  db.run(
    `CREATE TABLE IF NOT EXISTS products(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT UNIQUE,
  style TEXT,
  brand TEXT,
  price REAL,
  description TEXT,
  total_reviews INTEGER,
  availability TEXT,
  image_url BLOB NOT NULL,
  rating REAL CHECK(rating >= 0 AND rating <= 5)
  ) `
  );

  // 3. Orders Table
  db.run(
    `CREATE TABLE IF NOT EXISTS orders(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cartItems TEXT NOT NULL,
    address TEXT NOT NULL,
    orderDetails TEXT NOT NULL,
    activePaymentMode TEXT NOT NULL,
    uniqueId TEXT NOT NULL
    )`
  );
});

module.exports = db;
