const StatusCheck = require('../models/StatusCheck');
const uuid = require('uuid');

// @desc    Get all status checks
// @route   GET /api/status
// @access  Public
exports.getStatusChecks = async (req, res, next) => {
  try {
    const statusChecks = await StatusCheck.find();
    res.status(200).json(statusChecks);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc    Create a status check
// @route   POST /api/status
// @access  Public
exports.createStatusCheck = async (req, res, next) => {
  try {
    const { client_name } = req.body;
    
    if (!client_name) {
      return res.status(400).json({ error: 'Please add a client name' });
    }

    const payload = {
      id: uuid.v4(),
      client_name
    };

    const statusCheck = await StatusCheck.create(payload);

    res.status(201).json(statusCheck);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
