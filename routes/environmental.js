const express = require('express');
const router = express.Router()
module.exports = router;


let lastUpdated = new Date(); // זמן התחלה

// פונקציה שמעדכנת את הזמן האחרון
function updateLastUpdated() {
    lastUpdated = new Date();
}

// פונקציה שבודקת אם עברו יותר מ-10 דקות מאז העדכון האחרון
function checkIfTenMinutesPassed() {
    const now = new Date();
    const minutesPassed = (now - lastUpdated) / 1000 / 60; // המרת הפרש הזמנים לדקות
    return minutesPassed > 10;
}



// Create - הוספת רשומה חדשה
router.post('/', (req, res) => {

    const { device_id, uv_radiation, light, air_temperature, air_humidity, soil_humidity, measurement_date } = req.body;
    const query = `INSERT INTO environmental_data (device_id, uv_radiation, light, air_temperature, air_humidity, soil_humidity, measurement_date) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db_pool.query(query, [device_id, uv_radiation, light, air_temperature, air_humidity, soil_humidity, measurement_date], (err, results) => {
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
    const query = `SELECT * FROM environmental_data`;
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
    const query = `SELECT * FROM environmental_data WHERE id = ?`;
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
    const { device_id, uv_radiation, light, air_temperature, air_humidity, soil_humidity, measurement_date } = req.body;
    const query = `UPDATE environmental_data SET device_id = ?, uv_radiation = ?, light = ?, air_temperature = ?, air_humidity = ?, soil_humidity = ?, measurement_date = ? WHERE id = ?`;
    db_pool.query(query, [device_id, uv_radiation, light, air_temperature, air_humidity, soil_humidity, measurement_date, id], (err, results) => {
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
    const query = `DELETE FROM environmental_data WHERE id = ?`;
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


router.get('/check-update', (req, res) => {
    const query = `SELECT * FROM environmental_data 
                   WHERE TIMESTAMPDIFF(MINUTE, last_updated, NOW()) > 10`;

    db_pool.query(query, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error executing query');
        } else {
            if (results.length > 0) {
                res.send('More than 10 minutes have passed since the last update');
            } else {
                res.send('Last update was within the last 10 minutes');
            }
        }
    });
});

