exports.createGlobalParam = (req, res) => {
    const data = req.body;
    const sql = 'INSERT INTO global_param SET ?';
    db_pool.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.getAllGlobalParams = (req, res) => {
    const sql = 'SELECT * FROM global_param';
    db_pool.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.getGlobalParamById = (req, res) => {
    const sql = 'SELECT * FROM global_param WHERE id = ?';
    db_pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.updateGlobalParam = (req, res) => {
    const data = req.body;
    const sql = 'UPDATE global_param SET ? WHERE id = ?';
    db_pool.query(sql, [data, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.deleteGlobalParam = (req, res) => {
    const sql = 'DELETE FROM global_param WHERE id = ?';
    db_pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};