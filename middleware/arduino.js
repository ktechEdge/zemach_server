exports.createArduino = (req, res) => {
    const data = req.body;
    const sql = 'INSERT INTO arduino SET ?';
    db_pool.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.getAllArduinos = (req, res) => {
    const sql = 'SELECT * FROM arduino';
    db_pool.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.getArduinoById = (req, res) => {
    const sql = 'SELECT * FROM arduino WHERE id = ?';
    db_pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.updateArduino = (req, res) => {
    const data = req.body;
    const sql = 'UPDATE arduino SET ? WHERE id = ?';
    db_pool.query(sql, [data, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.deleteArduino = (req, res) => {
    const sql = 'DELETE FROM arduino WHERE id = ?';
    db_pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};
