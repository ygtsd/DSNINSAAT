import React from 'react'
import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// ✨ 1. Bunu import etmeyi unutmuş olabilirsin
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ✨ 2. App'i BrowserRouter ile sarmalamazsan PATLAR */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)