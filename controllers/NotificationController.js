const express = require("express");
const router = express.Router();
module.exports = router;
const Notification = require("../models/notification");

router.get("/user/:userId", async (req, res) => {
  try {
    const notifications = await Notification.find(req.params);
    if (!notifications) {
      return res.status(404).json({ message: "Aucune notification trouvé !" });
    }
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
