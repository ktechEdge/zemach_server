const express = require('express');
const router = express.Router();
const environmentalAvgMiddleware = require('../middleware/environmental_avg');

router.post('/', environmentalAvgMiddleware.createEnvironmentalAvgData);
router.get('/', environmentalAvgMiddleware.getAllEnvironmentalAvgData);
router.get('/:id', environmentalAvgMiddleware.getEnvironmentalAvgDataById);
router.put('/:id', environmentalAvgMiddleware.updateEnvironmentalAvgData);
router.delete('/:id', environmentalAvgMiddleware.deleteEnvironmentalAvgData);

module.exports = router;
