import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Restore path after GitHub Pages 404 redirect
const params = new URLSearchParams(window.location.search)
const redirect = params.get('redirect')
if (redirect) {
  const newUrl = redirect + window.location.hash
  window.history.replaceState(null, '', newUrl)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
