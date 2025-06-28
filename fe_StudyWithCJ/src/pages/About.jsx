// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import '../assets/styles/About.scss'
import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()

  return (
    <div className="about-page">
      <section className="about-hero bg-primary text-white text-center py-5">
        <motion.h1
          className="display-4 fw-bold"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('about.About')}Study With CJ
        </motion.h1>
        <motion.p
          className="lead mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {t('about.description')}
        </motion.p>
      </section>

      <section className="container py-5">
        <motion.div className="row align-items-center mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}>
          <div className="col-md-6">
            <h2 className="text-primary">🌟 Sứ mệnh của chúng tôi</h2>
            <p className="lead">
              Study With CJ ra đời với mục tiêu mang đến môi trường học tập linh hoạt, thông minh và phù hợp với nhu cầu thực tế của người học Việt.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg"
              className="img-fluid rounded shadow"
              alt="Sứ mệnh"
            />
          </div>
        </motion.div>

        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-6">
            <h2 className="text-primary">🚀 Tính năng nổi bật</h2>
            <ul className="list-unstyled fs-5">
              <li>✅ Học theo mục tiêu cá nhân</li>
              <li>✅ Bài kiểm tra thông minh</li>
              <li>✅ Theo dõi tiến độ học tập</li>
              <li>✅ Giao diện thân thiện, đa nền tảng</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg"
              className="img-fluid rounded shadow"
              alt="Tính năng"
            />
          </div>
        </div>
      </section>

      <section className="bg-light py-4 text-center">
        <h4 className="mb-3">📞 Liên hệ với chúng tôi</h4>
        <p className="mb-1">Email: info@studywithcj.vn</p>
        <p>Hotline: 0813 399 400</p>
      </section>
    </div>
  )
}

export default About
