const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  article_name: { type: String, required: true },
  article_description: { type: String, required: true },
  article_price: { type: Number, required: true },
  restaurant_id: { type: Number, required: true },
  article_type: { type: [String], required: true },
});

module.exports = mongoose.model("Article", articleSchema);
