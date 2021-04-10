import { rem } from "polished";
import styled, { css } from "styled-components";

interface Props {
  secondary?: boolean;
}

export const ScreenDisplay = styled.div<Props>`
  ${(p) =>
    !p.secondary &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  padding: var(--size-small);

  height: 100%;

  ${(p) =>
    p.secondary
      ? `background-image: linear-gradient(45deg, var(--secondary-screenBg-shadow) 10%, var(--secondary-screenBg) 85%,  var(--secondary-screenBg-shadow));`
      : `background-image: linear-gradient(45deg, var(--main-screenBg) 10%, var(--main-screenBg-shadow) 85%, var(--main-screenBg) );`}

  box-shadow: 0 0 ${rem(5)} ${rem(3)} var(--border-color);
  border-radius: 10px 10px 10px 10px;

  font-size: 24px;
`;
