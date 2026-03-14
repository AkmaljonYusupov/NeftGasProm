import { Menu } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"
import logoIcon from "../../assets/images/logo.png"; // ← logo.png ni shu yerga joylang
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"
import OffCanvas from "../OffCanvas/OffCanvas"
import styles from "./Navbar.module.scss"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <header className={styles.header}>

     


      <div className={styles.header__inner}>
        <nav className={styles.nav}>
          {/* Yangi logo — faqat PNG rasm */}
          <NavLink to="/" className={styles.logo}>
            <img
              src={logoIcon}
              alt="NEFTGAZPROM"
              width={200}        // biroz kengaytirildi
              height={55}
            />
          </NavLink>

          {/* Navigation links */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            {t("nav.home")}
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            {t("nav.products")}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            {t("nav.about")}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            {t("nav.contact")}
          </NavLink>

          {/* Language switcher */}
          <div className={styles.langWrapper}>
            <LanguageSwitcher />
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className={styles.hamburger}
            aria-label="Open mobile menu"
          >
            <Menu size={32} />
          </button>
        </nav>
      </div>

      <OffCanvas isOpen={open} onClose={() => setOpen(false)} />
    </header>
  )
}

export default Navbar