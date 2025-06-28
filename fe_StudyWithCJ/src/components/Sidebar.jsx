import { NavLink } from 'react-router-dom'
import {
    FaHome, FaUser, FaTrophy, FaShoppingCart,
    FaBox, FaChartLine, FaEnvelope, FaCog,
    FaStar, FaHistory, FaSignOutAlt
} from 'react-icons/fa'
import '../assets/styles/Sidebar.scss';

const Sidebar = () => {
    const links = [
        { to: '/admin', icon: <FaHome />, label: 'Dashboard' },
        { to: '/admin/profile', icon: <FaUser />, label: 'Profile' },
        { to: '/admin/leaderboard', icon: <FaTrophy />, label: 'Leaderboard' },
        { to: '/admin/orders', icon: <FaShoppingCart />, label: 'Order' },
        { to: '/admin/products', icon: <FaBox />, label: 'Product' },
        { to: '/admin/sales', icon: <FaChartLine />, label: 'Sales Report' },
        { to: '/admin/messages', icon: <FaEnvelope />, label: 'Message' },
        { to: '/admin/settings', icon: <FaCog />, label: 'Settings' },
        { to: '/admin/favourite', icon: <FaStar />, label: 'Favourite' },
        { to: '/admin/history', icon: <FaHistory />, label: 'History' },
        { to: '/logout', icon: <FaSignOutAlt />, label: 'Signout' },
    ]

    return (
        <div className="sidebar sidebar-container">
            {links.map(({ to, icon, label }) => (
                <NavLink
                    key={to}
                    to={to} a
                    className="sidebar-link"
                    activeclassname="active"
                >
                    <span className="icon">{icon}</span>
                    <span className="label">{label}</span>
                </NavLink>
            ))}
        </div>
    )
}

export default Sidebar
