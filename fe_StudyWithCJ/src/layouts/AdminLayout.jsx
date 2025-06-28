import Sidebar from '../components/Sidebar'
import '../assets/styles/admin.scss'
import React from 'react'
import LoadingProgressBar from '../components/LoadingProgressBar'

const AdminLayout = ({ children }) => {
    return (
        <div className="admin-layout d-flex">
            <LoadingProgressBar />
            <Sidebar />
            <main className="admin-content p-4 flex-grow-1 bg-dark text-white">
                {children}
            </main>
        </div>
    )
}

export default AdminLayout
