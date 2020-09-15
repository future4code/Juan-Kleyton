import React from "react";
import InitialScreen from "./components/InitialScreen/initialScreen.js";
import ClearMatches from "./components/ClearMatches/clearMatches";
import { MainContainer, ContentContainer, Logo } from "./styles/styles.js";
import logo from "./assets/astromatch1.svg"
function App() {
  return (
    <MainContainer>
      <ContentContainer>
        <header>
          <Logo src={logo} alt={"Logo Astromatch"} />
        </header>
        <InitialScreen />
      </ContentContainer>
      <ClearMatches />
    </MainContainer>
  );
}

export default App;