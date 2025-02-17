const db = require("../database");

const Train = {
  create: (name, source, destination, total_seats, callback) => {
    db.query("INSERT INTO trains (name, source, destination, total_seats, available_seats) VALUES (?, ?, ?, ?, ?)", 
    [name, source, destination, total_seats, total_seats], callback);
  },
  findByRoute: (source, destination, callback) => {
    db.query("SELECT * FROM trains WHERE source = ? AND destination = ?", [source, destination], callback);
  },
  bookSeat: (train_id, callback) => {
    db.query("UPDATE trains SET available_seats = available_seats - 1 WHERE id = ? AND available_seats > 0", [train_id], callback);
  }
};

module.exports = Train;
