import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { ContactCard } from "../styles/contact.styled";
import {
  Button,
  Eyebrow,
  FlexContainer,
  Heading,
  PaddingContainer,
  ParaText,
} from "../styles/global.styled";
import { buildWhatsAppLink } from "../utils/whatsapp";

const CONTACT_EMAIL = "celest.contato@gmail.com";

export const Contact = () => {
  return (
    <PaddingContainer
      id="contato"
      top="5%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <Eyebrow align="center">Vamos conversar</Eyebrow>
      <Heading as="h2" size="h2" align="center" top="0.5rem">
        Contato
      </Heading>
      <ParaText align="center" top="1rem" bottom="1rem">
        Conte sobre o seu projeto e receba uma resposta rápida.
      </ParaText>
      <FlexContainer justify="center" gap="1.5rem" responsiveFlex responsiveDirection="column">
        <ContactCard
          onClick={() => {
            window.open(`mailto:${CONTACT_EMAIL}`, "_blank");
          }}
        >
          <MdEmail />
          <h2>E-mail</h2>
          <ParaText>{CONTACT_EMAIL}</ParaText>
        </ContactCard>
        <ContactCard
          onClick={() => {
            window.open(
              buildWhatsAppLink(
                "Olá! Quero conversar sobre um projeto com a Celest."
              ),
              "_blank"
            );
          }}
        >
          <IoLogoWhatsapp />
          <h2>WhatsApp</h2>
          <ParaText>(21) 98087-0945</ParaText>
        </ContactCard>
      </FlexContainer>
      <PaddingContainer top="3rem">
        <FlexContainer justify="center" responsiveFlex>
          <Button
            href={buildWhatsAppLink(
              "Olá! Quero solicitar um orçamento com a Celest."
            )}
            target="_blank"
            rel="noreferrer"
          >
            Pronto para elevar seu negócio? Fale com a Celest
          </Button>
        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  );
};
