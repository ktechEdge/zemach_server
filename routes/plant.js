const express = require('express');
const router = express.Router();
const plantMiddleware = require('../middleware/plant');

router.post('/', plantMiddleware.createPlant);
router.get('/', plantMiddleware.getAllPlants);
router.get('/:id', plantMiddleware.getPlantById);
router.put('/:id', plantMiddleware.updatePlant);
router.delete('/:id', plantMiddleware.deletePlant);

module.exports = router;
