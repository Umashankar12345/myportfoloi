const mongoose = require('mongoose');

const VisitorSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
    required: true
  },
  country: String,
  city: String,
  region: String,
  userAgent: String,
  browser: String,
  os: String,
  device: String,
  referrer: String,
  page: {
    type: String,
    default: 'home'
  },
  duration: {
    type: Number,
    default: 0
  },
  isUnique: {
    type: Boolean,
    default: true
  },
  visitedAt: {
    type: Date,
    default: Date.now
  },
  lastActive: {
    type: Date,
    default: Date.now
  }
});

// Create index for faster queries
VisitorSchema.index({ visitedAt: -1 });
VisitorSchema.index({ ipAddress: 1, visitedAt: -1 });

module.exports = mongoose.model('Visitor', VisitorSchema);