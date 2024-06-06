const express = require("express");
const router = express.Router();
module.exports = router;
const Notification = require("../models/notification");

router.get("/:userId", async (req, res) => {
  try {
    const notifications = await Notification.find({
      user_id: req.params.userId,
    });
    if (!notifications) {
      return res.status(404).json({ message: "Notifications not found!" });
    }
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
