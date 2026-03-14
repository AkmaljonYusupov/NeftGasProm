import { useState } from "react"
import { useTranslation } from "react-i18next"

import aboutMainImage from "../../assets/images/about-main.jpg"
import aboutProducts1 from "../../assets/images/about-products1.jpg"
import aboutProducts2 from "../../assets/images/about-products2.jpg"
import aboutProducts3 from "../../assets/images/about-products3.jpg"
import aboutProducts4 from "../../assets/images/about-products4.jpg"
import aboutImgRight from "../../assets/images/hero-right.png"
import social1 from "../../assets/images/social1.png"
import social2 from "../../assets/images/social2.png"
import social3 from "../../assets/images/social3.png"
import social4 from "../../assets/images/social4.png"
import social5 from "../../assets/images/social5.png"

// partner logolari
import ACWApowerLogo from "../../assets/partner/ACWA_Power_logo.png"

import BIgroup from "../../assets/partner/BIgroupTashkent.png"
import ChinaConstructionBank from "../../assets/partner/China_Construction_Bank_Logo.png"
import ClikerHolding from "../../assets/partner/Cliker-Holding-Color-Logo-New.png"
import EnterEngineering from "../../assets/partner/EnterEngineering.png"
import Epsilon from "../../assets/partner/epsilon-og-image.png"
import KocConstruction from "../../assets/partner/KocConstruction.png"
import NGMK from "../../assets/partner/NGMK.png"
import UEDconstruction from "../../assets/partner/UEDconstruction.png"
import UzbekGidroEnergo from "../../assets/partner/UzbekGidroEnergo.png"
import UzbekistanTemirYollari from "../../assets/partner/Uzbekistantemiryollari.png"
import Uzelectroapparat from "../../assets/partner/Uzelectroapparat.png"

const partners = [
  ACWApowerLogo,
  BIgroup,
  ClikerHolding,
  ChinaConstructionBank,
  EnterEngineering,
  Epsilon,
  KocConstruction,
  NGMK,
  UzbekGidroEnergo,
  UEDconstruction,
  UzbekistanTemirYollari,
  Uzelectroapparat
]


import { FiInstagram } from 'react-icons/fi'
import styles from "./Home.module.scss"

// Mahsulot tipi
type Product = {
  id: number
  image: string
  name: string
  description: string
}

