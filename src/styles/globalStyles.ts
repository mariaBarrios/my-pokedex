import { createGlobalStyle, css } from "styled-components";
import { variables } from "./settings/variables";

import { reboot } from "./generic/reboot";
import { normalize } from "./generic/normalize";

const scrollStyles = css`
  scroll-behavior: smooth;

  @supports (-webkit-overflow-scrolling: touch) {
    * {
      -webkit-overflow-scrolling: touch;
    }
  }
  @supports not (-webkit-overflow-scrolling: touch) {
    overflow: auto;

    ::-webkit-scrollbar {
      width: var(--size-tiny);
      border: 0;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--arrows-controler);
      border-radius: 0;
    }
  }
`;

export const GlobalStyles = createGlobalStyle`
${variables};

${normalize};

${reboot};

${scrollStyles};
`;
