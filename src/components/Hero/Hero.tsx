import { useTranslation } from "react-i18next";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import heroLeft from "../../assets/images/hero-left.jpg";
import patternImg from "../../assets/images/hero-right.png";

import styles from "./Hero.module.scss";

const Hero = () => {
  const { t } = useTranslation();

  const slides = [
    {
      id: 1,
      image: heroLeft,
      title: t("hero.title"),
    },
    {
      id: 2,
      image: heroLeft,
      title: t("hero.title"),
    },
    {
      id: 3,
      image: heroLeft,
      title: t("hero.title"),
    },
  ];

  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        speed={800}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slide}>
              <div className={styles.container}>
                <div className={styles.inner}>
                  {/* LEFT */}
                  <div className={styles.left}>
                    <div className={styles.imageWrapper}>
                      <img src={slide.image} alt="Hero" />
                    </div>

                    <button className={styles.cta}>
                      {t("hero.button")}
                    </button>
                  </div>

                  {/* RIGHT */}
                  <div className={styles.right}>
                    <span>
                      <strong>NeftGasProm</strong> {slide.title}
                    </span>

                    <div className={styles.pattern}>
                      <img src={patternImg} alt="pattern" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;