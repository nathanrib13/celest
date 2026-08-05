import styled from "styled-components";
import { CardSurface } from "./global.styled";

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
  margin-top: 3rem;

  > div {
    display: flex;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled(CardSurface)`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const BrowserBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 0.9rem;
  background: ${({ theme }) => theme.colors.midnightSoft};
  border-bottom: 1px solid ${({ theme }) => theme.colors.midnightBorder};

  > span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.midnightBorder};

    &:first-child {
      background: ${({ theme }) => theme.colors.gold};
    }
  }
`;

export const BrowserUrl = styled.span`
  margin-left: 0.4rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.mistMuted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProjectThumb = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  background: linear-gradient(
    150deg,
    ${({ theme }) => theme.colors.sky} 0%,
    ${({ theme }) => theme.colors.midnight} 75%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  > img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

export const ThumbFallback = styled.span`
  font-family: ${({ theme }) => theme.fonts.titles};
  font-weight: ${({ theme }) => theme.fonts.weigth.bold};
  font-size: 2.4rem;
  letter-spacing: 0.06em;
  color: rgba(244, 242, 236, 0.85);
`;

export const ProjectBody = styled.div`
  padding: 1.5rem 1.6rem 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;

  > h3 {
    font-family: ${({ theme }) => theme.fonts.titles};
    color: ${({ theme }) => theme.colors.mist};
    font-size: 1.15rem;
  }

  > p {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.para_text_color};
    font-size: 0.92rem;
    line-height: 1.6;
    flex: 1;
  }
`;

export const CategoryTag = styled.span`
  align-self: flex-start;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.72rem;
  font-weight: ${({ theme }) => theme.fonts.weigth.semibold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.sky};
  background: ${({ theme }) => theme.colors.skySoft};
  border: 1px solid ${({ theme }) => theme.colors.skyBorder};
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.4rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fonts.weigth.semibold};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gold};
  text-decoration: none;
  transition: gap 0.2s ease, color 0.2s ease;

  &:hover {
    gap: 0.6rem;
    color: ${({ theme }) => theme.colors.goldHover};
  }
`;
