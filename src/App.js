import React from "react";
import { ThemeProvider } from "styled-components";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { HowItWorks } from "./components/howItWorks";
import { Navbar } from "./components/navbar";
import { Packages } from "./components/packages";
import { Projects } from "./components/projects";
import { Services } from "./components/services";
import ShowCase from "./components/showCase";
import { WhoWeAre } from "./components/whoWeAre";
import { Container, MainBody } from "./styles/global.styled";
import { theme } from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Navbar />
        <Container>
          <ShowCase />
          <WhoWeAre />
          <Services />
          <Projects />
          <Packages />
          <HowItWorks />
          <Contact />
          <Footer />
        </Container>
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
