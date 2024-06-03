const express = require("express");
const router = express.Router();
module.exports = router;
const Order = require("../models/order");

router.get("/orders/user/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await Order.find({ user_id: userId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
