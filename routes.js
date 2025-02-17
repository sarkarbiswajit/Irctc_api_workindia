const express = require("express");
const { register, login } = require("./controllers/authController");
const { addTrain, getTrains } = require("./controllers/trainController");
const { bookSeat ,getBookingDetails } = require("./controllers/bookingController");
const authMiddleware = require("./authMiddleware");

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.post("/train/add",authMiddleware, addTrain);
router.get("/train/search", getTrains);
router.post("/booking/book", authMiddleware, bookSeat);
router.get("/booking/details", authMiddleware, getBookingDetails);

module.exports = router;
