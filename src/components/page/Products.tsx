import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import {
	FiArrowRight,
	FiCheckCircle,
	FiDroplet,
	FiFilter,
	FiGrid,
	FiLayers,
	FiPackage,
	FiSearch,
	FiShield,
	FiSliders,
	FiStar,
	FiTool,
	FiTrendingUp,
} from "react-icons/fi"
import { Link } from "react-router-dom"

import productImg1 from "../../assets/images/about-products1.jpg"
import productImg2 from "../../assets/images/about-products2.jpg"
import productImg3 from "../../assets/images/about-products3.jpg"
import productImg4 from "../../assets/images/about-products4.jpg"

import styles from "./Products.module.scss"

type ProductCategory = "all" | "waterproofing" | "primer" | "coating" | "bitumen"

type ProductItem = {
  id: number
  image: string
  badge: string
  title: string
  desc: string
  features: string[]
  category: ProductCategory
  usage: string[]
  featured?: boolean
}

export default function Products() {
  const { t } = useTranslation()
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all")

  const products: ProductItem[] = [
    {
      id: 1,
      image: productImg1,
      badge: t("productsPage.items.0.badge", "Premium"),
      title: t("productsPage.items.0.title", "Hydro Insulation"),
      desc: t(
        "productsPage.items.0.desc",
        "Professional waterproofing material for reliable surface protection and long-term durability."
      ),
      features: [
        t("productsPage.items.0.features.0", "Namlikka chidamli"),
        t("productsPage.items.0.features.1", "Yuqori yopishuv"),
        t("productsPage.items.0.features.2", "Ichki va tashqi ishlar"),
      ],
      category: "waterproofing",
      usage: [
        t("productsPage.items.0.usage.0", "Tom"),
        t("productsPage.items.0.usage.1", "Poydevor"),
        t("productsPage.items.0.usage.2", "Devor"),
      ],
      featured: true,
    },
    {
      id: 2,
      image: productImg2,
      badge: t("productsPage.items.1.badge", "Popular"),
      title: t("productsPage.items.1.title", "Bitum Mastika"),
      desc: t(
        "productsPage.items.1.desc",
        "Universal bitum asosidagi yechim, tom, poydevor va turli konstruksiyalar uchun qulay."
      ),
      features: [
        t("productsPage.items.1.features.0", "Elastik qoplama"),
        t("productsPage.items.1.features.1", "Oson qo‘llanadi"),
        t("productsPage.items.1.features.2", "Ishonchli himoya"),
      ],
      category: "bitumen",
      usage: [
        t("productsPage.items.1.usage.0", "Tom"),
        t("productsPage.items.1.usage.1", "Metall"),
        t("productsPage.items.1.usage.2", "Beton"),
      ],
    },
    {
      id: 3,
      image: productImg3,
      badge: t("productsPage.items.2.badge", "Strong"),
      title: t("productsPage.items.2.title", "Protective Coating"),
      desc: t(
        "productsPage.items.2.desc",
        "Surface protection uchun zamonaviy material bo‘lib, uzoq muddatli ekspluatatsiyani ta’minlaydi."
      ),
      features: [
        t("productsPage.items.2.features.0", "Kimyoviy barqaror"),
        t("productsPage.items.2.features.1", "Mustahkam qatlam"),
        t("productsPage.items.2.features.2", "Sanoat obyektlari uchun"),
      ],
      category: "coating",
      usage: [
        t("productsPage.items.2.usage.0", "Sanoat"),
        t("productsPage.items.2.usage.1", "Tashqi fasad"),
        t("productsPage.items.2.usage.2", "Texnik obyekt"),
      ],
    },
    {
      id: 4,
      image: productImg4,
      badge: t("productsPage.items.3.badge", "New"),
      title: t("productsPage.items.3.title", "Bitum Primer"),
      desc: t(
        "productsPage.items.3.desc",
        "Yuzani tayyorlash uchun samarali primer bo‘lib, keyingi qatlam bilan yopishuvni kuchaytiradi."
      ),
      features: [
        t("productsPage.items.3.features.0", "Tez quriydi"),
        t("productsPage.items.3.features.1", "Silliq qoplama"),
        t("productsPage.items.3.features.2", "Professional natija"),
      ],
      category: "primer",
      usage: [
        t("productsPage.items.3.usage.0", "Tayyorlov qatlami"),
        t("productsPage.items.3.usage.1", "Poydevor"),
        t("productsPage.items.3.usage.2", "Tom qismi"),
      ],
    },
  ]

  const benefits = [
    {
      icon: <FiShield />,
      title: t("productsPage.benefits.0.title", "Ishonchli himoya"),
      text: t(
        "productsPage.benefits.0.text",
        "Mahsulotlarimiz namlik, tashqi ta’sir va eskirishga qarshi mustahkam himoya beradi."
      ),
    },
    {
      icon: <FiLayers />,
      title: t("productsPage.benefits.1.title", "Sifatli qatlam"),
      text: t(
        "productsPage.benefits.1.text",
        "Har bir mahsulot professional ishlatish uchun barqaror va bir xil qoplama hosil qiladi."
      ),
    },
    {
      icon: <FiTool />,
      title: t("productsPage.benefits.2.title", "Qulay qo‘llash"),
      text: t(
        "productsPage.benefits.2.text",
        "Mahsulotlar qurilish va ta’mirlash jarayonida qulay ishlatilishi uchun moslangan."
      ),
    },
    {
      icon: <FiDroplet />,
      title: t("productsPage.benefits.3.title", "Namlikka chidamli"),
      text: t(
        "productsPage.benefits.3.text",
        "Suv va namlikdan himoya qilishda yuqori samaradorlikni ta’minlaydi."
      ),
    },
  ]

  const stats = [
    {
      icon: <FiPackage />,
      value: "20+",
      label: t("productsPage.stats.0", "Mahsulot turlari"),
    },
    {
      icon: <FiStar />,
      value: "10+",
      label: t("productsPage.stats.1", "Yillik tajriba"),
    },
    {
      icon: <FiTrendingUp />,
      value: "99%",
      label: t("productsPage.stats.2", "Mamnun mijozlar"),
    },
  ]

  const categories = [
    { key: "all" as ProductCategory, label: t("productsPage.filters.all", "Barchasi") },
    {
      key: "waterproofing" as ProductCategory,
      label: t("productsPage.filters.waterproofing", "Gidroizolyatsiya"),
    },
    { key: "bitumen" as ProductCategory, label: t("productsPage.filters.bitumen", "Bitum") },
    { key: "primer" as ProductCategory, label: t("productsPage.filters.primer", "Primer") },
    { key: "coating" as ProductCategory, label: t("productsPage.filters.coating", "Qoplama") },
  ]

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === "all" || product.category === activeCategory
      const matchesSearch =
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.desc.toLowerCase().includes(search.toLowerCase()) ||
        product.features.some((feature) => feature.toLowerCase().includes(search.toLowerCase()))

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, products, search])

  const featuredProduct = products.find((item) => item.featured)

  return (
    <main className={styles.productsPage}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.heroLabel}>
                {t("productsPage.hero.label", "Mahsulotlar")}
              </span>

              <h1 className={styles.heroTitle}>
                {t("productsPage.hero.title", "Zamonaviy va ishonchli mahsulotlar")}
              </h1>

              <p className={styles.heroText}>
                {t(
                  "productsPage.hero.text",
                  "Qurilish va gidroizolyatsiya ishlari uchun sifatli, amaliy va uzoq muddat xizmat qiladigan mahsulotlar bilan tanishing."
                )}
              </p>

              <div className={styles.heroActions}>
                <Link to="/contact" className={styles.primaryBtn}>
                  {t("productsPage.hero.contact", "Bog‘lanish")}
                </Link>

                <a href="#products-list" className={styles.secondaryBtn}>
                  {t("productsPage.hero.view", "Mahsulotlarni ko‘rish")}
                </a>
              </div>

              <div className={styles.heroStats}>
                {stats.map((item, index) => (
                  <div key={index} className={styles.statCard}>
                    <div className={styles.statIcon}>{item.icon}</div>
                    <div>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroVisualCard}>
                <div className={styles.heroVisualTop}>
                  <span className={styles.heroMiniBadge}>
                    <FiShield />
                    {t("productsPage.hero.miniBadge", "Sifat kafolati")}
                  </span>
                </div>

                <div className={styles.heroVisualImageWrap}>
                  <img
                    src={productImg1}
                    alt={t("productsPage.hero.imageAlt", "Mahsulot preview")}
                    className={styles.heroVisualImage}
                  />
                </div>

                <div className={styles.heroVisualInfo}>
                  <h3>{t("productsPage.hero.cardTitle", "Professional yechimlar")}</h3>
                  <p>
                    {t(
                      "productsPage.hero.cardText",
                      "Har bir mahsulot obyekt xavfsizligi va uzoq muddatli natija uchun tanlangan."
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {featuredProduct && (
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <div className={styles.featuredCard}>
              <div className={styles.featuredImageWrap}>
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.title}
                  className={styles.featuredImage}
                />
              </div>

              <div className={styles.featuredContent}>
                <span className={styles.sectionLabel}>
                  {t("productsPage.featured.label", "Tavsiya etiladi")}
                </span>
                <h2 className={styles.featuredTitle}>{featuredProduct.title}</h2>
                <p className={styles.featuredText}>{featuredProduct.desc}</p>

                <div className={styles.featuredFeatures}>
                  {featuredProduct.features.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                      <FiCheckCircle />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.featuredActions}>
                  <Link to="/contact" className={styles.primaryBtn}>
                    {t("productsPage.featured.button", "Buyurtma bo‘yicha bog‘lanish")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>
              {t("productsPage.why.label", "Afzalliklar")}
            </span>
            <h2 className={styles.sectionTitle}>
              {t("productsPage.why.title", "Nega aynan bizning mahsulotlar")}
            </h2>
          </div>

          <div className={styles.benefitsGrid}>
            {benefits.map((item, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products-list" className={styles.productsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>
              {t("productsPage.catalog.label", "Katalog")}
            </span>
            <h2 className={styles.sectionTitle}>
              {t("productsPage.catalog.title", "Mahsulotlar ro‘yxati")}
            </h2>
          </div>

          <div className={styles.filterBar}>
            <div className={styles.searchBox}>
              <FiSearch />
              <input
                type="text"
                placeholder={t("productsPage.search", "Mahsulot qidirish...")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className={styles.filterTabs}>
              <div className={styles.filterIcon}>
                <FiFilter />
              </div>

              {categories.map((category) => (
                <button
                  key={category.key}
                  type="button"
                  className={`${styles.filterBtn} ${
                    activeCategory === category.key ? styles.filterBtnActive : ""
                  }`}
                  onClick={() => setActiveCategory(category.key)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.catalogMeta}>
            <div className={styles.catalogMetaItem}>
              <FiGrid />
              <span>
                {t("productsPage.results", "Topilgan mahsulotlar")}:{" "}
                <strong>{filteredProducts.length}</strong>
              </span>
            </div>

            <div className={styles.catalogMetaItem}>
              <FiSliders />
              <span>{t("productsPage.catalogHint", "Siz filter va qidiruvdan foydalanishingiz mumkin")}</span>
            </div>
          </div>

          <div className={styles.productsGrid}>
            {filteredProducts.map((product) => (
              <article key={product.id} className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  <img src={product.image} alt={product.title} className={styles.productImage} />
                  <span className={styles.productBadge}>{product.badge}</span>
                </div>

                <div className={styles.productBody}>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <p className={styles.productDesc}>{product.desc}</p>

                  <div className={styles.usageTags}>
                    {product.usage.map((item, index) => (
                      <span key={index} className={styles.usageTag}>
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className={styles.featureList}>
                    {product.features.map((feature, index) => (
                      <div key={index} className={styles.featureItem}>
                        <FiCheckCircle />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.productActions}>
                    <Link to="/contact" className={styles.productBtn}>
                      <span>{t("productsPage.more", "Batafsil")}</span>
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className={styles.emptyState}>
              <FiPackage />
              <h3>{t("productsPage.empty.title", "Mahsulot topilmadi")}</h3>
              <p>
                {t(
                  "productsPage.empty.text",
                  "Qidiruv so‘zini o‘zgartirib ko‘ring yoki boshqa filter tanlang."
                )}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <span className={styles.sectionLabel}>
                {t("productsPage.cta.label", "Hamkorlik")}
              </span>
              <h2 className={styles.ctaTitle}>
                {t("productsPage.cta.title", "Loyihangiz uchun mos mahsulotni tanlang")}
              </h2>
              <p className={styles.ctaText}>
                {t(
                  "productsPage.cta.text",
                  "Biz sizga obyekt turi va ehtiyojingizga mos yechimni tanlashda yordam beramiz."
                )}
              </p>
            </div>

            <Link to="/contact" className={styles.ctaBtn}>
              {t("productsPage.cta.button", "Hoziroq bog‘laning")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}