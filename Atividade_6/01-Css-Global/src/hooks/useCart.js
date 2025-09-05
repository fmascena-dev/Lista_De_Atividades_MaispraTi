import { useState, useEffect } from "react";

const CART_KEY = "mini-loja-cart";

export default function useCart() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem(CART_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...currentCart, { ...product, quantity }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((currentCart) => {
      if (newQuantity === 0) {
        return currentCart.filter((item) => item.id !== productId);
      }

      return currentCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => {
      const item = currentCart.find((item) => item.id === productId);
      if (!item) return currentCart;

      if (item.quantity === 1) {
        return currentCart.filter((item) => item.id !== productId);
      }

      return currentCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeItemCompletely = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    removeItemCompletely,
    getCartCount,
    getCartTotal,
  };
}
