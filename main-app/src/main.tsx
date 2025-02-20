import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { initQK } from './initQK.ts'
import App from './App.tsx'

createRoot(document.getElementById('main-app-container')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
initQK();