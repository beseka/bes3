import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import SplashScreen from './pages/splashscreen';
import DetailsPage from './pages/details';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
