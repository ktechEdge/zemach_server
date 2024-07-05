
exports.createEnvironmentalAvgData = (req, res) => {
    const data = req.body;
    const sql = 'INSERT INTO environmental_data_avg SET ?';
    db_pool.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.getAllEnvironmentalAvgData = (req, res) => {
    const sql = 'SELECT * FROM environmental_data_avg';
    db_pool.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.getEnvironmentalAvgDataById = (req, res) => {
    const sql = 'SELECT * FROM environmental_data_avg WHERE id = ?';
    db_pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.updateEnvironmentalAvgData = (req, res) => {
    const data = req.body;
    const sql = 'UPDATE environmental_data_avg SET ? WHERE id = ?';
    db_pool.query(sql, [data, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.deleteEnvironmentalAvgData = (req, res) => {
    const sql = 'DELETE FROM environmental_data_avg WHERE id = ?';
    db_pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};
