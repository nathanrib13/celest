import styled from "styled-components";
import { CardSurface } from "./global.styled";

export const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
  margin-top: 3rem;
  text-align: left;

  > div {
    display: flex;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const PackageCard = styled(CardSurface)`
  width: 100%;
  padding: 2.2rem 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  ${({ highlight, theme }) =>
    highlight &&
    `
      border-color: ${theme.colors.gold};
      box-shadow: 0 20px 45px rgba(232, 163, 61, 0.12);
    `}
`;

export const PackageBadge = styled.span`
  align-self: flex-start;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.fonts.weigth.semibold};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.midnight};
  background-color: ${({ theme }) => theme.colors.gold};
`;

export const PackageName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.titles};
  color: ${({ theme }) => theme.colors.mist};
  font-size: 1.6rem;
`;

export const PackageTagline = styled.p`
  font-family: ${({ theme }) => theme.fonts.titles};
  font-style: italic;
  color: ${({ theme }) => theme.colors.sky};
  font-size: 0.9rem;
  margin-top: -0.6rem;
`;

export const PackageDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.para_text_color};
  line-height: 1.7;
`;

export const PackageList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  flex: 1;

  > li {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.92rem;
    color: ${({ theme }) => theme.colors.mistMuted};

    > svg {
      flex-shrink: 0;
      margin-top: 0.25rem;
      color: ${({ theme }) => theme.colors.sky};
    }
  }
`;
