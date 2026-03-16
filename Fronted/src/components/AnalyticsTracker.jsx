import React, { useEffect } from 'react';
import { analyticsAPI } from '../utils/api';

const AnalyticsTracker = () => {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        await analyticsAPI.trackVisit({
          page: window.location.pathname || 'home'
        });
      } catch (error) {
        console.error('Error tracking visit:', error);
      }
    };

    trackVisit();

    // Track page changes
    const handleRouteChange = () => {
      trackVisit();
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AnalyticsTracker;