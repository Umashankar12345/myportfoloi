// const express = require('express');
// const router = express.Router();
// const Contact = require('../models/Contact');
// const Download = require('../models/Download');
// const { validateContact } = require('../middleware/validation');
// const { contactLimiter } = require('../middleware/rateLimiter');
// const emailService = require('../utils/emailService');
// const requestIp = require('request-ip');

// // Submit contact form
// router.post('/', contactLimiter, validateContact, async (req, res) => {
//   try {
//     const { name, email, message, subject } = req.body;
    
//     const contactData = {
//       name,
//       email,
//       message,
//       subject: subject || 'Portfolio Inquiry',
//       ipAddress: requestIp.getClientIp(req),
//       userAgent: req.headers['user-agent']
//     };

//     // Save to database
//     const newContact = new Contact(contactData);
//     await newContact.save();

//     // Send notification email to you
//     await emailService.sendContactNotification(contactData);
    
//     // Send auto-reply to the sender
//     await emailService.sendAutoReply(email, name);

//     res.status(201).json({
//       success: true,
//       message: 'Message sent successfully! I will get back to you soon.',
//       data: {
//         id: newContact._id,
//         name: newContact.name,
//         email: newContact.email
//       }
//     });
//   } catch (error) {
//     console.error('Error saving contact:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error. Please try again later.'
//     });
//   }
// });

// // Get all contacts (protected - for admin panel if you add one later)
// router.get('/', async (req, res) => {
//   try {
//     // In production, add authentication middleware
//     const contacts = await Contact.find()
//       .sort({ createdAt: -1 })
//       .select('-__v');
    
//     res.json({
//       success: true,
//       count: contacts.length,
//       data: contacts
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Server error'
//     });
//   }
// });

// // Track resume download
// router.post('/track-download', async (req, res) => {
//   try {
//     const { email, purpose } = req.body;
    
//     const download = new Download({
//       ipAddress: requestIp.getClientIp(req),
//       userAgent: req.headers['user-agent'],
//       email,
//       purpose: purpose || 'resume'
//     });

//     await download.save();

//     res.json({
//       success: true,
//       message: 'Download tracked successfully'
//     });
//   } catch (error) {
//     console.error('Error tracking download:', error);
//     res.json({ success: false });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const analyticsService = require('../utils/analytics');

// Track page visit
router.post('/track', async (req, res) => {
  try {
    const result = await analyticsService.trackVisit(req);
    res.json(result);
  } catch (error) {
    console.error('Error tracking analytics:', error);
    res.status(500).json({ success: false });
  }
});

// Get visitor statistics (public endpoint for dashboard)
router.get('/stats', async (req, res) => {
  try {
    const stats = await analyticsService.getStats();
    const popularPages = await analyticsService.getPopularPages();
    
    res.json({
      success: true,
      data: {
        ...stats,
        popularPages
      }
    });
  } catch (error) {
    console.error('Error getting stats:', error);
    res.status(500).json({ success: false });
  }
});

module.exports = router;