import React, { useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import {
  Eyebrow,
  GlowOrb,
  Heading,
  PaddingContainer,
  ParaText,
} from "../styles/global.styled";
import {
  BrowserBar,
  BrowserUrl,
  CategoryTag,
  ProjectBody,
  ProjectCard,
  ProjectLink,
  ProjectsGrid,
  ProjectThumb,
  ThumbFallback,
} from "../styles/projects.styled";
import { buildScreenshotUrl, PROJECTS } from "../utils/projects";
import { Reveal } from "./layouts/reveal";

const ProjectThumbnail = ({ project }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <ProjectThumb>
        <ThumbFallback>{project.name.charAt(0)}</ThumbFallback>
      </ProjectThumb>
    );
  }

  return (
    <ProjectThumb>
      <img
        src={buildScreenshotUrl(project.url)}
        alt={`Captura de tela do site ${project.name}`}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </ProjectThumb>
  );
};

export const Projects = () => {
  return (
    <PaddingContainer
      id="projetos"
      top="5%"
      bottom="10%"
      align="center"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      style={{ position: "relative", zIndex: 0, overflow: "hidden" }}
    >
      <GlowOrb color="rgba(91, 127, 191, 0.6)" size="460px" bottom="-15%" left="-12%" $zIndex={-1} />
      <Eyebrow align="center">Prova no ar</Eyebrow>
      <Heading as="h2" size="h2" align="center" top="0.5rem">
        Projetos realizados
      </Heading>
      <ParaText align="center" top="1rem" bottom="1rem">
        Sites e sistemas que já saíram do papel e estão em produção.
      </ParaText>
      <ProjectsGrid>
        {PROJECTS.map((project, index) => (
          <Reveal key={project.url} delay={index * 0.08}>
            <ProjectCard>
              <BrowserBar>
                <span />
                <span />
                <span />
                <BrowserUrl>{new URL(project.url).hostname}</BrowserUrl>
              </BrowserBar>
              <ProjectThumbnail project={project} />
              <ProjectBody>
                <CategoryTag>{project.category}</CategoryTag>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ProjectLink
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver projeto <TbExternalLink />
                </ProjectLink>
              </ProjectBody>
            </ProjectCard>
          </Reveal>
        ))}
      </ProjectsGrid>
    </PaddingContainer>
  );
};
