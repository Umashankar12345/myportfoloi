const Visitor = require('../models/Visitor');
const requestIp = require('request-ip');
const UAParser = require('ua-parser-js');

class AnalyticsService {
  async trackVisit(req) {
    try {
      const ipAddress = requestIp.getClientIp(req);
      const userAgent = req.headers['user-agent'];
      
      // Parse user agent
      const parser = new UAParser(userAgent);
      const uaResult = parser.getResult();
      
      // Check if this is a unique visit in the last 24 hours
      const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const existingVisit = await Visitor.findOne({
        ipAddress,
        visitedAt: { $gte: twentyFourHoursAgo }
      });

      const visitorData = {
        ipAddress,
        userAgent,
        browser: uaResult.browser.name,
        os: uaResult.os.name,
        device: uaResult.device.type || 'desktop',
        referrer: req.headers.referer || 'direct',
        page: req.query.page || 'home',
        isUnique: !existingVisit
      };

      // Save visitor data
      const visitor = new Visitor(visitorData);
      await visitor.save();

      // Return basic stats
      const stats = await this.getStats();
      
      return {
        success: true,
        visitorId: visitor._id,
        isUnique: visitorData.isUnique,
        stats
      };
    } catch (error) {
      console.error('Error tracking visit:', error);
      return { success: false };
    }
  }

  async getStats() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    const [
      totalVisitors,
      todayVisitors,
      uniqueVisitors,
      todayUniqueVisitors
    ] = await Promise.all([
      Visitor.countDocuments(),
      Visitor.countDocuments({ visitedAt: { $gte: today } }),
      Visitor.countDocuments({ isUnique: true }),
      Visitor.countDocuments({ visitedAt: { $gte: today }, isUnique: true })
    ]);

    return {
      totalVisitors,
      todayVisitors,
      uniqueVisitors,
      todayUniqueVisitors
    };
  }

  async getPopularPages() {
    const popularPages = await Visitor.aggregate([
      { $group: { _id: '$page', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);
    
    return popularPages;
  }
}

module.exports = new AnalyticsService();