import React from "react";
import "../styles/CartPage.css";
import Button from "../components/Button";

export default function CartPage({
  cart,
  onUpdateQuantity,
  onRemove,
  onRemoveOne,
  onClose,
}) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <div className="cart-page__header">
        <Button
          variant="outline"
          onClick={onClose}
          className="cart-page__back-btn"
          aria-label="Voltar para página inicial"
        >
          ← Voltar
        </Button>
        <h1 className="cart-page__title">Carrinho</h1>
      </div>
      {cart.length === 0 ? (
        <p className="cart-page__empty">Seu carrinho está vazio</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item__image"
                />
                <div className="cart-item__info">
                  <h3 className="cart-item__title">{item.title}</h3>
                  <p className="cart-item__price">R$ {item.price.toFixed(2)}</p>
                  <div className="cart-item__actions">
                    <div className="cart-item__quantity">
                      <Button
                        variant="outline"
                        onClick={() => onRemoveOne(item.id)}
                        aria-label="Diminuir quantidade"
                      >
                        -
                      </Button>
                      <span className="cart-item__quantity-value">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                        aria-label="Aumentar quantidade"
                      >
                        +
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      onClick={() => onRemove(item.id)}
                      aria-label="Remover item"
                    >
                      Remover
                    </Button>
                  </div>
                </div>
                <div className="cart-item__subtotal">
                  R$ {(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h2>Total do Carrinho</h2>
            <p className="cart-total__value">R$ {total.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
}
