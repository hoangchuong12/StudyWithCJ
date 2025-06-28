// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../assets/styles/Home.scss'
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
  ]
  const { ref, inView } = useInView({
    triggerOnce: true,   // chỉ chạy 1 lần
    threshold: 0.2       // phần tử xuất hiện 20% là được kích hoạt
  });


  return (
    <div>
      <section className="hero bg-light text-center py-5 fs-1">
        <motion.h1
          className="display-5 fw-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('home.welcome')}<span className="text-primary">Study With CJ</span>
        </motion.h1>
        <motion.p
          className="lead mt-3 fs-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {t('home.description')}
        </motion.p>
      </section>
      <div className="d-flex justify-content-center align-items-center vh-50 mt-5">
        <button className="btn btn-primary me-3">{t('home.createProject.startYourProject')}</button>
        <button className="btn btn-outline-secondary">{t('home.createProject.requestADemo')}</button>
      </div>
      <div className="container py-5 mb-5">
        <div className="d-flex justify-content-center">
          <div className="marquee-wrapper">
            <div className="marquee-track-container">
              <div className="marquee-group-1">
                {[...Array(10), ...Array(10)].map((_, i) => (
                  <img
                    key={i}
                    src="https://i.pinimg.com/736x/ab/a2/d8/aba2d88fa32a05bad7c82ee859c3f6b9.jpg"
                    alt={`img-${i}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-layout">
        <motion.div
          ref={ref}
          className="grid-wrapper"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="grid-item item-1">1</div>
          <div className="grid-item item-2">2</div>
          <div className="grid-item item-3">3</div>
          <div className="grid-item item-4">4</div>
          <div className="grid-item item-5">5</div>
          <div className="grid-item item-6">6</div>
          <div className="grid-item item-7">7</div>
          <div className="grid-item item-8">8</div>
          <div className="grid-item item-9">9</div>
        </motion.div>
      </div>


      <FeatureSection />

      {sections.map((section, idx) => (
        <FeatureSection key={idx} {...section} reverse={idx % 2 === 1} />
      ))}
      <motion.div className="marquee-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="marquee-track">
          <div className="marquee-group">
            <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="1" />
            <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="2" />
            <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="3" />
            <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="4" />
            <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="5" />
            <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="6" />
            <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="7" />

          </div>
          <div className="marquee-group">
            <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="1" />
            <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="2" />
            <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="3" />
            <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="4" />
            <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="5" />
            <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="6" />
            <img src="https://i.pinimg.com/736x/11/74/a2/1174a298a1ce096c1545c011f51aa7e9.jpg" alt="7" />

          </div>
        </div>
      </motion.div>
      <div>
        <motion.div
          className="container text-center py-5"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary mb-4">{t('home.getStarted')}</h2>
          <p className="lead mb-4">{t('home.getStartedDescription')}</p>
          <button className="btn btn-primary btn-lg">{t('home.getStartedButton')}</button>
        </motion.div>
      </div>
      <div className="video-wrapper container my-5">
        <video
          src="../../public/videos/myvideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="rounded shadow-sm w-100"
        />
      </div>
      <div className="container text-center py-5">
        <h2 className="text-primary mb-4">{t('home.contactUs')}</h2>
        <p className="lead mb-4">{t('home.contactDescription')}</p>
      </div>
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
