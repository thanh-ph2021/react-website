import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './pages/App.tsx'
import PrivacyPolicy from './pages/PrivacyPolicy.tsx'
import TermsOfService from './pages/TermsOfService.tsx'

const router = createBrowserRouter([
  {
    path: '/react-website',
    element: <App />
  },
  {
    path: '/react-website/privacy-policy/:appId',
    element: <PrivacyPolicy />
  },
  {
    path: '/react-website/terms-of-service/:appId',
    element: <TermsOfService />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
