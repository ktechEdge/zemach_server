
const express = require('express');
const router = express.Router()
module.exports = router;

// Create - הוספת רשומה חדשה

router.post('/', (req, res) => {
    const { device_id, col, row } = req.body;
    const query = `INSERT INTO arduino (device_id, col, row) VALUES (?, ?, ?)`;
    db_pool.query(query, [device_id, col, row], (err, results) => {
        if (err) {
            console.error('Error executing the query:', err);
            res.status(500).send('Error executing the query');
            return;
        }
        res.status(201).send('Record added successfully');
    });
});

// Read - קריאת רשומות

router.get('/', (req, res) => {
    const query = `SELECT * FROM arduino`;
    db_pool.query(query, (err, results) => {
        if (err) {
            console.error('Error executing the query:', err);
            res.status(500).send('Error executing the query');
            return;
        }
        res.status(200).json(results);
    });
});

// Read - קריאת רשומה בודדת

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM arduino WHERE id = ?`;
    db_pool.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error executing the query:', err);
            res.status(500).send('Error executing the query');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Record not found');
            return;
        }
        res.status(200).json(results[0]);
    });
});

// Update - עדכון רשומה

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { device_id, col, row } = req.body;
    const query = `UPDATE arduino SET device_id = ?, col = ?, row = ? WHERE id = ?`;
    db_pool.query(query, [device_id, col, row, id], (err, results) => {
        if (err) {
            console.error('Error executing the query:', err);
            res.status(500).send('Error executing the query');
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).send('Record not found');
            return;
        }
        res.status(200).send('Record updated successfully');
    });
});

// Delete - מחיקת רשומה


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM arduino WHERE id = ?`;
    db_pool.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error executing the query:', err);
            res.status(500).send('Error executing the query');
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).send('Record not found');
            return;
        }
        res.status(200).send('Record deleted successfully');
    });
});

module.exports = router;
