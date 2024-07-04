
const express = require('express');
const router = express.Router()
module.exports = router;


// יצירת נתונים בטבלת global_param
router.post('/', (req, res) => {
    const data = req.body;
    const sql = 'INSERT INTO global_param SET ?';
    db_pool.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// קריאת כל הנתונים מטבלת global_param
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM global_param';
    db_pool.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// קריאת נתון יחיד מטבלת global_param
router.get('/:id', (req, res) => {
    const sql = 'SELECT * FROM global_param WHERE id = ?';
    db_pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// עדכון נתונים בטבלת global_param
router.put('/:id', (req, res) => {
    const data = req.body;
    const sql = 'UPDATE global_param SET ? WHERE id = ?';
    db_pool.query(sql, [data, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// מחיקת נתונים מטבלת global_param
router.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM global_param WHERE id = ?';
    db_pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;
