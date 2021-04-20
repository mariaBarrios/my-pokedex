import { rem } from "polished";
import styled from "styled-components";

export const PokedexCase = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.1fr 1fr;
  align-items: start;

  grid-template-areas:
    "LightPannel MiddleSection EmptyPannel"
    "MainScreen MiddleSection SecondaryScreen"
    "MainControlPannel MiddleSection SecondaryControlPannel";

  background-color: var(--main-bg);
  box-shadow: 0 0 ${rem(15)} ${rem(2)} var(--main-bg-darker-shadow) inset;

  border-radius: 10px;
`;

export const DisplayInfoScreen = styled.div`
  grid-area: SecondaryScreen;
  padding: var(--size-medium) var(--size-base) 0;

  height: 100%;
`;
