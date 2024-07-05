exports.createEnvironmentalData = (req, res) => {
    const data = req.body;
    const sql = 'INSERT INTO environmental_data SET ?';
    db_pool.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.getAllEnvironmentalData = (req, res) => {
    const sql = 'SELECT * FROM environmental_data';
    db_pool.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.getEnvironmentalDataById = (req, res) => {
    const sql = 'SELECT * FROM environmental_data WHERE id = ?';
    db_pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.updateEnvironmentalData = (req, res) => {
    const data = req.body;
    const sql = 'UPDATE environmental_data SET ? WHERE id = ?';
    db_pool.query(sql, [data, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.deleteEnvironmentalData = (req, res) => {
    const sql = 'DELETE FROM environmental_data WHERE id = ?';
    db_pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};
