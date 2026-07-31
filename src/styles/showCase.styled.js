import styled, { keyframes } from "styled-components";

const twinkle = keyframes`
  0%, 100% { opacity: 0.25; }
  50% { opacity: 1; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.06); opacity: 1; }
`;

export const HeroGrid = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const HeroVisual = styled.div`
  position: relative;
  flex: 1;
  min-height: 380px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 300px;
  }
`;

export const ConstellationWrap = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.9;

  .celest-star-dot {
    animation: ${twinkle} 3.2s ease-in-out infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    inset: 10% 5%;
  }
`;

export const BrandMarkWrap = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const BrandGlow = styled.div`
  position: absolute;
  inset: -40px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(232, 163, 61, 0.35),
    transparent 70%
  );
  filter: blur(24px);
  z-index: -1;
  animation: ${pulse} 3s ease-in-out infinite;
`;

export const WordmarkBig = styled.p`
  font-family: ${({ theme }) => theme.fonts.titles};
  font-weight: ${({ theme }) => theme.fonts.weigth.bold};
  font-size: 2.2rem;
  letter-spacing: 0.14em;
  color: ${({ theme }) => theme.colors.mist};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.7rem;
  }
`;

export const RocketWrap = styled.div`
  position: absolute;
  top: 4%;
  right: 10%;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    right: 6%;
    top: 0;
  }
`;
