import styled from "styled-components";

export const PillarRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1.5rem;
`;

export const Pillar = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.85rem;
  font-weight: ${({ theme }) => theme.fonts.weigth.medium};
  color: ${({ theme }) => theme.colors.mist};
  background: rgba(91, 127, 191, 0.12);
  border: 1px solid rgba(91, 127, 191, 0.4);
`;
