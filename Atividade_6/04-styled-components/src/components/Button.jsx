import styled, { css, keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const LoadingSkeleton = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 2px;
  background: linear-gradient(90deg, transparent, currentColor, transparent);
  background-size: 200% 100%;
  animation: ${loadingAnimation} 1.5s infinite;
`;

const StyledButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  position: relative;
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  &:active:not(:disabled) {
    transform: scale(0.98);
  }
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'outline':
        return css`
          background-color: transparent;
          border: 2px solid ${theme.colors.primary};
          color: ${theme.colors.primary};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary};
            color: white;
          }
        `;
      case 'ghost':
        return css`
          background-color: transparent;
          color: ${theme.colors.text.primary};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.shadow};
            color: ${theme.colors.text.secondary};
          }
        `;
      default: // solid
        return css`
          background-color: ${theme.colors.primary};
          color: white;
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primaryDark};
          }
        `;
    }
  }}
  
  ${({ loading }) => loading && css`
    color: transparent;
  `}
`;

export default function Button({
  children,
  variant = "solid",
  loading,
  disabled,
  ...props
}) {
  return (
    <StyledButton
      variant={variant}
      loading={loading}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <LoadingSkeleton /> : children}
    </StyledButton>
  );
}