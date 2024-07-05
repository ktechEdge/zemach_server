const express = require('express');
const router = express.Router();
const globalParamMiddleware = require('../middleware/global_param');


router.post('/', globalParamMiddleware.createGlobalParam);
router.get('/', globalParamMiddleware.getAllGlobalParams);
router.get('/:id', globalParamMiddleware.getGlobalParamById);
router.put('/:id', globalParamMiddleware.updateGlobalParam);
router.delete('/:id', globalParamMiddleware.deleteGlobalParam);

module.exports = router;
