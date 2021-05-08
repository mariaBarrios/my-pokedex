import { rem } from "polished";
import styled from "styled-components";

export const MiddleSectionWrapper = styled.section`
  position: relative;
  grid-area: MiddleSection;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: ${rem(62)};

  height: calc(100% - ${rem(62)});

  background-image: linear-gradient(
    90deg,
    var(--main-bg-darker-shadow),
    var(--main-bg),
    var(--main-bg),
    var(--main-bg-darker-shadow)
  );

  &:before {
    content: "";
    position: absolute;
    top: ${rem(-62)};
    right: 0;

    width: ${rem(10)};
    height: ${rem(62)};
    background-image: linear-gradient(
      90deg,
      var(--main-bg),
      var(--main-bg-darker-shadow)
    );
  }
`;

export const Separator = styled.div`
  border-top: 2px solid var(--main-bg-darker-shadow);
  border-bottom: 2px solid var(--main-bg-darker-shadow);

  width: 100%;
  height: ${rem(15)}; ;
`;
