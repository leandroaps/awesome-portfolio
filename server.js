// server.js

import dotenv from 'dotenv';
import express from 'express';
import mysql from 'mysql';

dotenv.config();

const app = express();

// MySQL connection configuration
const connection = mysql.createConnection({
    host: 'your_mysql_host',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'your_mysql_database'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Example API endpoint to fetch data from MySQL
app.get('/api/data', (req, res) => {
    const query = 'SELECT * FROM leandroaps';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error querying MySQL:', err);
            res.status(500).json({ error: 'Error querying MySQL' });
            return;
        }
        res.json(results);
    });
});

app.listen(3002, () => {
    console.log(`Server is running on port`);
});
