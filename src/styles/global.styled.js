import styled from "styled-components";

export const MainBody = styled.div`
  background-color: ${({ theme }) => theme.colors.midnight};
`;
export const Container = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: auto;
`;
export const PaddingContainer = styled.div`
  padding-top: ${({ top }) => top};
  padding-bottom: ${({ bottom }) => bottom};
  padding-left: ${({ left }) => left};
  padding-right: ${({ right }) => right};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: ${({ responsiveTop }) => responsiveTop};
    padding-bottom: ${({ responsivebottom }) => responsivebottom};
    padding-left: ${({ responsiveleft }) => responsiveleft};
    padding-right: ${({ responsiveRight }) => responsiveRight};
  }
`;
export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction }) => direction};
  > div {
    flex: ${({ fullWidthChild }) => fullWidthChild && 1};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: ${({ responsiveFlex }) => (responsiveFlex ? "flex" : "block")};

    flex-direction: ${({ responsiveDirection }) => responsiveDirection};
  }
`;
export const Eyebrow = styled.p`
  color: ${({ theme }) => theme.colors.gold};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fonts.weigth.semibold};
  font-size: 0.85rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-align: ${({ align }) => align};
`;
export const Heading = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.mist};
  font-family: ${({ theme }) => theme.fonts.titles};
  font-weight: ${({ theme }) => theme.fonts.weigth.semibold};
  text-align: ${({ align }) => align};
  font-size: ${({ size }) => {
    switch (size) {
      case "h1":
        return "3.5rem";
      case "h2":
        return "2.6rem";
      case "h3":
        return "1.6rem";
      case "h4":
        return "1.2rem";
      case "h5":
        return "1rem";
      default:
        return;
    }
  }};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ size }) => {
      switch (size) {
        case "h1":
          return "2.4rem";
        case "h2":
          return "1.8rem";
        case "h3":
          return "1.4rem";
        case "h4":
          return "1.1rem";
        case "h5":
          return "0.95rem";
        default:
          return;
      }
    }};
  }
`;
export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.sky};
`;
export const GradientText = styled.span`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gold},
    ${({ theme }) => theme.colors.sky}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
export const ParaText = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.para_text_color};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.8rem;
  text-align: ${({ align }) => align};
`;
export const Button = styled.a`
  display: inline-block;
  width: max-content;
  padding: 1rem 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fonts.weigth.semibold};
  color: ${({ theme, outline }) =>
    outline ? theme.colors.mist : theme.colors.midnight};
  background-color: ${({ theme, outline }) =>
    outline ? "transparent" : theme.colors.gold};
  border: 1px solid
    ${({ theme, outline }) => (outline ? theme.colors.midnightBorder : theme.colors.gold)};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: ${({ theme, outline }) =>
      outline ? theme.colors.midnightSoft : theme.colors.goldHover};
    border-color: ${({ theme, outline }) =>
      outline ? theme.colors.gold : theme.colors.goldHover};
  }
`;
export const CardSurface = styled.div`
  position: relative;
  background: linear-gradient(
    165deg,
    rgba(244, 242, 236, 0.06),
    rgba(244, 242, 236, 0.015)
  );
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid ${({ theme }) => theme.colors.midnightBorder};
  border-radius: 1.25rem;
  transition: border-color 0.25s ease, transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    border-color: rgba(232, 163, 61, 0.5);
    transform: translateY(-4px);
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
  }
`;
export const GlowOrb = styled.div`
  position: absolute;
  width: ${({ size }) => size || "420px"};
  height: ${({ size }) => size || "420px"};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.28;
  pointer-events: none;
  z-index: 0;
  background: ${({ color, theme }) => color || theme.colors.gold};
`;
export const IconContainer = styled.div`
  font-size: ${({ size }) => size};
  cursor: pointer;
  color: ${({ color, theme }) => {
    switch (color) {
      case "white":
        return theme.colors.mist;
      case "blue":
        return theme.colors.sky;
      case "gold":
        return theme.colors.gold;
      default:
        return theme.colors.mist;
    }
  }};

  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.sky};
  }
`;
