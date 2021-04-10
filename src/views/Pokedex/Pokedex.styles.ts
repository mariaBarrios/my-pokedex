import { rem } from "polished";
import styled from "styled-components";

export const PokedexCase = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.1fr 1fr;
  align-items: start;

  grid-template-areas:
    "LightPannel SeparatorBar EmptyPannel"
    "MainScreen SeparatorBar SecondaryScreen"
    "MainControlPannel SeparatorBar SecondaryControlPannel";

  background-color: var(--main-bg);
  box-shadow: 0 0 ${rem(15)} ${rem(2)} var(--main-bg-darker-shadow) inset;

  border-radius: 10px;
`;

export const DisplayInfoScreen = styled.div`
  grid-area: SecondaryScreen;
  padding: var(--size-medium) var(--size-base);
  height: 100%;
`;

export const MainControlPannelScreen = styled.div`
  grid-area: MainControlPannel;
  padding: var(--size-base);
  height: 100%;
`;

export const SeparatorBar = styled.div`
  grid-area: SeparatorBar;
  border: 3px solid var(--main-bg-darker-shadow);

  height: 100%;

  background-image: linear-gradient(
    90deg,
    var(--main-bg-darker-shadow),
    var(--main-bg-shadow),
    var(--main-bg-darker-shadow)
  );

  border-radius: 0 12px 0 0;

  opacity: 0.5;
`;
