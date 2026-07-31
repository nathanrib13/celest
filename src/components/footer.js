import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FooterBrand, FooterRights } from "../styles/footer.styled";
import { IconContainer } from "../styles/global.styled";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { BrandIcon } from "./layouts/brandIcon";

export const Footer = () => {
  return (
    <FooterRights>
      <FooterBrand>
        <BrandIcon size="1.4rem" starColor="#E8A33D" arcColor="#5B7FBF" />
        <span>CELEST</span>
      </FooterBrand>
      <p>
        © {new Date().getFullYear()} Celest. Todos os direitos reservados.
      </p>
      <div>
        <IconContainer size="1.4rem">
          <a
            href={buildWhatsAppLink("Olá! Quero falar com a Celest.")}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp da Celest"
          >
            <IoLogoWhatsapp />
          </a>
        </IconContainer>
        <IconContainer size="1.4rem">
          <a
            href="mailto:celest.contato@gmail.com"
            aria-label="E-mail da Celest"
          >
            <MdEmail />
          </a>
        </IconContainer>
      </div>
    </FooterRights>
  );
};
