import React from "react";
import Button from "../components/Button";
import styles from "../styles/CartPage.module.css";

export default function CartPage({
  cart,
  onUpdateQuantity,
  onRemove,
  onRemoveOne,
  onClose,
}) {
  const total = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartPage}>
      <div className={styles.header}>
        <Button
          variant="outline"
          onClick={onClose}
          className={styles.backBtn}
          aria-label="Voltar para página inicial"
        >
          ← Voltar
        </Button>
        <h1 className={styles.title}>Carrinho</h1>
      </div>
      {Object.keys(cart).length === 0 ? (
        <p className={styles.emptyCart}>Seu carrinho está vazio</p>
      ) : (
        <>
          <div className={styles.itemList}>
            {Object.values(cart).map((item) => (
              <div key={item.id} className={styles.item}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.itemImage}
                />
                <div className={styles.itemInfo}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemPrice}>R$ {item.price.toFixed(2)}</p>
                  <div className={styles.itemActions}>
                    <div className={styles.itemQuantity}>
                      <Button
                        variant="outline"
                        onClick={() => onRemoveOne(item.id)}
                        aria-label="Diminuir quantidade"
                      >
                        -
                      </Button>
                      <span className={styles.itemQuantityValue}>
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
                <div className={styles.itemSubtotal}>
                  R$ {(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.total}>
            <h2>Total do Carrinho</h2>
            <p className={styles.totalValue}>R$ {total.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
}
