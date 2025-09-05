import React, { useState } from "react";
import Button from "./Button";
import "../styles/ProductCard.css";

export default function ProductCard({ product, onAdd, loading }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div
      className={`product-card${loading ? " loading" : ""}`}
      tabIndex={0}
      aria-label={product.title}
    >
      <div className="product-card__img-wrapper">
        {loading ? (
          <div className="product-card__img-skeleton" />
        ) : (
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="product-card__img"
            width={160}
            height={160}
          />
        )}
        {product.tag && (
          <span
            className={`product-card__tag product-card__tag--${product.tag.toLowerCase()}`}
          >
            {product.tag}
          </span>
        )}
      </div>
      <div className="product-card__info">
        <div className="product-card__title" title={product.title}>
          {product.title}
        </div>
        <div className="product-card__price">R$ {product.price.toFixed(2)}</div>
        <div
          className="product-card__rating"
          aria-label={`Nota ${product.rating}`}
        >
          {"★".repeat(product.rating)}
        </div>
        <div className="product-card__quantity">
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
