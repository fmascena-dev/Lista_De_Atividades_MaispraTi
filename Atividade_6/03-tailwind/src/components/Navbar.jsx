import React, { useState, useEffect } from "react";

const THEME_KEY = "mini-loja-theme";

export default function Navbar({ cartCount, onCartClick }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const initialTheme = savedTheme || "light";
    
    // Aplicar tema imediatamente na inicialização
    document.documentElement.setAttribute("data-theme", initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    return initialTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <nav 
      className="sticky top-0 z-10 w-full shadow-md"
      style={{backgroundColor: 'var(--bg-secondary)'}}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center p-4">
        <div 
          className="text-2xl font-bold text-blue-500 cursor-pointer"
          tabIndex={0} 
          aria-label="Mini Loja Logo"
        >
          Mini Loja
        </div>
        <div className="flex items-center gap-2">
          <button
            className="bg-transparent border-none text-2xl cursor-pointer p-2 hover:opacity-80 rounded transition-colors"
            style={{color: 'var(--text-primary)'}}
            aria-label={`Ativar modo ${theme === "light" ? "escuro" : "claro"}`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌞" : "🌙"}
          </button>
          <button
            className="bg-transparent border-none text-2xl cursor-pointer p-2 relative hover:opacity-80 rounded transition-colors"
            style={{color: 'var(--text-primary)'}}
            aria-label="Carrinho"
            onClick={onCartClick}
          >
            🛒
            <span 
              className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-4 text-center" 
              aria-live="polite"
            >
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}