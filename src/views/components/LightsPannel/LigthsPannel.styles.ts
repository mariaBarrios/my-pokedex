import { rem } from "polished";
import styled, { keyframes } from "styled-components";

export const lightning = keyframes`
 from { opacity: 0.5; }
 to { opacity: 1; }
`;

export const LightsPannelWrapper = styled.div`
  position: relative;
  display: flex;

  padding: var(--size-base);

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 56%;
    height: 50%;

    box-shadow: 0 4px 2px -2px var(--main-bg-darker-shadow),
      0 10px 2px -2px var(--main-bg-shadow);

    border-radius: 0% 0% 80% 0%;
  }

  &:after {
    content: "";
    position: absolute;
    right: ${rem(-1)};
    bottom: ${rem(30)};

    width: 47%;
    height: 25%;

    box-shadow: 0 4px 2px -2px var(--main-bg-darker-shadow) inset,
      0 10px 2px -2px var(--main-bg-shadow) inset;

    border-radius: 100% 0% 0% 0%;

    /* right: -1px;
    bottom: 30px;
    width: 17%;
    width: 46%;
    height: 25%;
    box-shadow: 0 4px 2px -2px var(--main-bg-darker-shadow) inset,
      0 10px 2px -2px var(--main-bg-shadow) inset;
    border-radius: 100% 0% 0% 0%;
    background-color: #fff; */
  }
`;

export const MainLight = styled.div`
  position: relative;
  margin-right: var(--size-base);

  width: ${rem(75)};
  height: ${rem(75)};
  background-color: var(--white);
  border-radius: 100%;

  box-shadow: 0 0 ${rem(10)} ${rem(3)} var(--main-bg-darker-shadow);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    width: ${rem(65)};
    height: ${rem(65)};

    box-shadow: 0 0 ${rem(10)} ${rem(3)} var(--blue-shadow) inset;

    background-image: radial-gradient(var(--blue), var(--blue-shadow));
    border-radius: 100%;

    animation: ${lightning} 0.5s linear infinite;
    transition: all 0.5s ease-in-out;
  }

  &:after {
    content: "";
    position: absolute;
    top: ${rem(13)};
    left: ${rem(15)};

    width: ${rem(15)};
    height: ${rem(15)};

    background-color: var(--blue);
    border-radius: 100%;

    animation: ${lightning} 4s linear infinite;
    transition: all 0.5s ease-in-out;
  }
`;
