const mongoose = require('mongoose');

const StatusCheckSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    default: () => new mongoose.Types.ObjectId().toString(),
  },
  client_name: {
    type: String,
    required: [true, 'Please add a client name'],
    trim: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
}, {
  // Ensure that virtuals are included if ever converted to JSON
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  versionKey: false
});

// Optionally remove the mongoose _id to match the previous response format exactly
StatusCheckSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    delete ret._id;
    return ret;
  }
});

module.exports = mongoose.model('StatusCheck', StatusCheckSchema);
