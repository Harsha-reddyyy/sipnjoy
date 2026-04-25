const express = require('express');
const router = express.Router();
const { getStatusChecks, createStatusCheck } = require('../controllers/statusController');

// Route for /api/status - GET and POST
router.route('/')
  .get(getStatusChecks)
  .post(createStatusCheck);

module.exports = router;
