const express = require('express');
const router = express.Router()


// Create
router.post('/', (req, res) => {
    const data = req.body;
    const query = 'INSERT INTO environmental_data_avg SET ?';
    db_pool.query(query, data, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// Read - קריאת רשומות

router.get('/', (req, res) => {
    const query = `SELECT * FROM environmental_data_avg`;
    db_pool.query(query, (err, results) => {
        if (err) {
            console.error('Error executing the query:', err);
            res.status(500).send('Error executing the query');
            return;
        }
        res.status(200).json(results);
    });
});


// Read לפי id
router.get('/:id', (req, res) => {
    const query = 'SELECT * FROM environmental_data_avg WHERE id = ?';
    db_pool.query(query, [req.params.id], (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// Update
router.put('/:id', (req, res) => {
    const data = req.body;
    const query = 'UPDATE environmental_data_avg SET ? WHERE id = ?';
    db_pool.query(query, [data, req.params.id], (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// Delete
router.delete('/:id', (req, res) => {
    const query = 'DELETE FROM environmental_data_avg WHERE id = ?';
    db_pool.query(query, [req.params.id], (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});


module.exports = router;
