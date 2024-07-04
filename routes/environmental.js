/**
 * @swagger
 * /environmental-data:
 *   post:
 *     summary: Create a new record
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               device_id:
 *                 type: integer
 *               uv_radiation:
 *                 type: number
 *               light:
 *                 type: number
 *               air_temperature:
 *                 type: number
 *               air_humidity:
 *                 type: number
 *               soil_humidity:
 *                 type: number
 *               measurement_date:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Record added successfully
 *       500:
 *         description: Error executing the query
 */



const express = require('express');
const router = express.Router()
module.exports = router;


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



