import { useTranslation } from "react-i18next"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import {
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi"
import { Link } from "react-router-dom"

import footerLogo from "../../assets/images/footer-logo.png"
import footerPattern from "../../assets/images/footer-right.png"

import styles from "./Footer.module.scss"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.brandCol}>
            <Link to="/" className={styles.logoLink} aria-label="NeftGazProm">
              <img
                src={footerLogo}
                alt="NeftGazProm"
                className={styles.logo}
                loading="lazy"
              />
            </Link>
          </div>

          <div className={styles.linksCol}>
            <h3 className={styles.title}>{t("footer.main.title")}</h3>

            <nav className={styles.nav}>
              <Link to="/">{t("footer.main.home")}</Link>
              <Link to="/about">{t("footer.main.about")}</Link>
              <Link to="/products">{t("footer.main.shop")}</Link>
              <Link to="/blogs">{t("footer.main.blogs")}</Link>
              <Link to="/contact">{t("footer.main.contact")}</Link>
            </nav>
          </div>

          <div className={styles.linksCol}>
            <h3 className={styles.title}>{t("footer.service.title")}</h3>

            <nav className={styles.nav}>
              <Link to="/shipping">{t("footer.service.shipping")}</Link>
              <Link to="/returns">{t("footer.service.returns")}</Link>
              <Link to="/privacy">{t("footer.service.privacy")}</Link>
              <Link to="/terms">{t("footer.service.terms")}</Link>
            </nav>
          </div>

          <div className={styles.socialCol}>
            <h3 className={styles.title}>{t("footer.social.title")}</h3>

            <div className={styles.socials}>
              <a href="#" aria-label="Facebook" className={styles.socialItem}>
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className={styles.socialItem}>
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialItem}>
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialItem}>
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="YouTube" className={styles.socialItem}>
                <FaYoutube />
              </a>
            </div>

            <p className={styles.socialText}>neftgasprom</p>
          </div>

          <div className={styles.contactCol}>
            <h3 className={styles.title}>{t("footer.contact.title")}</h3>

            <ul className={styles.contactList}>
              <li>
                <span className={styles.icon}>
                  <FiMapPin />
                </span>
                <span>{t("footer.contact.address")}</span>
              </li>

              <li>
                <span className={styles.icon}>
                  <FiPhone />
                </span>
                <a href="tel:+998973428487">
                  +998 97 342 84 87
                </a>
              </li>

              <li>
                <span className={styles.icon}>
                  <FiMail />
                </span>
                <a href="mailto:oilgasstream@yahoo.com">
                  oilgasstream@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottomLine} />

        <img
          src={footerPattern}
          alt="pattern"
          className={styles.pattern}
          loading="lazy"
        />
      </div>

    </footer>
  )
}