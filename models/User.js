const db = require("../database");

const User = {
  create: (name, email, password, role, callback) => {
    db.query("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)", [name, email, password, role], callback);
  },
  findByEmail: (email, callback) => {
    db.query("SELECT * FROM users WHERE email = ?", [email], callback);
  },
};

module.exports = User;
