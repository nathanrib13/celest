import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button, Container, FlexContainer, PaddingContainer } from "../styles/global.styled";
import {
  LogoLink,
  Logo,
  MenuIcon,
  NavCta,
  NavLink,
  NavLinks,
  Navbarcontainer,
} from "../styles/navbar.styled";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { BrandIcon } from "./layouts/brandIcon";
import { NavMenu } from "./layouts/navMenu";

const NAV_ITEMS = [
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#pacotes", label: "Pacotes" },
  { href: "#processo", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Navbarcontainer>
      <PaddingContainer
        top="1.2rem"
        bottom="1.2rem"
        responsiveLeft="1rem"
        responsiveRight="1rem"
      >
        <Container>
          <FlexContainer justify="space-between" align="center" responsiveFlex>
            <LogoLink href="#inicio">
              <BrandIcon size="1.9rem" starColor="#E8A33D" arcColor="#5B7FBF" />
              <Logo>CELEST</Logo>
            </LogoLink>
            <FlexContainer align="center" gap="2.5rem">
              <NavLinks>
                {NAV_ITEMS.map((item) => (
                  <NavLink key={item.href} href={item.href}>
                    {item.label}
                  </NavLink>
                ))}
              </NavLinks>
              <NavCta>
                <Button
                  href={buildWhatsAppLink(
                    "Olá! Encontrei a Celest pelo site e quero saber mais sobre os pacotes."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar no WhatsApp
                </Button>
              </NavCta>
              <MenuIcon onClick={() => setOpenMenu(true)}>
                <GiHamburgerMenu />
              </MenuIcon>
            </FlexContainer>
          </FlexContainer>
        </Container>
        {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
      </PaddingContainer>
    </Navbarcontainer>
  );
};
