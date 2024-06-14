const express = require("express");
const router = express.Router();
module.exports = router;
const Notification = require("../models/notification");

router.get("/:userId", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const notifications = await Notification.find({
      user_id: req.params.userId,
    })
      .skip(skip)
      .limit(limit);

    const totalNotifications = await Notification.countDocuments({
      user_id: req.params.userId,
    });

    if (!notifications) {
      return res.status(404).json({ message: "Not found" });
    }

    if (notifications.length === 0) {
      return res.status(201).json({ message: "Empty" });
    }

    res.status(201).json({
      totalPages: Math.ceil(totalNotifications / limit),
      notifications: notifications,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
