import { rem } from "polished";
import styled, { css } from "styled-components";
import { lightning } from "../../views/components/LightsPannel/LigthsPannel.styles";

interface Props {
  color: string;
  size: number;
  isSwitchOn?: boolean;
}

export const Light = styled.div<Props>`
  position: relative;

  width: ${(p) => rem(p.size)};
  height: ${(p) => rem(p.size)};
  background-image: radial-gradient(
    var(${(p) => `--${p.color}`}),
    var(${(p) => `--${p.color}-shadow`})
  );
  border-radius: 100%;

  box-shadow: 0 0 ${rem(8)} ${rem(3)} var(--border-color);
  ${(p) =>
    p.isSwitchOn &&
    css`
      animation: ${lightning} 0.5s linear infinite;
      transition: all 0.5s ease-in-out;
    `}

  :not(:last-child) {
    margin-right: var(--size-mini);
  }

  &:after {
    content: "";
    position: absolute;
    top: calc(${(p) => rem(p.size)} / 5);
    left: calc(${(p) => rem(p.size)} / 5);

    width: calc(${(p) => rem(p.size)} / 5);
    height: calc(${(p) => rem(p.size)} / 5);

    background-color: var(${(p) => `--${p.color}`});
    border-radius: 100%;
  }
`;
