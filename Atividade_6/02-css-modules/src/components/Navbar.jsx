import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";

const THEME_KEY = "mini-loja-theme";

export default function Navbar({ cartCount, onCartClick }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    return savedTheme || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <div>
        <div className={styles.logo} tabIndex={0} aria-label="Mini Loja Logo">
          Mini Loja
        </div>
        <div>
          <button
            className={styles.themeToggle}
            aria-label={`Ativar modo ${theme === "light" ? "escuro" : "claro"}`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌞" : "🌙"}
          </button>
          <button
            className={styles.cart}
            aria-label="Carrinho"
            onClick={onCartClick}
          >
            🛒
            <span className={styles.cartBadge} aria-live="polite">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
