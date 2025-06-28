import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './layouts/UserLayout'
import AdminLayout from './layouts/AdminLayout'

import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Dashboard from './pages/admin/Dashboard'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User layout routes */}
        <Route path="/" element={<UserLayout><Home /></UserLayout>} />
        <Route path="/gioi-thieu" element={<UserLayout><About /></UserLayout>} />
        <Route path="/khoa-hoc" element={<UserLayout><Courses /></UserLayout>} />
        <Route path="/lien-he" element={<UserLayout> <ContactPage></ContactPage></UserLayout>} />
        <Route path="*" element={<UserLayout><div>404 - Không tìm thấy trang</div></UserLayout>} />
        {/* Admin layout routes */}
        <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
