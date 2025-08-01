import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ProductProvider } from './contextApi/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
    <ProductProvider>
   
         <App />   
   
    </ProductProvider>
      </BrowserRouter>
  </StrictMode>,
)
