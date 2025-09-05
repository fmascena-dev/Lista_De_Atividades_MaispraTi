import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

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
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__logo" tabIndex={0} aria-label="Mini Loja Logo">
        Mini Loja
      </div>
      <button
        className="navbar__theme-toggle"
        aria-label={`Ativar modo ${theme === "light" ? "escuro" : "claro"}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "🌞" : "🌙"}
      </button>
      <button
        className="navbar__cart"
        aria-label="Carrinho"
        onClick={onCartClick}
      >
        🛒
        <span className="navbar__cart-badge" aria-live="polite">
          {cartCount}
        </span>
      </button>
    </nav>
  );
}
