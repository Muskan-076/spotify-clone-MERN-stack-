import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Player from './components/Player.jsx'
import PlayercontextProvider from './context/Playercontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PlayercontextProvider>
        <App />
      </PlayercontextProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
