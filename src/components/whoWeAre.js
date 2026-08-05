import React from "react";
import {
  Eyebrow,
  GlowOrb,
  Heading,
  PaddingContainer,
  ParaText,
} from "../styles/global.styled";
import { Pillar, PillarRow } from "../styles/whoWeAre.styled";
import { Reveal } from "./layouts/reveal";

const PILLARS = [
  "Resultado em primeiro lugar",
  "Cliente no centro",
  "Suporte humanizado",
];

export const WhoWeAre = () => (
  <PaddingContainer
    id="quem-somos"
    top="5%"
    bottom="10%"
    responsiveLeft="1rem"
    responsiveRight="1rem"
    style={{ position: "relative", zIndex: 0, overflow: "hidden" }}
  >
    <GlowOrb color="rgba(91, 127, 191, 0.85)" size="480px" top="-18%" left="-12%" $zIndex={-1} />
    <Reveal>
      <Eyebrow>Essência</Eyebrow>
      <Heading as="h2" size="h2" top="0.5rem">
        Quem somos
      </Heading>
      <ParaText top="1rem" bottom="1rem">
        A Celest nasceu para provar que tecnologia de ponta não precisa soar
        distante nem custar como uma consultoria de grande porte. Somos um
        estúdio enxuto que veste a camisa de quem atende: entendemos a
        rotina do seu negócio, traduzimos o que é complexo em algo simples
        de usar e acompanhamos cada etapa como se o projeto fosse nosso.
      </ParaText>
      <PillarRow>
        {PILLARS.map((pillar) => (
          <Pillar key={pillar}>{pillar}</Pillar>
        ))}
      </PillarRow>
    </Reveal>
  </PaddingContainer>
);
