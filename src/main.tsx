import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.tsx'
import Header from './components/header.tsx'
import Footer from './components/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route index element={<App/>}/>
        <Route path='about' element={<h1>This is the about Us page</h1>}/>
        <Route path='services'>
          <Route index element={<h1>Service1</h1>}/>
          <Route path='service2' element={<h1>Service2</h1>}/>
          <Route path='service3' element={<h1>Service3</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
  </StrictMode>,
)
