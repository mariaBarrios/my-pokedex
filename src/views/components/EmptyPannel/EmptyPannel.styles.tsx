import { rem } from "polished";
import styled from "styled-components";

export const EmptyPannelWrapper = styled.div`
  position: relative;
  grid-area: EmptyPannel;
  height: 100%;

  background-color: var(--white);

  &:before {
    content: "";
    position: absolute;
    bottom: 0px;
    right: ${rem(-1)};
    width: 56%;
    height: 50%;

    box-shadow: 0 4px 2px -2px var(--main-bg-darker-shadow),
      0 10px 2px -2px var(--main-bg-shadow);

    border-radius: 0% 0% 0% 80%;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    left: ${rem(-1)};
    bottom: ${rem(30)};

    width: 47%;
    height: 25%;

    box-shadow: 0 4px 2px -2px var(--main-bg-darker-shadow) inset,
      0 10px 2px -2px var(--main-bg-shadow) inset;

    border-radius: 0% 100% 0% 0;

    z-index: 1;
  }
`;

export const BackgroundFiller1 = styled.div`
  position: absolute;
  bottom: 0;
  background-color: var(--main-bg);

  width: 54%;
  height: 45%;
  border-radius: 0% 90% 0% 0;
`;

export const BackgroundFiller2 = styled.div`
  position: absolute;
  bottom: ${rem(-7)};
  left: 49%;
  background-color: var(--main-bg);

  width: 17%;
  height: 16%;
  border-radius: 0% 90% 0% 0;
`;
