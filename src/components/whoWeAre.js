import React from "react";
import {
  Eyebrow,
  Heading,
  PaddingContainer,
  ParaText,
} from "../styles/global.styled";
import { Pillar, PillarRow } from "../styles/whoWeAre.styled";
import { Reveal } from "./layouts/reveal";

const PILLARS = [
  "Sofisticação sem distância",
  "Tecnologia sem jargão",
  "Resultado em primeiro lugar",
];

export const WhoWeAre = () => (
  <PaddingContainer
    id="quem-somos"
    top="5%"
    bottom="10%"
    responsiveLeft="1rem"
    responsiveRight="1rem"
  >
    <Reveal>
      <Eyebrow>Essência</Eyebrow>
      <Heading as="h2" size="h2" top="0.5rem">
        Quem somos
      </Heading>
      <ParaText top="1rem" bottom="1rem">
        A Celest é um estúdio de tecnologia que une o cuidado de uma grande
        empresa à agilidade de um time enxuto. Sites, automações e
        aplicativos que colocam o seu negócio para funcionar melhor.
      </ParaText>
      <PillarRow>
        {PILLARS.map((pillar) => (
          <Pillar key={pillar}>{pillar}</Pillar>
        ))}
      </PillarRow>
    </Reveal>
  </PaddingContainer>
);
