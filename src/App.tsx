import React from "react";

import { GlobalStyles } from "./styles/globalStyles";
import { Header } from "./components/common/Header";

import StarLogo from "./logo.svg";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <figure>
          <img
            src={StarLogo}
            alt="Estrella Pokeball"
            title="Estrella Pokeball"
          />
          <figcaption>La estrella con la pokeball</figcaption>
        </figure>
      </main>
    </>
  );
};

export default App;
