import { useEffect, useMemo, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import {
	FiArrowRight,
	FiCheckCircle,
	FiDroplet,
	FiFilter,
	FiGrid,
	FiHeart,
	FiHome,
	FiLayers,
	FiList,
	FiMail,
	FiPackage,
	FiRefreshCcw,
	FiSearch,
	FiShield,
	FiSliders,
	FiStar,
	FiTool,
	FiTrendingUp,
	FiX,
	FiZap,
} from "react-icons/fi"
import { Link } from "react-router-dom"

import productImg1 from "../../assets/images/about-products1.jpg"
import productImg2 from "../../assets/images/about-products2.jpg"
import productImg3 from "../../assets/images/about-products3.jpg"
import productImg4 from "../../assets/images/about-products4.jpg"

import styles from "./Products.module.scss"

type ProductCategory = "all" | "primer" | "mastic" | "roof-bitumen" | "sealant"
type SortType = "default" | "name-asc" | "name-desc"
type ViewMode = "grid" | "compact"

type TechRow = {
  characteristic: string
  value: string
  unit: string
  method: string
}

type ProductItem = {
  id: number
  image: string
  badge: string
  title: string
  shortDesc: string
  features: string[]
  usage: string[]
  facts: string[]
  category: ProductCategory
  featured?: boolean
  techTitle: string
  techRows: TechRow[]
}

type AnimatedCounterProps = {
  end: number
  suffix?: string
  duration?: number
}

function AnimatedCounter({ end, suffix = "", duration = 1600 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let frameId = 0

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const current = Math.floor(progress * end)
      setCount(current)

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate)
      }
    }

    frameId = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [duration, end])

  return (
    <strong>
      {count}
      {suffix}
    </strong>
  )
}

