import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react"
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
  FiXCircle,
} from "react-icons/fi"
import { Link } from "react-router-dom"
import FloatingActions from "../../components/FloatingActions/FloatingActions"

import styles from "./Contact.module.scss"

type FormData = {
  fullName: string
  phone: string
  message: string
}

type FormErrors = {
  fullName?: string
  phone?: string
  message?: string
}

type NotificationState = {
  show: boolean
  type: "success" | "error"
  message: string
}

export default function Contact() {
  const { t, i18n } = useTranslation()
  const hideNotificationTimeout = useRef<number | null>(null)

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)

  const [notification, setNotification] = useState<NotificationState>({
    show: false,
    type: "success",
    message: "",
  })

  useEffect(() => {
    return () => {
      if (hideNotificationTimeout.current) {
        window.clearTimeout(hideNotificationTimeout.current)
      }
    }
  }, [])

  const showNotification = (type: "success" | "error", message: string) => {
    if (hideNotificationTimeout.current) {
      window.clearTimeout(hideNotificationTimeout.current)
    }

    setNotification({
      show: true,
      type,
      message,
    })

    hideNotificationTimeout.current = window.setTimeout(() => {
      setNotification((prev) => ({
        ...prev,
        show: false,
      }))
    }, 3500)
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = t("contact.form.validation.fullNameRequired")
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = t("contact.form.validation.fullNameMin")
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t("contact.form.validation.phoneRequired")
    } else {
      const cleanedPhone = formData.phone.replace(/[^\d+]/g, "")
      const phoneRegex = /^\+?\d{9,15}$/

      if (!phoneRegex.test(cleanedPhone)) {
        newErrors.phone = t("contact.form.validation.phoneInvalid")
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.form.validation.messageRequired")
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("contact.form.validation.messageMin")
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    try {
      setIsLoading(true)

      const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
      const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

      if (!botToken || !chatId) {
        throw new Error("Telegram sozlamalari topilmadi")
      }

      const now = new Date()

      const formattedDate = new Intl.DateTimeFormat(i18n.language, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }).format(now)

      const formattedTime = new Intl.DateTimeFormat(i18n.language, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now)

      const text = `
<b>━━━━━━━━━━━━━━━</b>
<b>📩 ${t("contact.telegram.title")}</b>
<b>━━━━━━━━━━━━━━━</b>

<b>👤 ${t("contact.telegram.client")}:</b>
${formData.fullName}

<b>📞 ${t("contact.telegram.phone")}:</b>
${formData.phone}

<b>💬 ${t("contact.telegram.message")}:</b>
${formData.message}

<b>📅 ${t("contact.telegram.date")}:</b> ${formattedDate}
<b>🕒 ${t("contact.telegram.time")}:</b> ${formattedTime}

<b>🌐 ${t("contact.telegram.page")}:</b> ${t("contact.breadcrumb.current")}
<b>✅ ${t("contact.telegram.status")}:</b> ${t("contact.telegram.new")}
      `.trim()

      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "HTML",
          }),
        }
      )

      const result = await response.json()

      if (!response.ok || !result.ok) {
        throw new Error(result?.description || "Xabar yuborilmadi")
      }

      setFormData({
        fullName: "",
        phone: "",
        message: "",
      })

      setErrors({})

      showNotification("success", t("contact.form.success"))
    } catch (error) {
      console.error("Telegram send error:", error)
      showNotification("error", t("contact.form.error"))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className={styles.contactPage}>
      <FloatingActions />
      {notification.show && (
        <div
          className={`${styles.notification} ${
            notification.type === "success"
              ? styles.notificationSuccess
              : styles.notificationError
          }`}
        >
          <div className={styles.notificationIcon}>
            {notification.type === "success" ? <FiCheckCircle /> : <FiXCircle />}
          </div>
          <span>{notification.message}</span>
        </div>
      )}

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
                      className={errors.fullName ? styles.inputError : ""}
                    />
                    {errors.fullName && (
                      <span className={styles.fieldError}>{errors.fullName}</span>
                    )}
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
                      className={errors.phone ? styles.inputError : ""}
                    />
                    {errors.phone && (
                      <span className={styles.fieldError}>{errors.phone}</span>
                    )}
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
                      className={errors.message ? styles.inputError : ""}
                    />
                    {errors.message && (
                      <span className={styles.fieldError}>{errors.message}</span>
                    )}
                  </div>
                </div>

                <div className={styles.formActions}>
                  <button
                    type="submit"
                    className={`${styles.submitBtn} ${
                      isLoading ? styles.submitBtnLoading : ""
                    }`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className={styles.spinner} />
                        <span>{t("contact.form.sending")}</span>
                      </>
                    ) : (
                      <>
                        <FiSend />
                        <span>{t("contact.form.send")}</span>
                      </>
                    )}
                  </button>

                  <div className={styles.formHint}>
                    <FiCheckCircle />
                    <span>{t("contact.features.fast")}</span>
                  </div>
                </div>
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