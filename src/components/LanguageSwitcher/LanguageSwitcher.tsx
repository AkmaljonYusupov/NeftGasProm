// src/components/LanguageSwitcher/LanguageSwitcher.tsx
import { useState } from "react"
import { useTranslation } from "react-i18next"
import styles from "./LanguageSwitcher.module.scss"

const languages = [
  { code: "uz", flag: "/flags/uz.png", name: "O‘zbek" },
  { code: "ru", flag: "/flags/ru.png", name: "Русский" },
  { code: "en", flag: "/flags/gb.png", name: "English" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  // TILNI O‘ZGARTIRISH + DROPDOWN YOPISH
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);   // til o‘zgaradi
    setIsOpen(false);           // dropdown darhol yopiladi
  };

  return (
    <div className={styles.langSwitcher}>
      {/* Navbar’da ko‘rinadigan flag */}
      <button
        className={styles.currentFlag}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Tilni tanlash"
      >
        <img
          src={currentLang.flag}
          alt={currentLang.name}
          width={32}
          height={24}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul className={styles.dropdown}>
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => changeLanguage(lang.code)}
                className={`${styles.langOption} ${
                  i18n.language === lang.code ? styles.active : ""
                }`}
              >
                <img
                  src={lang.flag}
                  alt={lang.name}
                  width={36}
                  height={27}
                />
                <span>{lang.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;