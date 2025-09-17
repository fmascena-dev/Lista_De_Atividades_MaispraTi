import { useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState({});

  const addToCart = (product, quantity = 1) => {
    setCart((currentCart) => {
      const currentItem = currentCart[product.id];
      return {
        ...currentCart,
        [product.id]: {
          ...product,
          quantity: (currentItem?.quantity || 0) + quantity,
        },
      };
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((currentCart) => ({
      ...currentCart,
      [productId]: {
        ...currentCart[productId],
        quantity: newQuantity,
      },
    }));
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => {
      const currentItem = currentCart[productId];
      if (!currentItem) return currentCart;

      if (currentItem.quantity === 1) {
        const { [productId]: _, ...rest } = currentCart;
        return rest;
      }

      return {
        ...currentCart,
        [productId]: {
          ...currentItem,
          quantity: currentItem.quantity - 1,
        },
      };
    });
  };

  const removeItemCompletely = (productId) => {
    setCart((currentCart) => {
      const { [productId]: _, ...rest } = currentCart;
      return rest;
    });
  };

  const getCartCount = () => {
    return Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
  };

  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    removeItemCompletely,
    getCartCount,
  };
}
