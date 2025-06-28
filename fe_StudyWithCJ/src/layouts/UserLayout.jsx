import Header from '../components/Header'
import Footer from '../components/Footer'
import LoadingProgressBar from '../components/LoadingProgressBar'

const UserLayout = ({ children }) => (
    <>
        <Header />
        <LoadingProgressBar />
        <div className="container mt-4">
            {children}
        </div>
        <Footer />
    </>
)

export default UserLayout
