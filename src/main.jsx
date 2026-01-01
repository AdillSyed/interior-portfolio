import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from "../src/components/Hero";
import SelectedWorks from "../src/components/SelectedWorks";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <SelectedWorks />
  </StrictMode>,
)
