import { rem } from "polished";
import styled from "styled-components";

export const MainScreenWrapper = styled.div`
  grid-area: MainScreen;
  padding: var(--size-medium) var(--size-base);
`;

export const MainScreenContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--size-large) var(--size-base) var(--size-base);

  background-color: var(--white);

  box-shadow: 0 0 ${rem(10)} ${rem(3)} var(--main-bg-darker-shadow);
  border-radius: 10px 10px 10px 40px;
`;

export const UpperLightsWrapper = styled.div`
  position: absolute;
  top: ${rem(16)};
  right: 0;
  left: 0;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpeakerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: var(--size-mini);
`;

export const Speaker = styled.div``;
