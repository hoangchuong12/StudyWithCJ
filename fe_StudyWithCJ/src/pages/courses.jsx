// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import '../assets/styles/Courses.scss'

const courses = [
    {
        title: '💻 Lập trình Web cơ bản',
        description: 'Học HTML, CSS, JavaScript từ cơ bản đến nâng cao.',
        image: 'https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg',
    },
    {
        title: '🧠 Kỹ năng tư duy phản biện',
        description: 'Rèn luyện tư duy logic, sáng tạo, và phân tích.',
        image: 'https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg',
    },
    {
        title: '📈 Kinh tế học cơ bản',
        description: 'Hiểu các nguyên lý kinh tế và áp dụng thực tiễn.',
        image: 'https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg',
    },
    {
        title: '📝 Luyện thi THPT Quốc Gia',
        description: 'Tổng hợp kiến thức Toán, Lý, Hóa, Văn cho kỳ thi.',
        image: 'https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg',
    },
]

function Courses() {
    const { t } = useTranslation()
    return (
        <div className="courses-page">
            <section className="courses-hero text-center text-white py-5">
                <motion.h1
                    className="display-4 fw-bold"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {t('courses.courses')}
                </motion.h1>
                <motion.p
                    className="lead mt-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    {t('courses.description')}
                </motion.p>
            </section>

            <section className="container py-5">
                <div className="row">
                    {courses.map((course, idx) => (
                        <motion.div
                            className="col-md-6 col-lg-4 mb-4"
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="card h-100 shadow-sm border-0">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="card-img-top"
                                    style={{ maxHeight: '180px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{course.title}</h5>
                                    <p className="card-text">{course.description}</p>
                                    <button className="btn btn-outline-primary w-100">Xem chi tiết</button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Courses
