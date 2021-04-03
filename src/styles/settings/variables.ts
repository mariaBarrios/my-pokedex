import { css } from "styled-components";
import { colors } from "./colors";
import { sizes } from "./sizes";

export const variables = css`
  :root {
    ${colors};
    ${sizes};
  }
`;
