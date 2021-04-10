import React from "react";

import { GlobalStyles } from "./styles/globalStyles";
import { Header } from "./components/common/Header";

import { Pokedex } from "./views/Pokedex/Pokedex";
import { Container } from "./components/common/Container";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <Pokedex />
      </Container>
    </>
  );
};

export default App;
