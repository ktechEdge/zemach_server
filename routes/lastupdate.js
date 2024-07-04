
const express = require('express');
const router = express.Router()
module.exports = router;


router.post('/', (req, res) => {
    const data = req.body;
    const sql = 'INSERT INTO lastupdate SET ?';
    db_pool.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// קריאת כל הנתונים מטבלת lastupdate
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM lastupdate';
    db_pool.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// קריאת נתון יחיד מטבלת lastupdate
router.get('/:id', (req, res) => {
    const sql = 'SELECT * FROM lastupdate WHERE id = ?';
    db_pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// עדכון נתונים בטבלת lastupdate
router.put('/:id', (req, res) => {
    const data = req.body;
    const sql = 'UPDATE lastupdate SET ? WHERE id = ?';
    db.query(sql, [data, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// מחיקת נתונים מטבלת lastupdate
router.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM lastupdate WHERE id = ?';
    db_pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});



module.exports = router;
