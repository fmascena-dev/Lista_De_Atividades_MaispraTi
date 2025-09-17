import React, { useState } from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product, onAdd, loading }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div
      className={`${styles.productCard} ${loading ? styles.loading : ""}`}
      tabIndex={0}
      aria-label={product.title}
    >
      <div className={styles.imgWrapper}>
        {loading ? (
          <Skeleton variant="rect" style={{ height: "100%" }} />
        ) : (
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className={styles.img}
            width={160}
            height={160}
          />
        )}
        {!loading && product.tag && (
          <span className={`${styles.tag} ${styles[`tag${product.tag}`]}`}>
            {product.tag}
          </span>
        )}
      </div>
      <div className={styles.info}>
        {loading ? (
          <>
            <Skeleton
              variant="text"
              style={{ marginBottom: "var(--spacing-sm)" }}
            />
            <Skeleton
              variant="text"
              style={{ width: "60%", marginBottom: "var(--spacing-sm)" }}
            />
            <Skeleton variant="text" style={{ width: "30%" }} />
          </>
        ) : (
          <>
            <div className={styles.title} title={product.title}>
              {product.title}
            </div>
            <div className={styles.price}>R$ {product.price.toFixed(2)}</div>
            <div
              className={styles.rating}
              aria-label={`Nota ${product.rating}`}
            >
              {"★".repeat(product.rating)}
            </div>
          </>
        )}
        <div className={styles.quantity}>
          <Button
            variant="outline"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            aria-label="Diminuir quantidade"
          >
            -
          </Button>
          <span>{quantity}</span>
          <Button
            variant="outline"
            onClick={() => setQuantity(quantity + 1)}
            aria-label="Aumentar quantidade"
          >
            +
          </Button>
        </div>
      </div>
      <Button
        variant="solid"
        disabled={loading}
        loading={loading}
        onClick={() => onAdd(quantity)}
        aria-label="Adicionar ao carrinho"
      >
        Adicionar
      </Button>
    </div>
  );
}
