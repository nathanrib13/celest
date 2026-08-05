import styled from "styled-components";

export const ChartScroll = styled.div`
  margin-top: 3rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const ChartInner = styled.div`
  min-width: 720px;
`;

export const StepsList = styled.ol`
  display: none;
  list-style: none;
  flex-direction: column;
  gap: 0;
  margin-top: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`;

export const StepItem = styled.li`
  position: relative;
  display: flex;
  gap: 1rem;
  padding-bottom: 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 2.6rem;
    left: 17px;
    width: 2px;
    height: calc(100% - 2rem);
    background: ${({ theme }) => theme.colors.skyBorder};
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:last-child::before {
    display: none;
  }
`;

export const StepBullet = styled.span`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.titles};
  font-weight: ${({ theme }) => theme.fonts.weigth.bold};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gold};
  background: ${({ theme }) => theme.colors.midnightSoft};
  border: 2px solid ${({ theme }) => theme.colors.gold};
  z-index: 1;
`;

export const StepContent = styled.div`
  padding-top: 0.35rem;

  > h3 {
    font-family: ${({ theme }) => theme.fonts.titles};
    color: ${({ theme }) => theme.colors.mist};
    font-size: 1.05rem;
    margin-bottom: 0.3rem;
  }

  > p {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.para_text_color};
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;
