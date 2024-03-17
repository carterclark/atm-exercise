const express = require('express')
const { Client } = require('pg');
require('dotenv').config({ path: '../.env' })

const app = express()
app.use(express.json());

const client = new Client({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: 'localhost',
    port: '5432',
    database: process.env.POSTGRES_DB
});


client.connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
    })
    .catch((err) => {
        console.error('Error connecting to PostgreSQL database', err);
    });

app.post('/api/getAccount', (req, res) => {
    if (!req.body.accountNum) {
        res.status(400).json(createError(400, "No account number provided."));
    }
    client.query(queries.getAccount, [req.body.accountNum], (err, result) => {
        if (err) {
            res.status(500).json(createError(500, "There was a critical error. Please sign in again."));
        } else {
            res.json(result.rows)
        }
    });
});