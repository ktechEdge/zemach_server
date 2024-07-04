
const express = require('express');
const router = express.Router()
module.exports = router;

// יצירת נתונים בטבלת plant
router.post('/', (req, res) => {
    const data = req.body;
    const sql = 'INSERT INTO plant SET ?';
    db_pool.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// קריאת כל הנתונים מטבלת plant
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM plant';
    db_pool.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// קריאת נתון יחיד מטבלת plant
router.get('/:id', (req, res) => {
    const sql = 'SELECT * FROM plant WHERE id = ?';
    db_pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// עדכון נתונים בטבלת plant
router.put('/:id', (req, res) => {
    const data = req.body;
    const sql = 'UPDATE plant SET ? WHERE id = ?';
    db_pool.query(sql, [data, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// מחיקת נתונים מטבלת plant
router.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM plant WHERE id = ?';
    db_pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;

