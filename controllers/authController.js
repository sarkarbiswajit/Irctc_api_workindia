const bcrypt = require('bcrypt'); 
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const db = require("../database");

exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        console.log("Received Data:", { name, email, password, role });

        if (!name || !email || !password || !role) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (typeof password !== 'string') {
            return res.status(400).json({ error: "Password must be a string" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = `INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`;
        db.query(sql, [name, email, hashedPassword, role], (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: "User registered successfully" });
        });
    } catch (error) {
        console.error("Error during registration:", error.message);
        res.status(500).json({ error: error.message });
    }
};




exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email, (err, result) => {
    if (err || result.length === 0) return res.status(400).json({ error: "User not found" });

    const user = result[0];
    bcrypt.compare(password, user.password, (err, match) => {
      if (!match) return res.status(401).json({ error: "Invalid credentials" });

      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
      res.json({ token });
    });
  });
};
