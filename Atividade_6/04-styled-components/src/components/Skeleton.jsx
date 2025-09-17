import styled, { keyframes } from 'styled-components';

const skeletonAnimation = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const SkeletonBase = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.background.card} 25%,
      ${({ theme }) => theme.colors.shadow} 50%,
      ${({ theme }) => theme.colors.background.card} 75%
    );
    background-size: 200% 100%;
    animation: ${skeletonAnimation} 1.5s infinite;
  }
`;

const SkeletonRect = styled(SkeletonBase)`
  width: 100%;
  height: 100%;
`;

const SkeletonText = styled(SkeletonBase)`
  height: 1em;
  width: 100%;
`;

const SkeletonCircle = styled(SkeletonBase)`
  border-radius: 50%;
`;

export default function Skeleton({ variant = "rect", style, className }) {
  const Component = {
    rect: SkeletonRect,
    text: SkeletonText,
    circle: SkeletonCircle
  }[variant];

  return <Component className={className} style={style} role="presentation" />;
}