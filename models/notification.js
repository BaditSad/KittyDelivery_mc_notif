const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  user_id: { type: Number, required: true },
  notification_date: { type: Date, required: true },
  notification_type: { type: String, required: true },
  notification_message: { type: String, required: true },
  notification_is_read: { type: Boolean, required: true },
});

module.exports = mongoose.model("Notification", notificationSchema);
