import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Calculator from './component/Calculator.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <App />

   <Calculator/> 
   
  </StrictMode>,
)
