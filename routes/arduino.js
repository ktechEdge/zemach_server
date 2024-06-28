/**
 * @swagger
 * components:
 *   schemas:
 *     Data:
 *       type: object
 *       required:
 *         - id
 *         - arduino
 *         - radiation
 *         - light
 *         - air_temperature
 *         - soil_humidity
 *         - measurement_date
 *         - LastUpdate
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the data entry
 *         arduino:
 *           type: integer
 *           description: The identifier for the Arduino device
 *         radiation:
 *           type: string
 *           description: The radiation level
 *         light:
 *           type: string
 *           description: The light intensity
 *         air_temperature:
 *           type: string
 *           description: The air temperature in Celsius
 *         soil_humidity:
 *           type: string
 *           description: The soil humidity percentage
 *         measurement_date:
 *           type: string
 *           format: date-time
 *           description: The date and time the measurement was taken
 *         LastUpdate:
 *           type: string
 *           description: The last update time
 *
 */
/**
 * @swagger
 * tags:
 *   name: Data
 *   description: The data managing API
 * /data:
 *   get:
 *     summary: Lists all the data entries
 *     tags: [Data]
 *     responses:
 *       200:
 *         description: The list of the data entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Data'
 *   post:
 *     summary: Create a new data entry
 *     tags: [Data]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Data'
 *     responses:
 *       200:
 *         description: The created data entry.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Data'
 *       500:
 *         description: Some server error
 * /data/{id}:
 *   get:
 *     summary: Get the data entry by id
 *     tags: [Data]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The data entry id
 *     responses:
 *       200:
 *         description: The data entry response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Data'
 *       404:
 *         description: The data entry was not found
 *   put:
 *    summary: Update the data entry by id
 *    tags: [Data]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The data entry id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Data'
 *    responses:
 *      200:
 *        description: The data entry was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Data'
 *      404:
 *        description: The data entry was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the data entry by id
 *     tags: [Data]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The data entry id
 *     responses:
 *       200:
 *         description: The data entry was deleted
 *       404:
 *         description: The data entry was not found
 */



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
    connection.query(query, [id], (err, results) => {
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



