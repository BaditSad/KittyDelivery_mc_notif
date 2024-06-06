const express = require("express");
const router = express.Router();
module.exports = router;
const Notification = require("../models/notification");

router.get("/notifications/user/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const notification = await Notification.find({ user_id: userId });
    res.json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
