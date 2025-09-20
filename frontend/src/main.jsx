import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import TiendaContextProvider from './context/TiendaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TiendaContextProvider>
        <App />
      </TiendaContextProvider>
    </BrowserRouter>
  </StrictMode>
)
