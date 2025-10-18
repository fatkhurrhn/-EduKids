import React, { useEffect } from 'react';
import pageViewService from '../services/pageViewService';

const PageViewTracker = ({ pageName }) => {
    useEffect(() => {
        if (pageName) {
            pageViewService.trackPageView(pageName);
        }
    }, [pageName]);

    return null; // Komponen ini tidak render apa-apa
};

export default PageViewTracker;