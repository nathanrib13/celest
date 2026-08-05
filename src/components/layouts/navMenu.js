import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Button, FlexContainer, PaddingContainer } from "../../styles/global.styled";
import {
  MenuIcon,
  MenuItem,
  NavMenuContainer,
} from "../../styles/navbar.styled";
import { buildWhatsAppLink } from "../../utils/whatsapp";

const MENU_ITEMS = [
  { href: "#inicio", label: "Início" },
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#pacotes", label: "Pacotes" },
  { href: "#processo", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

export const NavMenu = ({ setOpenMenu }) => {
  return (
    <NavMenuContainer>
      <PaddingContainer left="5%" right="5%" top="2rem">
        <FlexContainer justify="flex-end" responsiveFlex>
          <MenuIcon
            style={{ display: "flex" }}
            onClick={() => setOpenMenu(false)}
          >
            <AiOutlineClose />
          </MenuIcon>
        </FlexContainer>
      </PaddingContainer>

      <PaddingContainer top="3%">
        <FlexContainer direction="column" align="center" responsiveFlex>
          {MENU_ITEMS.map((item) => (
            <MenuItem
              key={item.href}
              href={item.href}
              onClick={() => setOpenMenu(false)}
            >
              {item.label}
            </MenuItem>
          ))}
          <PaddingContainer top="2.5rem">
            <Button
              href={buildWhatsAppLink(
                "Olá! Encontrei a Celest pelo site e quero saber mais sobre os pacotes."
              )}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpenMenu(false)}
            >
              Falar no WhatsApp
            </Button>
          </PaddingContainer>
        </FlexContainer>
      </PaddingContainer>
    </NavMenuContainer>
  );
};
