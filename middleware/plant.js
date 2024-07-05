exports.createPlant = (req, res) => {
    const data = req.body;
    const sql = 'INSERT INTO plant SET ?';
    db_pool.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.getAllPlants = (req, res) => {
    const sql = 'SELECT * FROM plant';
    db_pool.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.getPlantById = (req, res) => {
    const sql = 'SELECT * FROM plant WHERE id = ?';
    db_pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.updatePlant = (req, res) => {
    const data = req.body;
    const sql = 'UPDATE plant SET ? WHERE id = ?';
    db_pool.query(sql, [data, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

exports.deletePlant = (req, res) => {
    const sql = 'DELETE FROM plant WHERE id = ?';
    db_pool.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};