import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../assets/styles/Header.css'

function Header() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">StudyWithCJ</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          {/* LEFT SIDE MENU */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">{t('nav.home')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gioi-thieu">{t('nav.about')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/khoa-hoc">{t('nav.courses')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lien-he">{t('nav.contact')}</Link>
            </li>
          </ul>

          {/* RIGHT SIDE - LANGUAGE + LOGIN */}
          <ul className="navbar-nav">
            <li className="nav-item d-flex align-items-center">
              <button
                onClick={() => changeLanguage('vi')}
                className="btn btn-outline-light btn-sm py-0 px-2 me-2"
                style={{ fontSize: '0.75rem' }}
              >
                VI
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className="btn btn-outline-light btn-sm py-0 px-2 me-3"
                style={{ fontSize: '0.75rem' }}
              >
                EN
              </button>
              <Link
                className="nav-link btn btn-outline-light btn-sm fw-bold login-btn"
                to="/login"
                style={{ fontSize: '0.85rem', padding: '2px 10px', marginRight: '8px' }}
              >
                {t('header.login') || 'Login'}
              </Link>


            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
