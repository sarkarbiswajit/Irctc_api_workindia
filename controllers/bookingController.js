const Booking = require("../models/Booking");
const Train = require("../models/Train");

exports.bookSeat = (req, res) => {
  const { train_id } = req.body;
  Train.bookSeat(train_id, (err, result) => {
    if (err || result.affectedRows === 0) return res.status(400).json({ error: "No seats available" });

    Booking.create(req.user.id, train_id, (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Seat booked successfully" });
    });
  });
};



exports.getBookingDetails = (req, res) => {
  const userId = req.user.id;
  Booking.findByUser(userId, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.length === 0) return res.status(404).json({ message: "No bookings found" });

    res.json(result);
  });
};
