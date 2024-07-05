
exports.createLastUpdate = (req, res) => {
    const data = req.body;
    const sql = 'INSERT INTO lastupdate SET ?';
    db_pool.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.getAllLastUpdates = (req, res) => {
    const sql = 'SELECT * FROM lastupdate';
    db_pool.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.getLastUpdateById = (req, res) => {
    const sql = 'SELECT * FROM lastupdate WHERE id = ?';
    db_pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.updateLastUpdate = (req, res) => {
    const data = req.body;
    const sql = 'UPDATE lastupdate SET ? WHERE id = ?';
    db_pool.query(sql, [data, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.deleteLastUpdate = (req, res) => {
    const sql = 'DELETE FROM lastupdate WHERE id = ?';
    db_pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};
