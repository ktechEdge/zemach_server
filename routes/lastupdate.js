const express = require('express');
const router = express.Router();
const lastUpdateMiddleware = require('../middleware/lastupdate');

router.post('/', lastUpdateMiddleware.createLastUpdate);
router.get('/', lastUpdateMiddleware.getAllLastUpdates);
router.get('/:id', lastUpdateMiddleware.getLastUpdateById);
router.put('/:id', lastUpdateMiddleware.updateLastUpdate);
router.delete('/:id', lastUpdateMiddleware.deleteLastUpdate);

module.exports = router;
