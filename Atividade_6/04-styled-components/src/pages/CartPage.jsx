import React from "react";
import styled from 'styled-components';
import Button from "../components/Button";

const CartContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 48rem;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const CartTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  flex-grow: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const BackButton = styled(Button)`
  background-color: #e74c3c;
  border-color: #e74c3c;
  
  &:hover:not(:disabled) {
    background-color: #c0392b;
    border-color: #c0392b;
  }
`;

const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: 2rem;
`;

const CartContent = styled.div`
  width: 100%;
  max-width: 64rem;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1.5rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const ItemImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
  
  @media (min-width: 1024px) {
    width: 150px;
    height: 150px;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ItemTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ItemPrice = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityValue = styled.span`
  min-width: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const RemoveButton = styled(Button)`
  color: #e74c3c;
  
  &:hover:not(:disabled) {
    color: #c0392b;
    background-color: rgba(231, 76, 60, 0.1);
  }
`;

const ItemSubtotal = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  align-self: center;
`;

const TotalSection = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.border};
  padding-top: 1.5rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalLabel = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const TotalValue = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const QuantityButton = styled(Button)`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
`;

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
    <CartContainer>
      <CartHeader>
        <BackButton
          variant="solid"
          onClick={onClose}
          aria-label="Voltar para página inicial"
        >
          ← Voltar
        </BackButton>
        <CartTitle>Carrinho</CartTitle>
      </CartHeader>
      
      {Object.keys(cart).length === 0 ? (
        <EmptyMessage>Seu carrinho está vazio</EmptyMessage>
      ) : (
        <CartContent>
          <ItemList>
            {Object.values(cart).map((item) => (
              <CartItem key={item.id}>
                <ItemImage
                  src={item.image}
                  alt={item.title}
                />
                
                <ItemInfo>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
                  
                  <ItemActions>
                    <QuantityControls>
                      <QuantityButton
                        variant="outline"
                        onClick={() => onRemoveOne(item.id)}
                        aria-label="Diminuir quantidade"
                      >
                        -
                      </QuantityButton>
                      <QuantityValue>{item.quantity}</QuantityValue>
                      <QuantityButton
                        variant="outline"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        aria-label="Aumentar quantidade"
                      >
                        +
                      </QuantityButton>
                    </QuantityControls>
                    
                    <RemoveButton
                      variant="ghost"
                      onClick={() => onRemove(item.id)}
                      aria-label="Remover item"
                    >
                      Remover
                    </RemoveButton>
                  </ItemActions>
                </ItemInfo>
                
                <ItemSubtotal>
                  R$ {(item.price * item.quantity).toFixed(2)}
                </ItemSubtotal>
              </CartItem>
            ))}
          </ItemList>
          
          <TotalSection>
            <TotalLabel>Total do Carrinho</TotalLabel>
            <TotalValue>R$ {total.toFixed(2)}</TotalValue>
          </TotalSection>
        </CartContent>
      )}
    </CartContainer>
  );
}