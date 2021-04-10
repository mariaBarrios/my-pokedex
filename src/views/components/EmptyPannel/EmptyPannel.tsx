import React from "react";
import {
  EmptyPannelWrapper,
  BackgroundFiller1,
  BackgroundFiller2,
} from "./EmptyPannel.styles";

export const EmptyPannel: React.FC = () => {
  return (
    <EmptyPannelWrapper>
      <BackgroundFiller1 />
      <BackgroundFiller2 />
    </EmptyPannelWrapper>
  );
};
