import { useTranslation } from "react-i18next"
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiLayers,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi"
import { Link } from "react-router-dom"
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import heroImg1 from "../../assets/images/Slider01.jpg"
import heroImg2 from "../../assets/images/Slider02.jpg"
import heroImg3 from "../../assets/images/Slider03.jpg"
import heroImg4 from "../../assets/images/Slider04.jpg"
import patternImg from "../../assets/images/hero-right.png"

import styles from "./Hero.module.scss"

const Hero = () => {
  const { t } = useTranslation()

  const slides = [
    {
      id: 1,
      image: heroImg1,
      product: t("hero.slides.0.product"),
      tag: t("hero.slides.0.tag"),
    },
    {
      id: 2,
      image: heroImg2,
      product: t("hero.slides.1.product"),
      tag: t("hero.slides.1.tag"),
    },
    {
      id: 3,
      image: heroImg3,
      product: t("hero.slides.2.product"),
      tag: t("hero.slides.2.tag"),
    },
    {
      id: 4,
      image: heroImg4,
      product: t("hero.slides.3.product"),
      tag: t("hero.slides.3.tag"),
    },
  ]

  return (
    <section className={styles.hero}>
      <div className={styles.bgGlowOne} />
      <div className={styles.bgGlowTwo} />
      <div className={styles.bgGrid} />

      <div className={styles.container}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCreative]}
          className={styles.heroSlider}
          loop
          speed={900}
          grabCursor
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: `.${styles.prevBtn}`,
            nextEl: `.${styles.nextBtn}`,
          }}
          effect="creative"
          creativeEffect={{
            prev: {
              translate: ["-8%", 0, -120],
              opacity: 0,
              scale: 0.96,
            },
            next: {
              translate: ["8%", 0, -120],
              opacity: 0,
              scale: 0.96,
            },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className={styles.heroSlide}>
              <div className={styles.slideCard}>
                <div className={styles.contentCol}>
                  <div className={styles.badges}>
                    <span className={styles.brandBadge}>NeftGasProm</span>
                    <span className={styles.tagBadge}>{slide.tag}</span>
                  </div>

                  <div className={styles.textWrap}>
                    <span className={styles.kicker}>{t("hero.kicker")}</span>

                    <h1 className={styles.title}>{slide.product}</h1>

                    <p className={styles.description}>{t("hero.description")}</p>
                  </div>

                  <div className={styles.actions}>
                    <Link to="/contact" className={styles.primaryButton}>
                      <span>{t("hero.button")}</span>
                      <FiArrowUpRight />
                    </Link>

                    <div className={styles.stats}>
                      <div className={styles.statItem}>
                        <strong>{t("hero.stats.experienceValue")}</strong>
                        <span>{t("hero.stats.experienceLabel")}</span>
                      </div>

                      <div className={styles.statDivider} />

                      <div className={styles.statItem}>
                        <strong>{t("hero.stats.qualityValue")}</strong>
                        <span>{t("hero.stats.qualityLabel")}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.features}>
                    <div className={styles.featureCard}>
                      <FiShield />
                      <div>
                        <strong>{t("hero.features.0.title")}</strong>
                        <span>{t("hero.features.0.text")}</span>
                      </div>
                    </div>

                    <div className={styles.featureCard}>
                      <FiTrendingUp />
                      <div>
                        <strong>{t("hero.features.1.title")}</strong>
                        <span>{t("hero.features.1.text")}</span>
                      </div>
                    </div>

                    <div className={styles.featureCard}>
                      <FiLayers />
                      <div>
                        <strong>{t("hero.features.2.title")}</strong>
                        <span>{t("hero.features.2.text")}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.visualCol}>
                  <div className={styles.visualFrame}>
                    <div className={styles.productIndex}>
                      <span>0{slide.id}</span>
                    </div>

                    <div className={styles.mainImageCard}>
                      <img src={slide.image} alt={slide.product} />
                      <div className={styles.imageShade} />
                    </div>

                    <div className={styles.patternCard}>
                      <img src={patternImg} alt={t("hero.patternAlt")} />
                    </div>

                    <div className={styles.infoCard}>
                      <span className={styles.infoLabel}>NeftGasProm</span>
                      <strong>{slide.product}</strong>
                      <p>{t("hero.floatingText")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className={styles.controls}>
            <button className={styles.prevBtn} type="button" aria-label="Previous slide">
              <FiChevronLeft />
            </button>
            <button className={styles.nextBtn} type="button" aria-label="Next slide">
              <FiChevronRight />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Hero