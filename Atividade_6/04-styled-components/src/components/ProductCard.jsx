import React, { useState } from "react";
import styled, { css } from 'styled-components';
import Button from "./Button";
import Skeleton from "./Skeleton";

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  transition: transform ${({ theme }) => theme.transitions.normal}, 
              box-shadow ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
  
  ${({ loading }) => loading && css`
    pointer-events: none;
    opacity: 0.7;
  `}
`;

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductTag = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  padding: 4px ${({ theme }) => theme.spacing.sm};
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  
  ${({ tag, theme }) => {
    if (tag === 'Novo') {
      return css`background-color: ${theme.colors.success};`;
    } else {
      return css`background-color: ${theme.colors.accent};`;
    }
  }}
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ProductTitle = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.primary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 2.4em;
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProductPrice = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
  font-weight: bold;
`;

const ProductRating = styled.div`
  color: ${({ theme }) => theme.colors.accent};
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const QuantityDisplay = styled.span`
  min-width: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const QuantityButton = styled(Button)`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
`;

export default function ProductCard({ product, onAdd, loading }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <CardContainer
      loading={loading}
      tabIndex={0}
      aria-label={product.title}
    >
      <ImageWrapper>
        {loading ? (
          <Skeleton variant="rect" style={{ height: "100%" }} />
        ) : (
          <ProductImage
            src={product.image}
            alt={product.title}
            loading="lazy"
            width={160}
            height={160}
          />
        )}
        {!loading && product.tag && (
          <ProductTag tag={product.tag}>
            {product.tag}
          </ProductTag>
        )}
      </ImageWrapper>
      
      <ProductInfo>
        {loading ? (
          <>
            <Skeleton variant="text" style={{ marginBottom: "8px" }} />
            <Skeleton variant="text" style={{ width: "60%", marginBottom: "8px" }} />
            <Skeleton variant="text" style={{ width: "30%" }} />
          </>
        ) : (
          <>
            <ProductTitle title={product.title}>
              {product.title}
            </ProductTitle>
            <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
            <ProductRating aria-label={`Nota ${product.rating}`}>
              {"★".repeat(product.rating)}
            </ProductRating>
          </>
        )}
        
        <QuantityControls>
          <QuantityButton
            variant="outline"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            aria-label="Diminuir quantidade"
          >
            -
          </QuantityButton>
          <QuantityDisplay>{quantity}</QuantityDisplay>
          <QuantityButton
            variant="outline"
            onClick={() => setQuantity(quantity + 1)}
            aria-label="Aumentar quantidade"
          >
            +
          </QuantityButton>
        </QuantityControls>
      </ProductInfo>
      
      <Button
        variant="solid"
        disabled={loading}
        loading={loading}
        onClick={() => onAdd(quantity)}
        aria-label="Adicionar ao carrinho"
      >
        Adicionar
      </Button>
    </CardContainer>
  );
}