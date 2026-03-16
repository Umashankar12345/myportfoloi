const mongoose = require('mongoose');

const DownloadSchema = new mongoose.Schema({
  ipAddress: String,
  userAgent: String,
  downloadedAt: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String,
    required: false
  },
  purpose: {
    type: String,
    enum: ['resume', 'project', 'other'],
    default: 'resume'
  }
});

module.exports = mongoose.model('Download', DownloadSchema);