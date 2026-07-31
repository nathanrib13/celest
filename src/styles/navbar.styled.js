import styled from "styled-components";

export const Navbarcontainer = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99;
    transition: all 0.3s ease-in;
    background-color: rgba(13, 18, 32, 0.72);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid ${({theme})=> theme.colors.midnightBorder};
`

export const LogoLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
`

export const Logo = styled.p`
    font-family: ${({theme})=> theme.fonts.titles};
    font-size: 1.5rem;
    font-weight: ${({theme})=> theme.fonts.weigth.bold};
    letter-spacing: 0.08em;
    color: ${({theme})=> theme.colors.mist};
`

export const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: ${({theme})=> theme.breakpoints.mobile}) {
        display: none;
    }
`

export const NavLink = styled.a`
    color: ${({theme})=> theme.colors.mistMuted};
    font-family: ${({theme})=> theme.fonts.body};
    font-size: 0.95rem;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
        color: ${({theme})=> theme.colors.sky};
    }
`

export const NavCta = styled.div`
    @media (max-width: ${({theme})=> theme.breakpoints.mobile}) {
        display: none;
    }
`

export const MenuIcon = styled.a`
        color: ${({theme})=> theme.colors.mist};
        font-size: 1.6rem;
        cursor: pointer;
        transition: all 0.3s ease;
        display: none;
        align-items: center;

        @media (max-width: ${({theme})=> theme.breakpoints.mobile}) {
            display: flex;
        }
`
export const NavMenuContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: rgba(13, 18, 32, 0.97);
    backdrop-filter: blur(8px);
    width: 100%;
    z-index: 99;
`
export const MenuItem = styled.a`
  color: ${({theme})=> theme.colors.mist};
  font-family: ${({theme})=> theme.fonts.titles};
  font-size: 2rem;
  margin-top: 2.2rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${({theme})=> theme.colors.sky};
    transform: translateY(-3px);
  }

  transition: transform 0.3s ease, color 0.2s ease;
`;
