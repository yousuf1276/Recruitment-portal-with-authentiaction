const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yousuf@1276',
  database: 'users_db'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});


// Signup endpoint
app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(sql, [email, password], (err) => {
    if (err) {
      return res.status(500).send('Server error');
    }
    res.status(201).send('User created');
  });
});

// Signin endpoint
app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      return res.status(500).send('Server error');
    }
    if (results.length === 0) {
      return res.status(401).send('User not found');
    }
    const user = results[0];
    if (user.password !== password) {
      return res.status(401).send('Incorrect password');
    }
    res.status(200).send('Login successful');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
