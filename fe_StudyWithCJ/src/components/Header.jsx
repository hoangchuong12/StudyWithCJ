import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

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
          <ul className="navbar-nav ms-auto">
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
              <Link className="nav-link" to="/gioi-thieu">{t('nav.contact')}</Link>
            </li>

          </ul>
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
                className="btn btn-outline-light btn-sm py-0 px-2"
                style={{ fontSize: '0.75rem' }}
              >
                EN
              </button>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Header
