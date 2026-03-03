import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"
import styles from "./OffCanvas.module.scss"

const OffCanvas = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { t, i18n } = useTranslation()

  const languages = [
    { code: "uz", flag: "/flags/uz.png", name: "O‘zbek" },
    { code: "ru", flag: "/flags/ru.png", name: "Русский" },
    { code: "en", flag: "/flags/gb.png", name: "English" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className={styles.overlay} onClick={onClose} />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className={styles.canvas}
          >
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
              <X size={32} />
            </button>

            <nav className={styles.menu}>
              <NavLink
                to="/"
                onClick={onClose}
                className={({ isActive }) =>
                  isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink
                }
              >
                {t("nav.home")}
              </NavLink>

              <NavLink
                to="/products"
                onClick={onClose}
                className={({ isActive }) =>
                  isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink
                }
              >
                {t("nav.products")}
              </NavLink>

              <NavLink
                to="/about"
                onClick={onClose}
                className={({ isActive }) =>
                  isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink
                }
              >
                {t("nav.about")}
              </NavLink>

              <NavLink
                to="/contact"
                onClick={onClose}
                className={({ isActive }) =>
                  isActive ? `${styles.menuLink} ${styles.active}` : styles.menuLink
                }
              >
                {t("nav.contact")}
              </NavLink>
            </nav>

            <div className={styles.langSection}>
              <div className={styles.flags}>
                {languages.map((lang) => {
                  const isActive = i18n.language === lang.code

                  return (
                    <button
                      key={lang.code}
                      onClick={() => {
                        i18n.changeLanguage(lang.code)
                        onClose()
                      }}
                      className={`${styles.flagBtn} ${isActive ? styles.activeFlag : ""}`}
                    >
                      <div className={styles.flagCircle}>
                        <img src={lang.flag} alt={lang.name} />
                      </div>
                      <span className={styles.langLabel}>{lang.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default OffCanvas