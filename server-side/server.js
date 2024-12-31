const express = require("express");

const cors = require("cors");

const authRoutes = require("./routes/auth");
const productsRoutes = require("./routes/products");
const placeOrderRoutes = require("./routes/placeOrder");
const paymentRoutes = require("./routes/paymnet");

const ordersRoutes = require('./routes/orders')

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", authRoutes);
app.use("/", productsRoutes);
app.use("/", placeOrderRoutes);
app.use("/", paymentRoutes);
app.use("/", ordersRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server Running at http://localhost:${PORT}`)
);
