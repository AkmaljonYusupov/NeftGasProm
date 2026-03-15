import { useState, type ChangeEvent, type FormEvent } from "react"
import { useTranslation } from "react-i18next"
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiHome,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi"
import { Link } from "react-router-dom"

import styles from "./Contact.module.scss"

type FormData = {
  fullName: string
  phone: string
  email: string
  message: string
}

export default function Contact() {
  const { t } = useTranslation()

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log("Contact form:", formData)

    setIsSubmitted(true)

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      message: "",
    })

    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <main className={styles.contactPage}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroWrapper}>
            <div className={styles.heroGlowOne} />
            <div className={styles.heroGlowTwo} />

            <div className={styles.heroGrid}>
              <div className={styles.heroLeft}>
                <div className={styles.heroTop}>
                  <span className={styles.heroLabel}>{t("contact.label")}</span>

                  <div className={styles.breadcrumb}>
                    <Link to="/" className={styles.breadcrumbLink}>
                      <FiHome />
                      <span>{t("contact.breadcrumb.home")}</span>
                    </Link>

                    <span className={styles.breadcrumbDivider}>/</span>

                    <span className={styles.breadcrumbCurrent}>
                      {t("contact.breadcrumb.current")}
                    </span>
                  </div>
                </div>

                <h1 className={styles.heroTitle}>{t("contact.title")}</h1>

                <p className={styles.heroText}>{t("contact.description")}</p>

                <div className={styles.heroButtons}>
                  <Link to="/" className={styles.primaryBtn}>
                    <span>{t("contact.backHome")}</span>
                    <FiArrowUpRight />
                  </Link>

                  <a href="tel:+998973428487" className={styles.secondaryBtn}>
                    <FiPhone />
                    <span>+998 97 342 84 87</span>
                  </a>
                </div>

                <div className={styles.heroFeatures}>
                  <div className={styles.heroFeature}>
                    <FiCheckCircle />
                    <span>{t("contact.features.fast")}</span>
                  </div>

                  <div className={styles.heroFeature}>
                    <FiCheckCircle />
                    <span>{t("contact.features.support")}</span>
                  </div>

                  <div className={styles.heroFeature}>
                    <FiCheckCircle />
                    <span>{t("contact.features.cooperation")}</span>
                  </div>
                </div>
              </div>

              <div className={styles.heroRight}>
                <div className={styles.contactQuickCard}>
                  <div className={styles.quickTop}>
                    <span className={styles.quickBadge}>
                      {t("contact.quick.title")}
                    </span>
                    <h3>{t("contact.quick.subtitle")}</h3>
                  </div>

                  <div className={styles.quickItems}>
                    <a href="tel:+998973428487" className={styles.quickItem}>
                      <div className={styles.quickIcon}>
                        <FiPhone />
                      </div>
                      <div>
                        <span>{t("contact.quick.phone")}</span>
                        <strong>+998 97 342 84 87</strong>
                      </div>
                    </a>

                    <a
                      href="mailto:oilgasstream@yahoo.com"
                      className={styles.quickItem}
                    >
                      <div className={styles.quickIcon}>
                        <FiMail />
                      </div>
                      <div>
                        <span>{t("contact.quick.email")}</span>
                        <strong>oilgasstream@yahoo.com</strong>
                      </div>
                    </a>

                    <div className={styles.quickItem}>
                      <div className={styles.quickIcon}>
                        <FiMapPin />
                      </div>
                      <div>
                        <span>{t("contact.quick.address")}</span>
                        <strong>{t("contact.cards.address.text")}</strong>
                      </div>
                    </div>

                    <div className={styles.quickItem}>
                      <div className={styles.quickIcon}>
                        <FiClock />
                      </div>
                      <div>
                        <span>{t("contact.cards.time.title")}</span>
                        <strong>{t("contact.cards.time.text")}</strong>
                      </div>
                    </div>
                  </div>

                  <div className={styles.quickBottom}>
                    <div className={styles.quickStat}>
                      <strong>24/7</strong>
                      <span>{t("contact.stats.support")}</span>
                    </div>
                    <div className={styles.quickStat}>
                      <strong>100%</strong>
                      <span>{t("contact.stats.reply")}</span>
                    </div>
                    <div className={styles.quickStat}>
                      <strong>1A</strong>
                      <span>{t("contact.stats.office")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactLayout}>
            <div className={styles.leftPanel}>
              <div className={styles.panelHeader}>
                <span className={styles.panelLabel}>
                  {t("contact.form.smallTitle")}
                </span>
                <h2 className={styles.panelTitle}>{t("contact.form.title")}</h2>
                <p className={styles.panelText}>{t("contact.form.text")}</p>
              </div>

              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                  <div className={styles.infoCardIcon}>
                    <FiPhone />
                  </div>
                  <div>
                    <h3>{t("contact.cards.phone.title")}</h3>
                    <a href="tel:+998973428487">+998 97 342 84 87</a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoCardIcon}>
                    <FiMail />
                  </div>
                  <div>
                    <h3>{t("contact.cards.email.title")}</h3>
                    <a href="mailto:oilgasstream@yahoo.com">
                      oilgasstream@yahoo.com
                    </a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoCardIcon}>
                    <FiMapPin />
                  </div>
                  <div>
                    <h3>{t("contact.cards.address.title")}</h3>
                    <p>{t("contact.cards.address.text")}</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.infoCardIcon}>
                    <FiClock />
                  </div>
                  <div>
                    <h3>{t("contact.cards.time.title")}</h3>
                    <p>{t("contact.cards.time.text")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.rightPanel}>
              <form className={styles.formCard} onSubmit={handleSubmit}>
                <div className={styles.formTop}>
                  <h3>{t("contact.form.formTitle")}</h3>
                  <p>{t("contact.form.formDesc")}</p>
                </div>

                <div className={styles.inputGrid}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="fullName">
                      {t("contact.form.fields.fullName")}
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={t("contact.form.placeholders.fullName")}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="phone">
                      {t("contact.form.fields.phone")}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("contact.form.placeholders.phone")}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="email">
                      {t("contact.form.fields.email")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("contact.form.placeholders.email")}
                      required
                    />
                  </div>

                  <div className={`${styles.inputGroup} ${styles.messageGroup}`}>
                    <label htmlFor="message">
                      {t("contact.form.fields.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={7}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t("contact.form.placeholders.message")}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formActions}>
                  <button type="submit" className={styles.submitBtn}>
                    <FiSend />
                    <span>{t("contact.form.send")}</span>
                  </button>

                  <div className={styles.formHint}>
                    <FiCheckCircle />
                    <span>{t("contact.features.fast")}</span>
                  </div>
                </div>

                {isSubmitted && (
                  <div className={styles.successMessage}>
                    <FiCheckCircle />
                    <span>{t("contact.form.success")}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className={styles.container}>
          <div className={styles.mapWrapper}>
            <iframe
              className={styles.mapFrame}
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95927.8162321638!2d69.12541983396183!3d41.29267010432548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1773486841222!5m2!1sru!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("home.map.title")}
            />
          </div>
        </div>
      </section>
    </main>
  )
}