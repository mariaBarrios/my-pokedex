import { createGlobalStyle, css } from "styled-components";
import { variables } from "./settings/variables";

import { reboot } from "./generic/reboot";
import { reset } from "./generic/reset";

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
      width: var(--size-xtiny);
      border: 0;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: white;
      border-radius: 10px 20px 20px 10px;
    }
  }
`;

export const GlobalStyles = createGlobalStyle`
${variables};

${reset};

${reboot};

${scrollStyles};
`;
