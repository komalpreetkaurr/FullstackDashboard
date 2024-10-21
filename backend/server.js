const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Set up database connection
const db = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: '',
  database: 'dash'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

// User Signup
app.post('/signup', (req, res) => {
  const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(sql, [req.body.username, req.body.email, req.body.password], (err, data) => {
    if (err) {
      console.error('Query error:', err);
      return res.status(500).json({ error: "Signup Failed" });
    }
    return res.json({ message: "Signup Successful" });
  });
});

// User Login
app.post('/users', (req, res) => {
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(sql, [req.body.username, req.body.password], (err, data) => {
    if (err) {
      console.error('Query error:', err);
      return res.status(500).json({ error: "Login Failed" });
    }
    if (data.length > 0) {
      return res.json({ message: "Login Successful", user: data[0] });
    } else {
      return res.status(404).json({ message: "No record found" });
    }
  });
});

// Start server
app.listen(8081, () => {
  console.log("Server listening on port 8081");
});
