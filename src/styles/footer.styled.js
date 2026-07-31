import styled from "styled-components";

export const FooterBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.titles};
  font-weight: ${({ theme }) => theme.fonts.weigth.bold};
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.mist};
`;

export const FooterRights = styled.footer`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 2.5rem 45px 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.midnightBorder};

  > div {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  > p {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.mistMuted};
    font-size: 0.9rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2.5rem 1.5rem 2rem;
    justify-content: center;
    text-align: center;
  }
`;
