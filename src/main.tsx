import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Agentation } from 'agentation'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import WorkDetail from './pages/WorkDetail.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="work/:slug" element={<WorkDetail />} />
          <Route path="contact" element={<Navigate to="/#contact" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {import.meta.env.DEV && <Agentation />}
  </StrictMode>,
)
