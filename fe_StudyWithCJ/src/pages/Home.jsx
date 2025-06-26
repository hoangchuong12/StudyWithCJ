// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../assets/styles/Home.css'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()
  const sections = [
    {
      title: '🎯 Học tập theo mục tiêu',
      description:
        'Lựa chọn lộ trình học phù hợp với bạn: luyện thi, nâng cao kỹ năng, hoặc học theo sở thích.',
      img: 'https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg',
    },
    {
      title: '🧠 Bài kiểm tra thông minh',
      description:
        'Sử dụng trí tuệ nhân tạo để tự động tạo ra bài kiểm tra phù hợp với trình độ người học.',
      img: 'https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg',
    },
    {
      title: '📊 Theo dõi tiến độ học tập',
      description:
        'Biểu đồ và bảng thống kê giúp bạn biết mình đã học được bao nhiêu và cần cải thiện chỗ nào.',
      img: 'https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg',
    },
  ]

  return (
    <div>
      <section className="hero bg-light text-center py-5">
        <motion.h1
          className="display-5 fw-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('home.welcome')}<span className="text-primary">Study With CJ</span>
        </motion.h1>
        <motion.p
          className="lead mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {t('home.description')}
        </motion.p>
      </section>

      {sections.map((section, idx) => (
        <FeatureSection key={idx} {...section} reverse={idx % 2 === 1} />
      ))}
      <motion.div className="marquee-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}>
        <div className="marquee-track">
          <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="1" />
          <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="2" />
          <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="3" />
          <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="5" />
          {/* repeat again to make infinite effect */}
          <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="2" />
          <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="3" />
          <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="4" />
          <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="5" />
        </div>
      </motion.div>
    </div>
  )
}

function FeatureSection({ title, description, img, reverse }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.section
      ref={ref}
      className={`container py-5 d-flex align-items-center flex-column flex-md-row ${reverse ? 'flex-md-row-reverse' : ''
        }`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="col-md-6 text-center text-md-start px-3">
        <h2 className="text-primary">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className="col-md-6 px-3 text-center">
        <img src={img} className="img-fluid rounded shadow-sm" alt={title} />
      </div>
    </motion.section>
  )
}

export default Home
