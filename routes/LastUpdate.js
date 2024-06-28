const express = require('express');
const router = express.Router()
module.exports = router;

// Create - הוספת רשומה חדשה
router.post('/', (req, res) => {
    const { device_id, LastUpdate } = req.body;
    const query = `INSERT INTO LastUpdate (device_id, LastUpdate) VALUES (?, ?)`;
    db_pool.query(query, [device_id, LastUpdate], (err, results) => {
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
    const query = `SELECT * FROM LastUpdate`;
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
    const query = `SELECT * FROM LastUpdate WHERE id = ?`;
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
    const { device_id, LastUpdate } = req.body;
    const query = `UPDATE LastUpdate SET device_id = ?, LastUpdate = ? WHERE id = ?`;
    db_pool.query(query, [device_id, LastUpdate, id], (err, results) => {
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
    const query = `DELETE FROM LastUpdate WHERE id = ?`;
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

