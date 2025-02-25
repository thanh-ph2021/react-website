import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'

import App from './pages/App.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import TermsOfService from './pages/TermsOfService.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy/:appId" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service/:appId" element={<TermsOfService />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
