import { useTranslation } from "react-i18next"
import { FiArrowUpRight, FiAward, FiCheckCircle, FiLayers, FiShield, FiTrendingUp } from "react-icons/fi"
import { Link } from "react-router-dom"

import aboutImg from "../../assets/images/about-products1.jpg"
import cert1 from "../../assets/images/certificate/certificate1.png"
import cert2 from "../../assets/images/certificate/certificate2.png"
import cert3 from "../../assets/images/certificate/certificate3.png"

import styles from "./About.module.scss"

export default function About() {
  const { t } = useTranslation()

  const advantages = [
    {
      icon: <FiShield />,
      title: t("aboutPage.advantages.quality.title"),
      text: t("aboutPage.advantages.quality.text"),
    },
    {
      icon: <FiTrendingUp />,
      title: t("aboutPage.advantages.experience.title"),
      text: t("aboutPage.advantages.experience.text"),
    },
    {
      icon: <FiLayers />,
      title: t("aboutPage.advantages.approach.title"),
      text: t("aboutPage.advantages.approach.text"),
    },
  ]

  const certificates = [cert1, cert2, cert3]

  return (
    <main className={styles.aboutPage}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.heroLabel}>{t("aboutPage.label")}</span>

              <h1 className={styles.heroTitle}>{t("aboutPage.title")}</h1>

              <p className={styles.heroText}>{t("aboutPage.description")}</p>

              <div className={styles.heroActions}>
                <Link to="/contact" className={styles.primaryBtn}>
                  <span>{t("aboutPage.buttons.contact")}</span>
                  <FiArrowUpRight />
                </Link>

                <Link to="/projects" className={styles.secondaryBtn}>
                  <span>{t("aboutPage.buttons.projects")}</span>
                </Link>
              </div>

              <div className={styles.heroStats}>
                <div className={styles.statCard}>
                  <strong>18+</strong>
                  <span>{t("aboutPage.stats.experience")}</span>
                </div>

                <div className={styles.statCard}>
                  <strong>120+</strong>
                  <span>{t("aboutPage.stats.projects")}</span>
                </div>

                <div className={styles.statCard}>
                  <strong>50+</strong>
                  <span>{t("aboutPage.stats.team")}</span>
                </div>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.imageStack}>
                <div className={styles.mainImageCard}>
                  <img src={aboutImg} alt="About company" />
                </div>

                <div className={styles.floatingBadge}>
                  <FiAward />
                  <div>
                    <strong>{t("aboutPage.badge.title")}</strong>
                    <span>{t("aboutPage.badge.text")}</span>
                  </div>
                </div>

                <div className={styles.experienceCard}>
                  <span>{t("aboutPage.experience.small")}</span>
                  <strong>{t("aboutPage.experience.title")}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyWrapper}>
            <div className={styles.storyLeft}>
              <span className={styles.sectionLabel}>{t("aboutPage.story.label")}</span>
              <h2 className={styles.sectionTitle}>{t("aboutPage.story.title")}</h2>
            </div>

            <div className={styles.storyRight}>
              <p>{t("aboutPage.story.text1")}</p>
              <p>{t("aboutPage.story.text2")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.advantagesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>{t("aboutPage.advantageLabel")}</span>
            <h2 className={styles.sectionTitle}>{t("aboutPage.advantageTitle")}</h2>
          </div>

          <div className={styles.advantagesGrid}>
            {advantages.map((item, index) => (
              <div key={index} className={styles.advantageCard}>
                <div className={styles.advantageIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesLayout}>
            <div className={styles.valuesContent}>
              <span className={styles.sectionLabel}>{t("aboutPage.values.label")}</span>
              <h2 className={styles.sectionTitle}>{t("aboutPage.values.title")}</h2>
              <p className={styles.valuesText}>{t("aboutPage.values.text")}</p>

              <div className={styles.checkList}>
                <div className={styles.checkItem}>
                  <FiCheckCircle />
                  <span>{t("aboutPage.values.items.item1")}</span>
                </div>
                <div className={styles.checkItem}>
                  <FiCheckCircle />
                  <span>{t("aboutPage.values.items.item2")}</span>
                </div>
                <div className={styles.checkItem}>
                  <FiCheckCircle />
                  <span>{t("aboutPage.values.items.item3")}</span>
                </div>
                <div className={styles.checkItem}>
                  <FiCheckCircle />
                  <span>{t("aboutPage.values.items.item4")}</span>
                </div>
              </div>
            </div>

            <div className={styles.valuesSide}>
              <div className={styles.miniInfoCard}>
                <h3>{t("aboutPage.miniCard.title")}</h3>
                <p>{t("aboutPage.miniCard.text")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.certificateSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>{t("aboutPage.certificates.label")}</span>
            <h2 className={styles.sectionTitle}>{t("aboutPage.certificates.title")}</h2>
          </div>

          <div className={styles.certificateGrid}>
            {certificates.map((item, index) => (
              <div key={index} className={styles.certificateCard}>
                <img src={item} alt={`certificate-${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}