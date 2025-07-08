import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.tsx'
import Header from './components/header.tsx'
import Footer from './components/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<App/>}/>
        <Route path='about' element={<h1>This is the about Us page</h1>}/>
        <Route path='services'>
          <Route path='it-consulting' element={<h1>IT Consulting</h1>}/>
          <Route path='interview-as-a-service' element={<h1>Interview As a Service</h1>}/>
          <Route path='recruitment-as-a-service' element={<h1>Recruitment As a Service</h1>}/>
          <Route path='technical-workshops' element={<h1>Technical Workshops</h1>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
