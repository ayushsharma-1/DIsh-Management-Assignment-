const express = require('express');
const { getDishes, toggleDishStatus } = require('../controllers/dishController');
const router = express.Router();

router.get('/dishes', getDishes);
router.put('/dishes/:id/toggle', toggleDishStatus);

module.exports = router;
