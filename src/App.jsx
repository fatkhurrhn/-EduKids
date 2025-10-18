import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ComingSoon from './pages/ComingSoon';
import LandingPage from './pages/LandingPage';
import Try from './pages/Try';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tes" element={<Try />} />
        <Route path="/landing-page" element={<LandingPage />} />

        {/* Catch-all untuk halaman yang tidak ada */}
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="*" element={<Navigate to="/comingsoon" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
