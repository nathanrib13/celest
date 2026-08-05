import React from "react";
import { TbBrowser, TbDeviceMobile, TbRobot } from "react-icons/tb";
import {
  Eyebrow,
  Heading,
  PaddingContainer,
  ParaText,
} from "../styles/global.styled";
import { IconBadge, ServiceContainer, ServicesGrid } from "../styles/service.styled";
import { Reveal } from "./layouts/reveal";

const SERVICES = [
  {
    icon: <TbBrowser />,
    variant: "gold",
    title: "Sites institucionais",
    description: "Sua vitrine digital, rápida e feita para converter.",
  },
  {
    icon: <TbRobot />,
    variant: "sky",
    title: "Automações com IA e robôs",
    description: "Inteligência artificial cuidando do trabalho repetitivo, tempo de volta pra você.",
  },
  {
    icon: <TbDeviceMobile />,
    variant: "mixed",
    title: "Aplicativos",
    description: "Do protótipo à loja de aplicativos, feito para o seu usuário.",
  },
];

export const Services = () => {
  return (
    <PaddingContainer id="servicos" top="5%" bottom="10%" align="center">
      <Eyebrow align="center">O que fazemos</Eyebrow>
      <Heading as="h2" size="h2" align="center" top="0.5rem">
        Serviços
      </Heading>
      <ParaText align="center" top="1rem" bottom="1rem">
        Três frentes, um mesmo fluxo: do site ao app.
      </ParaText>
      <ServicesGrid>
        {SERVICES.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.12}>
            <ServiceContainer>
              <IconBadge variant={service.variant}>{service.icon}</IconBadge>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </ServiceContainer>
          </Reveal>
        ))}
      </ServicesGrid>
    </PaddingContainer>
  );
};
