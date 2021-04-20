import { rem } from "polished";
import styled, { css } from "styled-components";

export const resetButton = css`
  font: inherit;
  color: inherit;
  border: none;

  cursor: pointer;
  outline: inherit;
`;

export const MainControlPannelWrapper = styled.div`
  grid-area: MainControlPannel;

  display: flex;
  padding: var(--size-base);
  justify-content: space-between;
  align-items: center;

  height: 100%;
`;

export const ChooseButton = styled.button`
  ${resetButton};

  padding: 0;

  width: ${rem(100)};
  height: ${rem(50)};

  background-image: radial-gradient(var(--green-shadow), var(--green));

  box-shadow: 0 0 ${rem(10)} ${rem(3)} var(--main-bg-darker-shadow);

  border-radius: 10px;

  &:hover {
    transform: scale(0.95);
  }
`;

export const Controler = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  grid-template-areas:
    ". Top ."
    "Left Middle Right"
    ". Bottom .";

  &:hover {
    transform: scale(0.95);
  }
`;

export const MiddleBox = styled.div`
  grid-area: Middle;
  background-color: var(--button-controler);
`;

interface PositionProps {
  position: "top" | "right" | "bottom" | "left";
}

export const ControlerButton = styled.button<PositionProps>`
  ${resetButton};

  position: relative;
  width: 30px;
  height: 30px;

  border-radius: 0% 30% 30% 0%;
  background-color: var(--button-controler);

  ${(p) =>
    p.position === "top" &&
    css`
      grid-area: Top;
      transform: rotate(270deg);
    `}

  ${(p) =>
    p.position === "right" &&
    css`
      grid-area: Right;
    `}

  ${(p) =>
    p.position === "bottom" &&
    css`
      grid-area: Bottom;
      transform: rotate(90deg);
    `}

    ${(p) =>
    p.position === "left" &&
    css`
      grid-area: Left;
      transform: rotate(180deg);
    `}

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;

    width: 0;
    height: 0;

    border-left: 15px solid var(--arrows-controler);
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
  }
`;
