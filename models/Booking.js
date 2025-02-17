const db = require("../database");

const Booking = {
  create: (user_id, train_id, callback) => {
    db.query("INSERT INTO bookings (user_id, train_id) VALUES (?, ?)", [user_id, train_id], callback);
  },
  findByUser: (user_id, callback) => {
    db.query("SELECT * FROM bookings WHERE user_id = ?", [user_id], callback);  
  }
};

module.exports = Booking;
