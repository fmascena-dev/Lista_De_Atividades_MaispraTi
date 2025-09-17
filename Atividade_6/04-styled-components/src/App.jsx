import { useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./pages/CartPage";
import useCart from "./hooks/useCart";

const PRODUCTS = [
  {
    id: 1,
    title: "Fone Bluetooth Wireless",
    price: 199.9,
    rating: 5,
    tag: "Novo",
    image: "https://m.media-amazon.com/images/I/51ouXTgynpL._AC_SX679_.jpg",
  },
  {
    id: 2,
    title: "Smartwatch Fitness",
    price: 299.9,
    rating: 4,
    tag: "Promo",
    image:
      "https://m.media-amazon.com/images/I/61lMn8NLA8L._AC_SY300_SX300_QL70_ML2_.jpg",
  },
  {
    id: 3,
    title: "Câmera de Ação 4K",
    price: 499.9,
    rating: 5,
    tag: "Novo",
    image: "https://m.media-amazon.com/images/I/71LwiZU3oZL._AC_SX679_.jpg",
  },
  {
    id: 4,
    title: "Caixa de Som Portátil",
    price: 149.9,
    rating: 4,
    tag: "Promo",
    image: "https://m.media-amazon.com/images/I/71cem+POLUL._AC_SY879_.jpg",
  },
  {
    id: 5,
    title: "Mouse Gamer RGB",
    price: 89.9,
    rating: 5,
    tag: "Novo",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_742874-MLU75022063696_032024-F.webp",
  },
  {
    id: 6,
    title: "Teclado Mecânico",
    price: 249.9,
    rating: 5,
    tag: "Promo",
    image: "https://images.pexels.com/photos/4792732/pexels-photo-4792732.jpeg",
  },
];

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  flex-direction: column;
`;

const ProductGrid = styled.main`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  
  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function App() {
  const [loadingIds, setLoadingIds] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");
  const {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    removeItemCompletely,
    getCartCount,
  } = useCart();

  const handleAdd = (id, quantity) => {
    setLoadingIds((ids) => [...ids, id]);
    setTimeout(() => {
      const product = PRODUCTS.find((p) => p.id === id);
      if (product) {
        addToCart(product, quantity);
      }
      setLoadingIds((ids) => ids.filter((i) => i !== id));
    }, 1200);
  };

  const handleThemeToggle = (theme) => {
    setCurrentTheme(theme);
  };

  const theme = currentTheme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Navbar
          cartCount={getCartCount()}
          onCartClick={() => setShowCart(true)}
          onThemeToggle={handleThemeToggle}
          currentTheme={currentTheme}
        />
        {showCart ? (
          <CartPage
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemove={removeItemCompletely}
            onRemoveOne={removeFromCart}
            onClose={() => setShowCart(false)}
          />
        ) : (
          <ProductGrid aria-label="Produtos">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={(quantity) => handleAdd(product.id, quantity)}
                loading={loadingIds.includes(product.id)}
              />
            ))}
          </ProductGrid>
        )}
      </AppContainer>
    </ThemeProvider>
  );
}
