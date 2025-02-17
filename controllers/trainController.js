const Train = require("../models/Train");

exports.addTrain = (req, res) => {
  if (req.headers["x-api-key"] !== process.env.ADMIN_API_KEY) return res.status(403).json({ error: "Unauthorized" });

  const { name, source, destination, total_seats } = req.body;
  Train.create(name, source, destination, total_seats, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Train added successfully" });
  });
};

exports.getTrains = (req, res) => {
  const { source, destination } = req.query;
  Train.findByRoute(source, destination, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
};
