import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">StudyWithCJ</Link>
        <div>
          <Link className="nav-link d-inline text-white" to="/">Trang chủ</Link>
          <Link className="nav-link d-inline text-white" to="/gioi-thieu">Giới thiệu</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
