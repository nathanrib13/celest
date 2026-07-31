import React from "react";
import { Eyebrow, Heading, PaddingContainer } from "../styles/global.styled";
import { ChartInner, ChartScroll } from "../styles/howItWorks.styled";
import { ProgressChart } from "./layouts/progressChart";
import { Reveal } from "./layouts/reveal";

export const HowItWorks = () => (
  <PaddingContainer
    id="processo"
    top="5%"
    bottom="10%"
    responsiveLeft="1rem"
    responsiveRight="1rem"
  >
    <Eyebrow>Do contato ao lançamento</Eyebrow>
    <Heading as="h2" size="h2" top="0.5rem">
      Como funciona
    </Heading>
    <Reveal delay={0.1}>
      <ChartScroll>
        <ChartInner>
          <ProgressChart />
        </ChartInner>
      </ChartScroll>
    </Reveal>
  </PaddingContainer>
);
