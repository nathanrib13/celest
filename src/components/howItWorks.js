import React from "react";
import { Eyebrow, Heading, PaddingContainer } from "../styles/global.styled";
import {
  ChartInner,
  ChartScroll,
  StepBullet,
  StepContent,
  StepItem,
  StepsList,
} from "../styles/howItWorks.styled";
import { PROCESS_STEPS } from "../utils/processSteps";
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
      <StepsList>
        {PROCESS_STEPS.map((step) => (
          <StepItem key={step.number}>
            <StepBullet>{step.number}</StepBullet>
            <StepContent>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </StepContent>
          </StepItem>
        ))}
      </StepsList>
    </Reveal>
  </PaddingContainer>
);
