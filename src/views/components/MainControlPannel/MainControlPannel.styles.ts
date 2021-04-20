import { rem } from "polished";
import styled from "styled-components";

export const MainControlPannelWrapper = styled.div`
  grid-area: MainControlPannel;

  display: flex;
  padding: var(--size-base);

  height: 100%;
`;

export const MainButton = styled.button`
  padding: 0;

  width: ${rem(100)};
  height: ${rem(50)};

  font: inherit;
  color: inherit;

  background-image: radial-gradient(var(--green-shadow), var(--green));

  box-shadow: 0 0 ${rem(10)} ${rem(3)} var(--main-bg-darker-shadow);

  border: none;
  border-radius: 10px;

  cursor: pointer;
  outline: inherit;

  &:hover {
    transform: scale(0.95);
  }
`;

export const ControlerWrapper = styled.div`
  display: grid;
`;

export const Controler = styled.button``;
