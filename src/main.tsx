import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './services/i18n.service.ts';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
