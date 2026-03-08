import { useState } from "react"
import { useTranslation } from "react-i18next"

import aboutMainImage from "../../assets/images/about-main.jpg"
import aboutProducts1 from "../../assets/images/about-products1.jpg"
import aboutProducts2 from "../../assets/images/about-products2.jpg"
import aboutProducts3 from "../../assets/images/about-products3.jpg"
import aboutProducts4 from "../../assets/images/about-products4.jpg"
import aboutImgRight from "../../assets/images/hero-right.png"

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

    </main>
  )
}