import styled from "styled-components";
import { CardSurface } from "./global.styled";

export const ContactCard = styled(CardSurface)`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  padding: 2.2rem 2rem;
  cursor: pointer;
  text-align: center;

  > h2 {
    margin-bottom: 10px;
    font-family: ${({ theme }) => theme.fonts.titles};
    color: ${({ theme }) => theme.colors.mist};
    font-size: 1.2rem;
  }
  > svg {
    width: 48px;
    height: 48px;
    color: ${({ theme }) => theme.colors.sky};
    margin-bottom: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    margin: 2rem auto 0;
  }
`;
