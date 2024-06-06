const express = require("express");
const router = express.Router();
module.exports = router;
const Menu = require("../models/menu");
const Article = require("../models/article");

router.get("/restaurants/:restaurantId/card", async (req, res) => {
  const { restaurantId } = req.params;
  try {
    const menu = await Menu.find({ restaurant_id: restaurantId });
    const articles = await Article.find({ restaurant_id: restaurantId });
    res.json({ menu, articles });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;