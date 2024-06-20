var mongoose = require("mongoose");
var Notification = require("./models/notification");

var mongoDB = "mongodb://mongo:27017/kittydelivery";
mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

db.once("open", async function () {
  console.log(`🛠️Connection to MongoDB...`);

  try {
    await Notification.deleteMany({});
    console.log("Notifications collection cleared");

    let notifications = [
      {
        user_id: 1,
        notification_message: "Votre commande a été acceptée",
        notification_date: randomDate(new Date(2022, 0, 1), new Date()),
        notification_type: "new",
        notification_is_read: false,
      },
      {
        user_id: 2,
        notification_message: "Votre commande a été refusée",
        notification_date: randomDate(new Date(2022, 0, 1), new Date()),
        notification_type: "alert",
        notification_is_read: true,
      },
      {
        user_id: 3,
        notification_message: "Votre commande a été annulée",
        notification_date: randomDate(new Date(2022, 0, 1), new Date()),
        notification_type: "new",
        notification_is_read: false,
      },
      {
        user_id: 4,
        notification_message: "Votre commande a été acceptée",
        notification_date: randomDate(new Date(2022, 0, 1), new Date()),
        notification_type: "new",
        notification_is_read: true,
      },
      {
        user_id: 5,
        notification_message: "Votre commande a été livrée",
        notification_date: randomDate(new Date(2022, 0, 1), new Date()),
        notification_type: "alert",
        notification_is_read: false,
      },
      {
        user_id: 6,
        notification_message: "Votre commande a été refusée",
        notification_date: randomDate(new Date(2022, 0, 1), new Date()),
        notification_type: "alert",
        notification_is_read: true,
      },
      {
        user_id: 7,
        notification_message: "Votre commande a été acceptée",
        notification_date: randomDate(new Date(2022, 0, 1), new Date()),
        notification_type: "new",
        notification_is_read: false,
      },
      {
        user_id: 8,
        notification_message: "Votre commande a été annulée",
        notification_date: randomDate(new Date(2022, 0, 1), new Date()),
        notification_type: "alert",
        notification_is_read: true,
      },
      {
        user_id: 9,
        notification_message: "Votre commande a été acceptée",
        notification_date: randomDate(new Date(2022, 0, 1), new Date()),
        notification_type: "new",
        notification_is_read: false,
      },
      {
        user_id: 10,
        notification_message: "Votre commande a été livrée",
        notification_date: randomDate(new Date(2022, 0, 1), new Date()),
        notification_type: "alert",
        notification_is_read: true,
      },
    ];
    await Notification.insertMany(notifications);
    console.log("Notifications inserted successfully");
  } catch (err) {
    console.error("Error inserting notifications:", err);
  } finally {
    mongoose.connection.close();
  }
});
