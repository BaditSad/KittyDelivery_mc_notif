const express = require("express");
const router = express.Router();
module.exports = router;
const Notification = require("../models/notification");

router.post("/", async (req, res) => {
  try {
    const { user_id, notification_type, notification_message } = req.body;

    const newNotification = new Notification({
      user_id,
      notification_type,
      notification_message,
      notification_is_read: false,
    });

    await newNotification.save();

    res.status(201).json({ message: "Item posted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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

router.put("/:userId", async (req, res) => {
  try {
    const { userId } = req.params.userId;
    const { notification_is_read } = req.body;

    const updatedNotification = await Notification.findByIdAndUpdate(
      userId,
      { notification_is_read },
      { new: true }
    );

    if (!updatedNotification) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(201).json({ message: "Item updated" });
  } catch (error) {
    console.error("Error updating notification:", error);
    res.status(500).json({ message: error.message });
  }
});
