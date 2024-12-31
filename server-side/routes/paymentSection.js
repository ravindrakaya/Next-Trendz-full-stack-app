const db = require("../database/db");
const { v4: uuidv4 } = require("uuid");

const paymentSection = (req, res) => {
  const { cartItem, paymentMode, address, totalAmount } = req.body;

  const generateTransactionId = () => {
    return `TXN${Math.floor(Math.random() * 1000000)}`;
  };

  const uniqueId = uuidv4();
  // console.log(uniqueId);

  const cartItems = cartItem.map((eachItem) => ({
    id: eachItem.id,
    brand: eachItem.brand,
    imageUrl: eachItem.imageUrl,
    price: eachItem.price,
    title: eachItem.title,
    quantity: eachItem.quantity,
    orderId: `OD ${Date.now()}RV${Math.floor(Math.random() * 100000)}`,
  }));
  // console.log(cartItems);

  // console.log(generateOrderId());

  const date = new Date();
  const createdAt = date.toDateString();
  // console.log("createdAt", createdAt);

  date.setDate(date.getDate() + 1);
  const shipping = date.toDateString();
  // console.log("shipping ", shipping);

  date.setDate(date.getDate() + 2);
  const expectedDelivery = date.toDateString();
  // console.log("expectedDelivery ", expectedDelivery);

  const orderDetails = {
    transactionId: generateTransactionId(),
    totalAmount,
    orderStatus: `Order Confirmed, ${createdAt}`,
    createdAt,
    shipping,
    expectedDelivery,
  };
  // console.log(paymentDetails);

  const createOrder = (cartItems, address, orderDetails) => {
    return {
      cartItems,
      address,
      orderDetails,
    };
  };

  try {
    // console.log("insert: ", cartItem);
    const order = createOrder(cartItems, address, orderDetails);
    const message =
      paymentMode === "COD"
        ? "Order Confirmed Successfull"
        : "Payment Successfull";
    res.status(200).json({
      message: message,
    });
    if (cartItems.length !== 0) {
      const query = `INSERT INTO orders (cartItems, address, orderDetails, activePaymentMode, uniqueId)
      VALUES(?,?,?,?,?)
      `;
      const cartItemData = JSON.stringify(order.cartItems);
      const addressData = JSON.stringify(order.address);
      const orderDetailsData = JSON.stringify(order.orderDetails);
      db.run(query, [
        cartItemData,
        addressData,
        orderDetailsData,
        paymentMode,
        uniqueId,
      ]);
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to Create Order" });
  }
};

module.exports = paymentSection;
