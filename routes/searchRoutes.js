const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.post('/', searchController.filterText);

module.exports = router;
