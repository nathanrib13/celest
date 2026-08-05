import styled, { keyframes } from "styled-components";
import { CardSurface } from "./global.styled";

const flow = keyframes`
  0% { background-position: 0% 0; }
  100% { background-position: 200% 0; }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
  margin-top: 3rem;
  position: relative;

  > div {
    display: flex;
  }

  &::before {
    content: "";
    position: absolute;
    top: 30px;
    left: 12%;
    right: 12%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.gold} 25%,
      ${({ theme }) => theme.colors.sky} 50%,
      ${({ theme }) => theme.colors.gold} 75%,
      transparent
    );
    background-size: 200% 100%;
    animation: ${flow} 3.5s linear infinite;
    opacity: 0.45;
    z-index: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }
  }
`;

const BADGE_GRADIENTS = {
  gold: ({ theme }) =>
    `linear-gradient(135deg, ${theme.colors.gold}, ${theme.colors.goldHover})`,
  sky: ({ theme }) =>
    `linear-gradient(135deg, ${theme.colors.sky}, ${theme.colors.skyHover})`,
  mixed: ({ theme }) =>
    `linear-gradient(135deg, ${theme.colors.gold}, ${theme.colors.sky})`,
};

export const IconBadge = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.midnight};
  background: ${(props) => (BADGE_GRADIENTS[props.variant] || BADGE_GRADIENTS.gold)(props)};
  transition: transform 0.3s ease;
`;

export const ServiceContainer = styled(CardSurface)`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 1.8rem;
  gap: 1rem;

  &:hover ${IconBadge} {
    transform: rotate(8deg) scale(1.1);
  }

  > h2 {
    font-family: ${({ theme }) => theme.fonts.titles};
    color: ${({ theme }) => theme.colors.mist};
    font-size: 1.3rem;
  }
  > p {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.para_text_color};
    line-height: 1.6;
  }
`;
