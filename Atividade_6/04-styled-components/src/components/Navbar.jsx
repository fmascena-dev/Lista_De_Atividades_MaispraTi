import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const THEME_KEY = "mini-loja-theme";

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const NavContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    opacity: 0.8;
  }
`;

const CartButton = styled(IconButton)`
  position: relative;
`;

const CartBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  font-size: 0.8rem;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 16px;
  text-align: center;
`;

export default function Navbar({ cartCount, onCartClick, onThemeToggle, currentTheme }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const initialTheme = savedTheme || "light";
    return initialTheme;
  });

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    if (onThemeToggle) {
      onThemeToggle(theme);
    }
  }, [theme, onThemeToggle]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <NavContainer aria-label="Main navigation">
      <NavContent>
        <Logo tabIndex={0} aria-label="Mini Loja Logo">
          Mini Loja
        </Logo>
        <ButtonGroup>
          <IconButton
            aria-label={`Ativar modo ${theme === "light" ? "escuro" : "claro"}`}
            onClick={toggleTheme}
          >
            {theme === "light" ? "🌞" : "🌙"}
          </IconButton>
          <CartButton aria-label="Carrinho" onClick={onCartClick}>
            🛒
            <CartBadge aria-live="polite">{cartCount}</CartBadge>
          </CartButton>
        </ButtonGroup>
      </NavContent>
    </NavContainer>
  );
}