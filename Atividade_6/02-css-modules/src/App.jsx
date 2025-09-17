import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./pages/CartPage";
import useCart from "./hooks/useCart";
import styles from "./styles/App.module.css";

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

export default function App() {
  const [loadingIds, setLoadingIds] = useState([]);
  const [showCart, setShowCart] = useState(false);
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

  return (
    <div className={styles.app}>
      <Navbar
        cartCount={getCartCount()}
        onCartClick={() => setShowCart(true)}
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
        <main className={styles.productGrid} aria-label="Produtos">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={(quantity) => handleAdd(product.id, quantity)}
              loading={loadingIds.includes(product.id)}
            />
          ))}
        </main>
      )}
    </div>
  );
}
