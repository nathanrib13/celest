import React from "react";
import { FaCheck } from "react-icons/fa6";
import {
  Button,
  Eyebrow,
  Heading,
  PaddingContainer,
  ParaText,
} from "../styles/global.styled";
import {
  PackageBadge,
  PackageCard,
  PackageDescription,
  PackageList,
  PackageName,
  PackageTagline,
  PackagesGrid,
} from "../styles/packages.styled";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { Reveal } from "./layouts/reveal";

const PACKAGES = [
  {
    name: "Io",
    tagline: "O primeiro lançamento.",
    description: "Site institucional profissional para começar com o pé direito.",
    items: [
      "Site responsivo (até 5 páginas)",
      "Design com a sua identidade",
      "SEO básico",
      "Domínio e hospedagem prontos",
    ],
    highlight: false,
  },
  {
    name: "Europa",
    tagline: "Automação em órbita.",
    description: "Site mais automações que tiram tarefas repetitivas da sua rotina.",
    items: [
      "Tudo do pacote Io",
      "Automações sob medida",
      "Integração com WhatsApp e planilhas",
      "Suporte prioritário",
    ],
    highlight: true,
  },
  {
    name: "Ganimedes",
    tagline: "O ecossistema completo.",
    description: "Site, automações e aplicativo, tudo integrado e escalável.",
    items: [
      "Tudo do pacote Europa",
      "Aplicativo mobile",
      "Área logada para clientes",
      "Acompanhamento contínuo",
    ],
    highlight: false,
  },
];

export const Packages = () => {
  return (
    <PaddingContainer
      id="pacotes"
      top="5%"
      bottom="10%"
      align="center"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <Eyebrow align="center">Escolha seu estágio</Eyebrow>
      <Heading as="h2" size="h2" align="center" top="0.5rem">
        Pacotes
      </Heading>
      <ParaText align="center" top="1rem" bottom="1rem">
        Do primeiro site ao ecossistema completo. Sem taxa fixa, orçamento sob medida.
      </ParaText>
      <PackagesGrid>
        {PACKAGES.map((pkg, index) => (
          <Reveal key={pkg.name} delay={index * 0.12}>
            <PackageCard highlight={pkg.highlight}>
              {pkg.highlight && <PackageBadge>Mais escolhido</PackageBadge>}
              <PackageName>{pkg.name}</PackageName>
              <PackageTagline>{pkg.tagline}</PackageTagline>
              <PackageDescription>{pkg.description}</PackageDescription>
              <PackageList>
                {pkg.items.map((item) => (
                  <li key={item}>
                    <FaCheck size="0.8rem" />
                    <span>{item}</span>
                  </li>
                ))}
              </PackageList>
              <Button
                href={buildWhatsAppLink(
                  `Olá! Quero saber mais sobre o pacote ${pkg.name} da Celest.`
                )}
                target="_blank"
                rel="noreferrer"
              >
                Falar sobre o {pkg.name}
              </Button>
            </PackageCard>
          </Reveal>
        ))}
      </PackagesGrid>
    </PaddingContainer>
  );
};
