import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { FiArrowUp, FiPhoneCall } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import styles from "./FloatingActions.module.scss"

export default function FloatingActions() {
  const navigate = useNavigate()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 220)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <button
        type="button"
        className={styles.contactFloat}
        onClick={() => navigate("/contact")}
        aria-label={t("floating.contact", "Bog‘lanish")}
      >
        <span className={styles.contactAura}></span>
        <span className={styles.contactRing}></span>
        <span className={styles.contactRingDelay}></span>
        <span className={styles.contactShine}></span>
        <span className={styles.contactCore}></span>
        <span className={styles.tooltipLeft}>
          {t("floating.contact", "Bog‘lanish")}
        </span>
        <FiPhoneCall />
      </button>

      <button
        type="button"
        className={`${styles.scrollTop} ${showScrollTop ? styles.show : ""}`}
        onClick={scrollToTop}
        aria-label={t("floating.toTop", "Yuqoriga")}
      >
        <span className={styles.scrollAura}></span>
        <span className={styles.scrollOrbit}></span>
        <span className={styles.scrollShine}></span>
        <span className={styles.scrollCore}></span>
        <span className={styles.tooltipRight}>
          {t("floating.toTop", "Yuqoriga")}
        </span>
        <FiArrowUp />
      </button>
    </>
  )
}