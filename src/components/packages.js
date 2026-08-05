import React from "react";
import { FaCheck } from "react-icons/fa6";
import {
  Button,
  Eyebrow,
  GlowOrb,
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
    tagline: "O primeiro passo rumo à órbita.",
    description:
      "Um serviço pontual e objetivo, sem enrolação: o empurrão certo pra tirar a sua ideia do papel. Ideal para quem precisa de agilidade agora, seja um site rápido, uma automação específica ou uma dor bem definida do dia a dia.",
    items: [
      "Escopo único e objetivo (site, automação ou app pontual)",
      "Entrega ágil, sem burocracia",
      "Design com a sua identidade",
      "Suporte no lançamento",
    ],
    highlight: false,
  },
  {
    name: "Europa",
    tagline: "Sua operação em órbita constante.",
    description:
      "Um serviço mais completo, pensado para crescer junto com o seu negócio: levantamento aprofundado das suas necessidades, site ou sistema sob medida, integrações que conversam entre si e manutenção contínua para nada travar.",
    items: [
      "Levantamento completo das suas necessidades",
      "Site ou sistema sob medida",
      "Integrações com WhatsApp, planilhas e outras ferramentas",
      "Manutenção e suporte contínuos",
    ],
    highlight: true,
  },
  {
    name: "Ganimedes",
    tagline: "A Celest como braço tecnológico do seu negócio.",
    description:
      "Para quando a tecnologia deixa de ser projeto e vira parte da operação. Assumimos como uma assessoria completa: sistemas, automações, inteligência artificial e as demais frentes de tecnologia que o seu negócio precisar, com acompanhamento contínuo e estratégico.",
    items: [
      "Assessoria contínua em tecnologia",
      "Sistemas, automações e IA sob um só time",
      "Acompanhamento estratégico do negócio",
      "Prioridade total em suporte e evolução",
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
      style={{ position: "relative", zIndex: 0, overflow: "hidden" }}
    >
      <GlowOrb color="rgba(232, 163, 61, 0.5)" size="500px" top="-10%" right="-15%" $zIndex={-1} />
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
