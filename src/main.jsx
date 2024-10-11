import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import Globalstyle from './styles/global.js'
import { Routes } from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Globalstyle/>
    <Routes />
  </StrictMode>,
)
