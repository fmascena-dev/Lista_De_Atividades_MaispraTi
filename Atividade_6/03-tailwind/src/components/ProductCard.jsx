import React, { useState } from "react";
import Button from "./Button";
import Skeleton from "./Skeleton";

export default function ProductCard({ product, onAdd, loading }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div
      className={`rounded-lg shadow-md p-4 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 ${loading ? 'pointer-events-none opacity-70' : ''}`}
      style={{backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)'}}
      tabIndex={0}
      aria-label={product.title}
    >
      <div className="relative aspect-square overflow-hidden rounded-lg">
        {loading ? (
          <Skeleton variant="rect" style={{ height: "100%" }} />
        ) : (
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="w-full h-full object-cover"
            width={160}
            height={160}
          />
        )}
        {!loading && product.tag && (
          <span 
            className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-bold uppercase text-white ${
              product.tag === 'Novo' ? 'bg-green-500' : 'bg-orange-500'
            }`}
          >
            {product.tag}
          </span>
        )}
      </div>
      
      <div className="flex flex-col gap-2">
        {loading ? (
          <>
            <Skeleton variant="text" className="mb-2" />
            <Skeleton variant="text" style={{ width: "60%" }} className="mb-2" />
            <Skeleton variant="text" style={{ width: "30%" }} />
          </>
        ) : (
          <>
            <div 
              className="font-bold line-clamp-2 h-12 leading-6 mb-2" 
              style={{color: 'var(--text-primary)'}}
              title={product.title}
            >
              {product.title}
            </div>
            <div className="text-blue-500 text-xl font-bold">
              R$ {product.price.toFixed(2)}
            </div>
            <div
              className="text-orange-500"
              aria-label={`Nota ${product.rating}`}
            >
              {"★".repeat(product.rating)}
            </div>
          </>
        )}
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            aria-label="Diminuir quantidade"
            className="px-3 py-1"
          >
            -
          </Button>
          <span className="min-w-8 text-center">{quantity}</span>
          <Button
            variant="outline"
            onClick={() => setQuantity(quantity + 1)}
            aria-label="Aumentar quantidade"
            className="px-3 py-1"
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