import React from "react";
import {
  Button,
  Eyebrow,
  FlexContainer,
  GradientText,
  Heading,
  PaddingContainer,
  ParaText,
} from "../styles/global.styled";
import {
  BrandGlow,
  BrandGlowBlue,
  BrandMarkWrap,
  ConstellationWrap,
  HeroGrid,
  HeroVisual,
  RocketWrap,
  WordmarkBig,
} from "../styles/showCase.styled";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { BrandIcon } from "./layouts/brandIcon";
import { Constellation } from "./layouts/constellation";
import { Reveal } from "./layouts/reveal";
import { Rocket } from "./layouts/rocket";

const ShowCase = () => {
  return (
    <PaddingContainer
      id="inicio"
      top="15%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      responsiveTop="8rem"
    >
      <HeroGrid>
        <Reveal x={-40}>
          <Eyebrow>Celest · Estúdio de tecnologia</Eyebrow>
          <Heading as="h1" size="h1" top="1rem" bottom="1rem">
            Sites, automações e <GradientText>aplicativos</GradientText> que
            colocam seu negócio em ascensão
          </Heading>
          <ParaText as="p" top="1rem" bottom="2rem">
            Tecnologia sob medida para o seu negócio decolar.
          </ParaText>
          <FlexContainer gap="1rem" responsiveFlex>
            <Button
              href={buildWhatsAppLink(
                "Olá! Quero solicitar um orçamento com a Celest."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar orçamento
            </Button>
            <Button href="#pacotes" outline>
              Ver pacotes
            </Button>
          </FlexContainer>
        </Reveal>

        <Reveal x={40} delay={0.15}>
          <HeroVisual>
            <ConstellationWrap>
              <Constellation />
            </ConstellationWrap>
            <RocketWrap>
              <Rocket size={70} />
            </RocketWrap>
            <BrandMarkWrap>
              <BrandGlowBlue />
              <BrandGlow />
              <BrandIcon size="6.5rem" starColor="#E8A33D" arcColor="#5B7FBF" />
              <WordmarkBig>CELEST</WordmarkBig>
            </BrandMarkWrap>
          </HeroVisual>
        </Reveal>
      </HeroGrid>
    </PaddingContainer>
  );
};

export default ShowCase;
