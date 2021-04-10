import React from "react";
import logo from "../../img/PokemonLogo.png";
import gitHub from "../../img/github.png";

import styled from "styled-components";
import { rem } from "polished";
import { containerLayout } from "../ui/utils/containerLayout";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${containerLayout};

  padding-top: var(--size-base);
  margin-bottom: var(--size-large);
`;

const MainLogo = styled.img`
  height: ${rem(50)};
  width: auto;
`;

const LogoGitHub = styled.img`
  height: ${rem(24)};
  width: auto;
`;

export const Header: React.FC = () => {
  return (
    <HeaderWrapper role="banner">
      <MainLogo src={logo} alt="Pokemon" title="Logo de Pokemon" />
      <a
        href="https://github.com/mariaBarrios?tab=repositories"
        title="Mira aquí el código fuente del proyecto"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoGitHub
          src={gitHub}
          alt="Pulsa par ver el código fuente del proyecto"
        />
      </a>
    </HeaderWrapper>
  );
};