export default function Products() {
  const { t } = useTranslation()
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all")
  const [sortType, setSortType] = useState<SortType>("default")
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [visibleCount, setVisibleCount] = useState(4)
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null)

  const modalContentRef = useRef<HTMLDivElement | null>(null)

  const products: ProductItem[] = [
    {
      id: 1,
      image: productImg1,
      badge: t("productsPage.items.0.badge", "Primer"),
      title: t("productsPage.items.0.title", "Битумный Праймер №1"),
      shortDesc: t(
        "productsPage.items.0.shortDesc",
        "Поверхностный праймер для подготовки основания перед нанесением гидроизоляционных и битумных материалов."
      ),
      features: [
        t("productsPage.items.0.features.0", "Быстрое высыхание"),
        t("productsPage.items.0.features.1", "Улучшает сцепление"),
        t("productsPage.items.0.features.2", "Для профессионального применения"),
      ],
      usage: [
        t("productsPage.items.0.usage.0", "Праймирование"),
        t("productsPage.items.0.usage.1", "Фундамент"),
        t("productsPage.items.0.usage.2", "Кровля"),
      ],
      facts: [
        t("productsPage.items.0.facts.0", "Удобное нанесение"),
        t("productsPage.items.0.facts.1", "Стабильная адгезия"),
        t("productsPage.items.0.facts.2", "Подготовка основания"),
      ],
      category: "primer",
      featured: true,
      techTitle: t("productsPage.items.0.techTitle", "Технические характеристики"),
      techRows: [
        {
          characteristic: t("productsPage.items.0.techRows.0.characteristic", "Массовая доля нелетучих веществ"),
          value: "45–55",
          unit: "%",
          method: "ГОСТ 31939-2022",
        },
        {
          characteristic: t("productsPage.items.0.techRows.1.characteristic", "Время высыхания (при +20 °C)"),
          value: t("productsPage.items.0.techRows.1.value", "Не более 12"),
          unit: t("productsPage.items.0.techRows.1.unit", "ч"),
          method: "ГОСТ 19007-2023",
        },
        {
          characteristic: t("productsPage.items.0.techRows.2.characteristic", "Температура размягчения"),
          value: t("productsPage.items.0.techRows.2.value", "Не ниже 70"),
          unit: "°C",
          method: "ГОСТ 11506-73",
        },
        {
          characteristic: t("productsPage.items.0.techRows.3.characteristic", "Условная вязкость (по ВЗ-246, d=4 мм)"),
          value: "15–40",
          unit: t("productsPage.items.0.techRows.3.unit", "с"),
          method: "ГОСТ 8420-2022",
        },
        {
          characteristic: t("productsPage.items.0.techRows.4.characteristic", "Расход на один слой"),
          value: "0,2–0,3",
          unit: "л/м²",
          method: "-",
        },
        {
          characteristic: t("productsPage.items.0.techRows.5.characteristic", "Диапазон температур применения"),
          value: t("productsPage.items.0.techRows.5.value", "От -20 до +40"),
          unit: "°C",
          method: "-",
        },
        {
          characteristic: t("productsPage.items.0.techRows.6.characteristic", "Прочность сцепления с основанием"),
          value: t("productsPage.items.0.techRows.6.value", "Не менее 1"),
          unit: t("productsPage.items.0.techRows.6.unit", "балл"),
          method: "-",
        },
        {
          characteristic: t("productsPage.items.0.techRows.7.characteristic", "Толщина слоя нанесения"),
          value: "0,2",
          unit: "мм",
          method: "-",
        },
        {
          characteristic: t("productsPage.items.0.techRows.8.characteristic", "Содержание воды"),
          value: t("productsPage.items.0.techRows.8.value", "Допускаются следы"),
          unit: "-",
          method: "-",
        },
      ],
    },
    {
      id: 2,
      image: productImg2,
      badge: t("productsPage.items.1.badge", "Mastika"),
      title: t("productsPage.items.1.title", "Битумная Мастика №1"),
      shortDesc: t(
        "productsPage.items.1.shortDesc",
        "Универсальная битумная мастика для гидроизоляции, защиты конструкций и устройства кровельных узлов."
      ),
      features: [
        t("productsPage.items.1.features.0", "Эластичное покрытие"),
        t("productsPage.items.1.features.1", "Высокая водостойкость"),
        t("productsPage.items.1.features.2", "Надёжная защита основания"),
      ],
      usage: [
        t("productsPage.items.1.usage.0", "Кровля"),
        t("productsPage.items.1.usage.1", "Бетон"),
        t("productsPage.items.1.usage.2", "Металл"),
      ],
      facts: [
        t("productsPage.items.1.facts.0", "Универсальное применение"),
        t("productsPage.items.1.facts.1", "Сильная адгезия"),
        t("productsPage.items.1.facts.2", "Устойчивость к влаге"),
      ],
      category: "mastic",
      techTitle: t("productsPage.items.1.techTitle", "Технические характеристики"),
      techRows: [
        {
          characteristic: t("productsPage.items.1.techRows.0.characteristic", "Массовая доля нелетучих веществ (сухой остаток)"),
          value: "50–80 ±5",
          unit: "%",
          method: "ГОСТ 31939",
        },
        {
          characteristic: t("productsPage.items.1.techRows.1.characteristic", "Время высыхания (при +20 °C, толщина 1 мм)"),
          value: t("productsPage.items.1.techRows.1.value", "Не более 24"),
          unit: t("productsPage.items.1.techRows.1.unit", "ч"),
          method: "ГОСТ 19007",
        },
        {
          characteristic: t("productsPage.items.1.techRows.2.characteristic", "Температура размягчения (по методу 'Кольцо и шар')"),
          value: t("productsPage.items.1.techRows.2.value", "Не ниже 70–100"),
          unit: "°C",
          method: "ГОСТ 11506",
        },
        {
          characteristic: t("productsPage.items.1.techRows.3.characteristic", "Гибкость при низких температурах (на стержне диаметром 5–40 мм, при -10...-15 °C)"),
          value: t("productsPage.items.1.techRows.3.value", "Без трещин"),
          unit: "-",
          method: "ГОСТ 2678",
        },
        {
          characteristic: t("productsPage.items.1.techRows.4.characteristic", "Прочность сцепления с основанием (адгезия)"),
          value: t("productsPage.items.1.techRows.4.value", "Не менее 0,2–0,5"),
          unit: "МПа",
          method: "ГОСТ 26589",
        },
        {
          characteristic: t("productsPage.items.1.techRows.5.characteristic", "Водопоглощение (за 24 ч)"),
          value: t("productsPage.items.1.techRows.5.value", "Не более 0,5–1"),
          unit: "%",
          method: "ГОСТ 25945",
        },
        {
          characteristic: t("productsPage.items.1.techRows.6.characteristic", "Расход на один слой (для гидроизоляции)"),
          value: "1–3",
          unit: "кг/м²",
          method: "-",
        },
        {
          characteristic: t("productsPage.items.1.techRows.7.characteristic", "Диапазон температур применения"),
          value: t("productsPage.items.1.techRows.7.value", "От -10 до +40"),
          unit: "°C",
          method: "-",
        },
        {
          characteristic: t("productsPage.items.1.techRows.8.characteristic", "Теплостойкость (в течение 5 ч)"),
          value: t("productsPage.items.1.techRows.8.value", "Не менее 70–100"),
          unit: "°C",
          method: "ГОСТ 11508",
        },
        {
          characteristic: t("productsPage.items.1.techRows.9.characteristic", "Содержание воды"),
          value: t("productsPage.items.1.techRows.9.value", "Не более 0,5 (или следы)"),
          unit: "%",
          method: "ГОСТ 2477",
        },
      ],
    },
    {
      id: 3,
      image: productImg3,
      badge: t("productsPage.items.2.badge", "Roof Bitumen"),
      title: t("productsPage.items.2.title", "Битум кровельный №1"),
      shortDesc: t(
        "productsPage.items.2.shortDesc",
        "Нефтяной кровельный битум для устройства и ремонта кровельных систем, обладающий стабильными эксплуатационными характеристиками."
      ),
      features: [
        t("productsPage.items.2.features.0", "Для кровельных работ"),
        t("productsPage.items.2.features.1", "Чёрный однородный состав"),
        t("productsPage.items.2.features.2", "Соответствие ГОСТ"),
      ],
      usage: [
        t("productsPage.items.2.usage.0", "Кровля"),
        t("productsPage.items.2.usage.1", "Ремонт"),
        t("productsPage.items.2.usage.2", "Гидроизоляция"),
      ],
      facts: [
        t("productsPage.items.2.facts.0", "Высокая растворимость"),
        t("productsPage.items.2.facts.1", "Отсутствие воды"),
        t("productsPage.items.2.facts.2", "Стабильный нагрев"),
      ],
      category: "roof-bitumen",
      techTitle: t("productsPage.items.2.techTitle", "Технические характеристики Битум нефтяной кровельный (БНК)"),
      techRows: [
        {
          characteristic: t("productsPage.items.2.techRows.0.characteristic", "Температура размягчения по кольцу и шару"),
          value: "70–90",
          unit: "°C",
          method: "ГОСТ 11506",
        },
        {
          characteristic: t("productsPage.items.2.techRows.1.characteristic", "Глубина проникания иглы при 25 °C"),
          value: "20–40",
          unit: "0,1 мм",
          method: "ГОСТ 11501",
        },
        {
          characteristic: t("productsPage.items.2.techRows.2.characteristic", "Растяжимость при 25 °C"),
          value: t("productsPage.items.2.techRows.2.value", "не менее 3,0"),
          unit: t("productsPage.items.2.techRows.2.unit", "см"),
          method: "ГОСТ 11505",
        },
        {
          characteristic: t("productsPage.items.2.techRows.3.characteristic", "Температура хрупкости"),
          value: t("productsPage.items.2.techRows.3.value", "не выше –5"),
          unit: "°C",
          method: "ГОСТ 11507",
        },
        {
          characteristic: t("productsPage.items.2.techRows.4.characteristic", "Потеря массы при нагревании"),
          value: t("productsPage.items.2.techRows.4.value", "не более 0,8"),
          unit: "%",
          method: "ГОСТ 18180",
        },
        {
          characteristic: t("productsPage.items.2.techRows.5.characteristic", "Изменение температуры размягчения после прогрева"),
          value: t("productsPage.items.2.techRows.5.value", "не более +5"),
          unit: "°C",
          method: "ГОСТ 18180",
        },
        {
          characteristic: t("productsPage.items.2.techRows.6.characteristic", "Содержание воды"),
          value: t("productsPage.items.2.techRows.6.value", "Отсутствует"),
          unit: "-",
          method: "ГОСТ 2477",
        },
        {
          characteristic: t("productsPage.items.2.techRows.7.characteristic", "Растворимость в толуоле"),
          value: t("productsPage.items.2.techRows.7.value", "не менее 99,0"),
          unit: "%",
          method: "ГОСТ 20739",
        },
        {
          characteristic: t("productsPage.items.2.techRows.8.characteristic", "Зольность"),
          value: t("productsPage.items.2.techRows.8.value", "не более 0,5"),
          unit: "%",
          method: "ГОСТ 1461",
        },
        {
          characteristic: t("productsPage.items.2.techRows.9.characteristic", "Однородность"),
          value: t("productsPage.items.2.techRows.9.value", "Без посторонних включений"),
          unit: "-",
          method: t("productsPage.items.2.techRows.9.method", "Визуально"),
        },
        {
          characteristic: t("productsPage.items.2.techRows.10.characteristic", "Цвет"),
          value: t("productsPage.items.2.techRows.10.value", "Чёрный"),
          unit: "-",
          method: t("productsPage.items.2.techRows.10.method", "Визуально"),
        },
      ],
    },
    {
      id: 4,
      image: productImg4,
      badge: t("productsPage.items.3.badge", "Sealant"),
      title: t("productsPage.items.3.title", "Битумно Полимерная дорожная герметика БПГ №1"),
      shortDesc: t(
        "productsPage.items.3.shortDesc",
        "Битумно-полимерный дорожный герметик для надёжной герметизации швов, устойчивый к деформациям и низким температурам."
      ),
      features: [
        t("productsPage.items.3.features.0", "Высокая выносливость"),
        t("productsPage.items.3.features.1", "Для дорожных швов"),
        t("productsPage.items.3.features.2", "Стабильная адгезия к бетону"),
      ],
      usage: [
        t("productsPage.items.3.usage.0", "Дорожные швы"),
        t("productsPage.items.3.usage.1", "Бетон"),
        t("productsPage.items.3.usage.2", "Инфраструктура"),
      ],
      facts: [
        t("productsPage.items.3.facts.0", "Низкотемпературная гибкость"),
        t("productsPage.items.3.facts.1", "Высокая деформационная стойкость"),
        t("productsPage.items.3.facts.2", "Для интенсивной нагрузки"),
      ],
      category: "sealant",
      techTitle: t("productsPage.items.3.techTitle", "Технические характеристики"),
      techRows: [
        {
          characteristic: t("productsPage.items.3.techRows.0.characteristic", "Температура размягчения (по кольцу и шару)"),
          value: t("productsPage.items.3.techRows.0.value", "Не ниже 90 / 90 / 80"),
          unit: "°C",
          method: "ГОСТ 11506-73",
        },
        {
          characteristic: t("productsPage.items.3.techRows.1.characteristic", "Температура гибкости (на стержне Ø 10–20 мм, без трещин)"),
          value: t("productsPage.items.3.techRows.1.value", "Не выше -25 / -35 / -50"),
          unit: "°C",
          method: "ГОСТ 30740-2000",
        },
        {
          characteristic: t("productsPage.items.3.techRows.2.characteristic", "Относительное удлинение при разрыве (при -20 °C)"),
          value: t("productsPage.items.3.techRows.2.value", "Не менее 75 / 75 / 75"),
          unit: "%",
          method: "ГОСТ 30740-2000",
        },
        {
          characteristic: t("productsPage.items.3.techRows.3.characteristic", "Температура липкости"),
          value: t("productsPage.items.3.techRows.3.value", "Не ниже 50 / 50 / 50"),
          unit: "°C",
          method: "ГОСТ 30740-2000",
        },
        {
          characteristic: t("productsPage.items.3.techRows.4.characteristic", "Выносливость (циклы деформации)"),
          value: t("productsPage.items.3.techRows.4.value", "Не менее 30000 / 30000 / 30000"),
          unit: t("productsPage.items.3.techRows.4.unit", "циклы"),
          method: "ГОСТ 30740-2000",
        },
        {
          characteristic: t("productsPage.items.3.techRows.5.characteristic", "Плотность"),
          value: "1100–1200",
          unit: "кг/м³",
          method: "-",
        },
        {
          characteristic: t("productsPage.items.3.techRows.6.characteristic", "Рабочая температура разогрева"),
          value: t("productsPage.items.3.techRows.6.value", "170–195 (не выше 210)"),
          unit: "°C",
          method: "-",
        },
        {
          characteristic: t("productsPage.items.3.techRows.7.characteristic", "Температура применения (окружающая)"),
          value: t("productsPage.items.3.techRows.7.value", "Не ниже -10"),
          unit: "°C",
          method: "-",
        },
        {
          characteristic: t("productsPage.items.3.techRows.8.characteristic", "Расход (для шва 20×40 мм)"),
          value: "0,85–0,9",
          unit: "кг/п.м",
          method: "-",
        },
        {
          characteristic: t("productsPage.items.3.techRows.9.characteristic", "Адгезия (прочность сцепления с бетоном)"),
          value: t("productsPage.items.3.techRows.9.value", "Не менее 0,1–0,2"),
          unit: "МПа",
          method: "ГОСТ 30740-2000",
        },
      ],
    },
  ]

  const stats = [
    {
      icon: <FiPackage />,
      value: 4,
      suffix: "",
      label: t("productsPage.stats.0", "Mahsulot"),
    },
    {
      icon: <FiStar />,
      value: 100,
      suffix: "%",
      label: t("productsPage.stats.1", "Texnik jadval mavjud"),
    },
    {
      icon: <FiTrendingUp />,
      value: 24,
      suffix: "/7",
      label: t("productsPage.stats.2", "Ko‘rib chiqish qulayligi"),
    },
  ]

  const benefits = [
    {
      icon: <FiShield />,
      title: t("productsPage.benefits.0.title", "Ishonchli himoya"),
      text: t(
        "productsPage.benefits.0.text",
        "Mahsulotlar namlik, tashqi ta’sir va eskirishga qarshi barqaror himoya beradi."
      ),
    },
    {
      icon: <FiLayers />,
      title: t("productsPage.benefits.1.title", "Texnik ma’lumotlar aniq"),
      text: t(
        "productsPage.benefits.1.text",
        "Har bir mahsulot uchun alohida xarakteristika jadvali ko‘rsatiladi."
      ),
    },
    {
      icon: <FiTool />,
      title: t("productsPage.benefits.2.title", "Qulay tanlash"),
      text: t(
        "productsPage.benefits.2.text",
        "Filter, qidiruv va modal orqali kerakli mahsulotni tez topish mumkin."
      ),
    },
    {
      icon: <FiDroplet />,
      title: t("productsPage.benefits.3.title", "Professional yechim"),
      text: t(
        "productsPage.benefits.3.text",
        "Qurilish va gidroizolyatsiya ehtiyojlari uchun mos tanlovlar."
      ),
    },
  ]

  const categories = [
    { key: "all" as ProductCategory, label: t("productsPage.filters.all", "Barchasi") },
    { key: "primer" as ProductCategory, label: t("productsPage.filters.primer", "Primer") },
    { key: "mastic" as ProductCategory, label: t("productsPage.filters.mastic", "Mastika") },
    { key: "roof-bitumen" as ProductCategory, label: t("productsPage.filters.roofBitumen", "Krovlya bitum") },
    { key: "sealant" as ProductCategory, label: t("productsPage.filters.sealant", "Germetik") },
  ]

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase()

    const filtered = products.filter((product) => {
      const matchesCategory = activeCategory === "all" || product.category === activeCategory
      const matchesSearch =
        q === "" ||
        product.title.toLowerCase().includes(q) ||
        product.shortDesc.toLowerCase().includes(q) ||
        product.features.some((item) => item.toLowerCase().includes(q)) ||
        product.usage.some((item) => item.toLowerCase().includes(q))

      return matchesCategory && matchesSearch
    })

    if (sortType === "name-asc") {
      return [...filtered].sort((a, b) => a.title.localeCompare(b.title))
    }

    if (sortType === "name-desc") {
      return [...filtered].sort((a, b) => b.title.localeCompare(a.title))
    }

    return filtered
  }, [activeCategory, products, search, sortType])

  const visibleProducts = filteredProducts.slice(0, visibleCount)
  const featuredProduct = products.find((item) => item.featured)

  const handleResetFilters = () => {
    setSearch("")
    setActiveCategory("all")
    setSortType("default")
    setVisibleCount(4)
  }

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const openProductModal = (product: ProductItem) => {
    setSelectedProduct(product)
  }

  const closeProductModal = () => {
    setSelectedProduct(null)
  }

  useEffect(() => {
    if (!selectedProduct) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProductModal()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedProduct])

  return (
    <main className={styles.productsPage}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroTop}>
            <span className={styles.heroLabel}>
              {t("productsPage.hero.label", "Mahsulotlar")}
            </span>

            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>
                <FiHome />
                <span>{t("productsPage.breadcrumb.home", "Bosh sahifa")}</span>
              </Link>
              <span className={styles.breadcrumbDivider}>/</span>
              <span className={styles.breadcrumbCurrent}>
                {t("productsPage.breadcrumb.current", "Mahsulotlar")}
              </span>
            </div>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                {t("productsPage.hero.title", "Zamonaviy va texnik ma’lumotlarga boy product page")}
              </h1>

              <p className={styles.heroText}>
                {t(
                  "productsPage.hero.text",
                  "Har bir mahsulot uchun alohida texnik xarakteristikalar, modal ichida katta rasm va tafsilotli jadval mavjud."
                )}
              </p>

              <div className={styles.heroHighlights}>
                <div className={styles.heroHighlightItem}>
                  <FiZap />
                  <span>{t("productsPage.hero.highlights.0", "Detail modal")}</span>
                </div>
                <div className={styles.heroHighlightItem}>
                  <FiShield />
                  <span>{t("productsPage.hero.highlights.1", "Texnik jadval")}</span>
                </div>
                <div className={styles.heroHighlightItem}>
                  <FiLayers />
                  <span>{t("productsPage.hero.highlights.2", "Qulay filter")}</span>
                </div>
              </div>

              <div className={styles.heroActions}>
                <a href="#products-list" className={styles.primaryBtn}>
                  {t("productsPage.hero.view", "Mahsulotlarni ko‘rish")}
                </a>

                <Link to="/" className={styles.ghostBtn}>
                  <FiHome />
                  <span>{t("productsPage.hero.backHome", "Bosh sahifaga qaytish")}</span>
                </Link>
              </div>

              <div className={styles.heroStats}>
                {stats.map((item, index) => (
                  <div key={index} className={styles.statCard}>
                    <div className={styles.statIcon}>{item.icon}</div>
                    <div>
                      <AnimatedCounter end={item.value} suffix={item.suffix} />
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
                    {t("productsPage.hero.badge", "Sifat va standart")}
                  </span>
                </div>

                <div className={styles.heroVisualImageWrap}>
                  <img
                    src={productImg1}
                    alt={t("productsPage.hero.imageAlt", "Product preview")}
                    className={styles.heroVisualImage}
                  />
                </div>

                <div className={styles.heroVisualInfo}>
                  <h3>{t("productsPage.hero.cardTitle", "Professional yechimlar")}</h3>
                  <p>
                    {t(
                      "productsPage.hero.cardText",
                      "Mahsulot ustiga bosish orqali texnik ko‘rsatkichlar jadvalini to‘liq ko‘rish mumkin."
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
                <p className={styles.featuredText}>{featuredProduct.shortDesc}</p>

                <div className={styles.factList}>
                  {featuredProduct.facts.map((fact, index) => (
                    <div key={index} className={styles.factItem}>
                      <FiCheckCircle />
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.featuredActions}>
                  <button
                    type="button"
                    className={styles.primaryBtn}
                    onClick={() => openProductModal(featuredProduct)}
                  >
                    {t("productsPage.featured.button", "Batafsil ko‘rish")}
                  </button>
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
              {t("productsPage.benefitsLabel", "Afzalliklar")}
            </span>
            <h2 className={styles.sectionTitle}>
              {t("productsPage.benefitsTitle", "Nega bu sahifa qulay")}
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
          <div className={styles.stickyTools}>
            <div className={styles.sectionHead}>
              <span className={styles.sectionLabel}>
                {t("productsPage.catalog.label", "Katalog")}
              </span>
              <h2 className={styles.sectionTitle}>
                {t("productsPage.catalog.title", "Mahsulotlar ro‘yxati")}
              </h2>
            </div>

            <div className={styles.toolsPanel}>
              <div className={styles.searchBox}>
                <FiSearch />
                <input
                  type="text"
                  placeholder={t("productsPage.searchPlaceholder", "Mahsulot qidirish...")}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className={styles.controlRow}>
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

                <div className={styles.sortBox}>
                  <FiSliders />
                  <select
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value as SortType)}
                  >
                    <option value="default">{t("productsPage.sort.default", "Standart")}</option>
                    <option value="name-asc">{t("productsPage.sort.nameAsc", "Nomi A-Z")}</option>
                    <option value="name-desc">{t("productsPage.sort.nameDesc", "Nomi Z-A")}</option>
                  </select>
                </div>

                <div className={styles.viewMode}>
                  <button
                    type="button"
                    className={`${styles.viewBtn} ${viewMode === "grid" ? styles.viewBtnActive : ""}`}
                    onClick={() => setViewMode("grid")}
                    aria-label="grid view"
                  >
                    <FiGrid />
                  </button>
                  <button
                    type="button"
                    className={`${styles.viewBtn} ${viewMode === "compact" ? styles.viewBtnActive : ""}`}
                    onClick={() => setViewMode("compact")}
                    aria-label="compact view"
                  >
                    <FiList />
                  </button>
                </div>

                <button type="button" className={styles.resetBtn} onClick={handleResetFilters}>
                  <FiRefreshCcw />
                  <span>{t("productsPage.reset", "Tozalash")}</span>
                </button>
              </div>
            </div>
          </div>

          <div className={styles.catalogMeta}>
            <div className={styles.catalogMetaItem}>
              <FiGrid />
              <span>
                {t("productsPage.meta.found", "Topilgan mahsulotlar")}:{" "}
                <strong>{filteredProducts.length}</strong>
              </span>
            </div>

            <div className={styles.catalogMetaItem}>
              <FiHeart />
              <span>
                {t("productsPage.meta.saved", "Saqlanganlar")}: <strong>{favorites.length}</strong>
              </span>
            </div>

            <div className={styles.catalogMetaItem}>
              <FiLayers />
              <span>
                {t(
                  "productsPage.meta.hint",
                  "Mahsulot ustiga bosilganda to‘liq texnik jadval ochiladi"
                )}
              </span>
            </div>
          </div>

          <div
            className={`${styles.productsGrid} ${
              viewMode === "compact" ? styles.productsGridCompact : ""
            }`}
          >
            {visibleProducts.map((product) => {
              const isFavorite = favorites.includes(product.id)

              return (
                <article
                  key={product.id}
                  className={styles.productCard}
                  onClick={() => openProductModal(product)}
                >
                  <div className={styles.productImageWrap}>
                    <img src={product.image} alt={product.title} className={styles.productImage} />
                    <span className={styles.productBadge}>{product.badge}</span>

                    <button
                      type="button"
                      className={`${styles.favoriteBtn} ${isFavorite ? styles.favoriteBtnActive : ""}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(product.id)
                      }}
                      aria-label="favorite"
                    >
                      <FiHeart />
                    </button>
                  </div>

                  <div className={styles.productBody}>
                    <h3 className={styles.productTitle}>{product.title}</h3>
                    <p className={styles.productDesc}>{product.shortDesc}</p>

                    <div className={styles.usageTags}>
                      {product.usage.map((item, index) => (
                        <span key={index} className={styles.usageTag}>
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className={styles.factList}>
                      {product.facts.map((fact, index) => (
                        <div key={index} className={styles.factItem}>
                          <FiCheckCircle />
                          <span>{fact}</span>
                        </div>
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
                      <button
                        type="button"
                        className={styles.productBtn}
                        onClick={(e) => {
                          e.stopPropagation()
                          openProductModal(product)
                        }}
                      >
                        <span>{t("productsPage.more", "Batafsil")}</span>
                        <FiArrowRight />
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
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

              <button type="button" className={styles.resetBtn} onClick={handleResetFilters}>
                <FiRefreshCcw />
                <span>{t("productsPage.empty.reset", "Filterni tozalash")}</span>
              </button>
            </div>
          )}

          {filteredProducts.length > visibleCount && (
            <div className={styles.loadMoreWrap}>
              <button
                type="button"
                className={styles.secondaryBtn}
                onClick={() => setVisibleCount((prev) => prev + 4)}
              >
                {t("productsPage.loadMore", "Yana ko‘rsatish")}
              </button>
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
                  "Istalgan mahsulotni tanlab, uning texnik ma’lumotlarini batafsil ko‘rishingiz mumkin."
                )}
              </p>
            </div>

            <div className={styles.ctaActions}>
              <a href="#products-list" className={styles.ctaBtn}>
                {t("productsPage.cta.button", "Mahsulotlarni ko‘rish")}
              </a>

              <Link to="/contact" className={styles.secondaryBtn}>
                {t("productsPage.cta.contact", "Bog‘lanish")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div className={styles.modalOverlay} onClick={closeProductModal}>
          <div
            className={styles.modalCard}
            onClick={(e) => e.stopPropagation()}
            ref={modalContentRef}
          >
            <button type="button" className={styles.modalClose} onClick={closeProductModal}>
              <FiX />
            </button>

            <div className={styles.modalGrid}>
              <div className={styles.modalImageWrap}>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className={styles.modalImage}
                />
              </div>

              <div className={styles.modalContent}>
                <span className={styles.sectionLabel}>{selectedProduct.badge}</span>
                <h2 className={styles.modalTitle}>{selectedProduct.title}</h2>
                <p className={styles.modalText}>{selectedProduct.shortDesc}</p>

                <div className={styles.modalTags}>
                  {selectedProduct.usage.map((item, index) => (
                    <span key={index} className={styles.usageTag}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className={styles.modalQuickActions}>
                  <Link to="/contact" className={styles.productBtn} onClick={closeProductModal}>
                    <FiMail />
                    <span>{t("productsPage.cta.contact", "Bog‘lanish")}</span>
                  </Link>

                  <button type="button" className={styles.secondaryBtn} onClick={closeProductModal}>
                    {t("productsPage.modal.close", "Yopish")}
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.modalTableSection}>
              <h3 className={styles.modalTableTitle}>{selectedProduct.techTitle}</h3>

              <div className={styles.tableWrap}>
                <table className={styles.techTable}>
                  <thead>
                    <tr>
                      <th>{t("productsPage.table.headers.characteristic", "Характеристика")}</th>
                      <th>{t("productsPage.table.headers.value", "Показатель")}</th>
                      <th>{t("productsPage.table.headers.unit", "Единица измерения")}</th>
                      <th>{t("productsPage.table.headers.method", "Метод испытания / ГОСТ")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProduct.techRows.map((row, index) => (
                      <tr key={index}>
                        <td>{row.characteristic}</td>
                        <td>{row.value}</td>
                        <td>{row.unit}</td>
                        <td>{row.method}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.modalActions}>
                <Link to="/contact" className={styles.ctaBtn} onClick={closeProductModal}>
                  <FiMail />
                  <span>{t("productsPage.cta.order", "Ushbu mahsulot bo‘yicha bog‘lanish")}</span>
                </Link>

                <button type="button" className={styles.secondaryBtn} onClick={closeProductModal}>
                  {t("productsPage.modal.close", "Yopish")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}