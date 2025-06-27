import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Courses from './pages/courses'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/khoa-hoc" element={<Courses />} />
          <Route path="/lien-he" element={<div>Liên hệ</div>} />
          <Route path="*" element={<div>404 - Không tìm thấy trang</div>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
