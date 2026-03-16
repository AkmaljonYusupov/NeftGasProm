import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import aboutMainImage from "../../assets/images/about-main.jpg"
import aboutProducts1 from "../../assets/images/about-products1.jpg"
import aboutProducts2 from "../../assets/images/about-products2.jpg"
import aboutProducts3 from "../../assets/images/about-products3.jpg"
import aboutProducts4 from "../../assets/images/about-products4.jpg"
import aboutImgRight from "../../assets/images/hero-right.png"

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

import { FiInstagram } from "react-icons/fi"
import styles from "./Home.module.scss"

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
  Uzelectroapparat,
]

const instagramPosts = [
  "https://www.instagram.com/reel/DQW9hsdjHTK/",
  "https://www.instagram.com/reel/DQhF3PUAr81/",
  "https://www.instagram.com/reel/DQ19nqSAj7N/",
  "https://www.instagram.com/reel/DQ1_15hApcH/",
  "https://www.instagram.com/reel/DI-za_pCHp_/",
  "https://www.instagram.com/reel/DQergA0AqKB/",
  "https://www.instagram.com/reel/DQ1_sHzAkBJ/",
  "https://www.instagram.com/reel/DQZMrLYgr6o/",
]

type Product = {
  id: number
  image: string
  name: string
  description: string
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

export default function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    const processInstagramEmbeds = () => {
      if (window.instgrm?.Embeds) {
        window.instgrm.Embeds.process()
      }
    }

    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    )

    if (existingScript) {
      processInstagramEmbeds()
      return
    }

    const script = document.createElement("script")
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    script.onload = () => processInstagramEmbeds()
    document.body.appendChild(script)

    return () => {
      script.onload = null
    }
  }, [])

  const products: Product[] = [
    {
      id: 1,
      image: aboutProducts1,
      name: t("home.product1.name"),
      description: t("home.product1.desc"),
    },
    {
      id: 2,
      image: aboutProducts2,
      name: t("home.product2.name"),
      description: t("home.product2.desc"),
    },
    {
      id: 3,
      image: aboutProducts3,
      name: t("home.product3.name"),
      description: t("home.product3.desc"),
    },
    {
      id: 4,
      image: aboutProducts4,
      name: t("home.product4.name", "BITUM-PRIMER"),
      description: t("home.product4.desc"),
    },
  ]

  return (
    <main className={styles.home}>
      {/* Product section start */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <div className={styles.productsHeader}>
            <h2 className={styles.productsTitle}>
              {t("home.products.title", "Bizning mahsulotlarimiz")}
            </h2>

            <p className={styles.productsSubtitle}>
              {t(
                "home.products.subtitle",
                "Sifatli va ishonchli gidroizolyatsiya mahsulotlari bilan tanishing"
              )}
            </p>
          </div>

          <div className={styles.productsGrid}>
            {products.map((product) => (
              <article
                key={product.id}
                className={styles.productCard}
                onClick={() => setSelectedProduct(product)}
              >
                <div className={styles.productImageWrap}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.productImage}
                    loading="lazy"
                  />

                  <div className={styles.productImageOverlay} />

                  <span className={styles.productFloatingTag}>
                    {t("home.products.cardTag", "Premium")}
                  </span>
                </div>

                <div className={styles.productBody}>
                  <h3 className={styles.productName}>{product.name}</h3>

                  <p className={styles.productDescription}>
                    {product.description}
                  </p>

                  <div className={styles.productFooter}>
                    <button
                      type="button"
                      className={styles.productMoreBtn}
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProduct(product)
                      }}
                    >
                      {t("home.products.more", "Batafsil")}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Product section end */}

      {/* About Section  start*/}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h2 className={styles.mainTitle}>{t("home.about.title")}</h2>

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

                 <button
                    type="button"
                   className={styles.moreBtn}
                    onClick={() => {
                      setSelectedProduct(null)
                      navigate("/products")
                    }}
                  >
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
      {/* About section end */}

      {/* Modal oynasi start*/}
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
              aria-label={t("common.close", "Yopish")}
              type="button"
            >
              ×
            </button>

            <div className={styles.modalInner}>
              <div className={styles.modalImageSide}>
                <div className={styles.modalImageFrame}>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className={styles.modalImage}
                  />
                </div>
              </div>

              <div className={styles.modalTextSide}>
                <span className={styles.modalBadge}>
                  {t("home.products.modalBadge", "Mahsulot haqida")}
                </span>

                <h3 className={styles.modalTitle}>{selectedProduct.name}</h3>

                <p className={styles.modalDescription}>
                  {selectedProduct.description}
                </p>

                <div className={styles.modalFeatures}>
                  <div className={styles.modalFeatureItem}>
                    <span className={styles.modalFeatureDot} />
                    <span>{t("home.products.feature1", "Yuqori sifat")}</span>
                  </div>

                  <div className={styles.modalFeatureItem}>
                    <span className={styles.modalFeatureDot} />
                    <span>
                      {t("home.products.feature2", "Ishonchli himoya")}
                    </span>
                  </div>

                  <div className={styles.modalFeatureItem}>
                    <span className={styles.modalFeatureDot} />
                    <span>
                      {t("home.products.feature3", "Uzoq muddatli natija")}
                    </span>
                  </div>
                </div>

                <div className={styles.modalActions}>
                  <button
                    type="button"
                    className={styles.modalContactBtn}
                    onClick={() => {
                      setSelectedProduct(null)
                      navigate("/contact")
                    }}
                  >
                    {t("common.contact", "Bog‘lanish")}
                  </button>

                  <button
                    type="button"
                    className={styles.modalSecondaryBtn}
                    onClick={() => {
                      setSelectedProduct(null)
                      navigate("/products")
                    }}
                  >
                    {t("home.products.more", "Batafsil")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Modal oynasi end */}

      {/* Social media start */}
      <section className={styles.socialSection}>
        <div className={styles.container}>
          <div className={styles.socialHeader}>
            <h2 className={styles.socialTitle}>{t("home.social.title")}</h2>
            <p className={styles.socialSubtitle}>{t("home.social.subtitle")}</p>
          </div>

          <div className={styles.socialGrid}>
            {instagramPosts.map((postUrl, index) => (
              <article key={index} className={styles.socialCard}>
                <div className={styles.socialTop}>
                  <div className={styles.socialBadge}>
                    <FiInstagram />
                    <span>{t("home.social.rels")}</span>
                  </div>

                  <a
                    href={postUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialLink}
                  >
                    {t("home.social.fallback")}
                  </a>
                </div>

                <div className={styles.socialEmbedWrap}>
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={postUrl}
                    data-instgrm-version="14"
                    style={{
                      background: "#fff",
                      border: 0,
                      borderRadius: "16px",
                      margin: 0,
                      minWidth: "100%",
                      width: "100%",
                    }}
                  >
                    <a
                      href={postUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.socialFallback}
                      aria-label="Instagram post"
                    >
                      <FiInstagram />
                      <span>{t("home.social.fallback")}</span>
                    </a>
                  </blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/*  Social media end */}

      {/* Partnerlar bo'limi start */}
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
      {/*  Partnerlar bo'limi end*/}

      {/* MIJOZLARIMIZ FIKRI start*/}
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
      {/* MIJOZLARIMIZ FIKRI end */}

      {/* Map start */}
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
      {/* map end */}
    </main>
  )
}