export default function Home() {
  const { t } = useTranslation()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  // Mahsulotlar ro'yxati — nom va tavsif tarjimadan olinadi
  const products: Product[] = [
    {
      id: 1,
      image: aboutProducts1,
      name: t("home.product1.name"),
      description: t(
        "home.product1.desc"),
    },
    {
      id: 2,
      image: aboutProducts2,
      name: t("home.product2.name"),
      description: t(
        "home.product2.desc"),
    },
    {
      id: 3,
      image: aboutProducts3,
      name: t("home.product3.name"),
      description: t(
        "home.product3.desc"
      ),
    },
    {
      id: 4,
      image: aboutProducts4,
      name: t("home.product4.name", "BITUM-PRIMER"),
      description: t(
        "home.product4.desc"
      ),
    },
  ]

  return (
    <main className={styles.home}>
      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          {/* Sarlavha */}
          <h2 className={styles.mainTitle}>{t("home.about.title")}</h2>

          {/* Mahsulotlar grid */}
          <div className={styles.imagesGrid}>
            {products.map((product) => (
              <div
                key={product.id}
                className={styles.imageItem}
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.gridImage}
                  loading="lazy"
                />

                <div className={styles.overlay}>
                  <span className={styles.overlayText}>
                    {t("home.about.product.title")}
                  </span>

                  <button className={styles.overlayButton}>
                    {t("home.about.more")}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Chapda katta rasm + o'ngda matn */}
          <div className={styles.mainContent}>
            <div className={styles.leftImageBlock}>
              <img
                src={aboutMainImage}
                alt={t("home.about.alt.main")}
                className={styles.mainImage}
                loading="lazy"
              />
            </div>

            <div className={styles.rightTextBlock}>
              <h3 className={styles.logoText}>{t("home.about.title")}</h3>

              <p className={styles.description}>
                {t("home.about.description")}
              </p>

              <button className={styles.moreBtn}>
                {t("home.about.more")}
              </button>

              <img
                className={styles.aboutImgRight}
                src={aboutImgRight}
                alt="decor"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal oynasi */}
      {selectedProduct && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setSelectedProduct(null)}
              aria-label={t("common.close")}
            >
              ×
            </button>

            <div className={styles.modalInner}>
              {/* Rasm tarafi */}
              <div className={styles.modalImageSide}>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className={styles.modalImage}
                />
              </div>

              {/* Matn tarafi */}
              <div className={styles.modalTextSide}>
                <h3 className={styles.modalTitle}>
                  {selectedProduct.name}
                </h3>

                <p className={styles.modalDescription}>
                  {selectedProduct.description}
                </p>

                <button className={styles.modalContactBtn}>
                  {t("common.contact")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      
      {/* Social media */}
 <section className={styles.socialSection}>
  <div className={styles.container}>
    <h2 className={styles.socialTitle}>
      {t("home.social.title")}
    </h2>

    <div className={styles.socialGrid}>
      {/* katta rasm */}
      <div className={`${styles.socialCard} ${styles.socialCardLarge}`}>
        <img src={social1} alt="social 1" loading="lazy" />
        <a href="#" className={styles.socialIcon}>
          <FiInstagram />
        </a>
      </div>

      {/* o‘ng yuqori */}
      <div className={styles.socialCard}>
        <img src={social2} alt="social 2" loading="lazy" />
        <a href="#" className={styles.socialIcon}>
          <FiInstagram />
        </a>
      </div>

      <div className={styles.socialCard}>
        <img src={social3} alt="social 3" loading="lazy" />
        <a href="#" className={styles.socialIcon}>
          <FiInstagram />
        </a>
      </div>

      {/* pastki qator */}
      <div className={styles.socialCard}>
        <img src={social4} alt="social 4" loading="lazy" />
        <a href="#" className={styles.socialIcon}>
          <FiInstagram />
        </a>
      </div>

      <div className={styles.socialCard}>
        <img src={social5} alt="social 5" loading="lazy" />
        <a href="#" className={styles.socialIcon}>
          <FiInstagram />
        </a>
      </div>
    </div>
  </div>
</section>

{/* Partnerlar bo'limi */}
<section className={styles.partnersSection}>
  <div className={styles.container}>
    <h2 className={styles.partnersTitle}>
      {t("home.partners.title")}
    </h2>

    <div className={styles.partnersGrid}>
      {partners.map((logo, index) => (
        <div key={index} className={styles.partnerCard}>
          <img
            src={logo}
            alt={`partner-${index}`}
            className={styles.partnerLogo}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
</section>

{/* MIJOZLARIMIZ FIKRI */}
<section className={styles.testimonialSection}>
  <div className={styles.container}>
    <h2 className={styles.testimonialTitle}>
      {t("home.testimonial.title")}
    </h2>
    <p className={styles.testimonialDesc}>
      {t("home.testimonial.desc")}
    </p>
    <div className={styles.testimonialGrid}>
      <div className={styles.testimonialCard}>
        <div className={styles.stars}>★★★★★</div>
        <h3 className={styles.clientName}>
         {t("home.testimonial.client1.name")}
        </h3>
        <p className={styles.clientText}>
          {t("home.testimonial.client1.text")}
        </p>
      </div>
      <div className={styles.testimonialCard}>
        <div className={styles.stars}>★★★★★</div>
        <h3 className={styles.clientName}>
          {t("home.testimonial.client2.name")}
        </h3>
        <p className={styles.clientText}>
          {t("home.testimonial.client2.text")}
        </p>
      </div>
      <div className={styles.testimonialCard}>
        <div className={styles.stars}>★★★★★</div>
        <h3 className={styles.clientName}>
          {t("home.testimonial.client3.name")}
        </h3>
        <p className={styles.clientText}>
          {t("home.testimonial.client3.text")}
        </p>
      </div>
    </div>
  </div>
</section>




    </main>
  )
}