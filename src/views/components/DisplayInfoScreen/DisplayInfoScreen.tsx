import React from "react";
import { ScreenDisplay } from "../../../components/common/ScreenDisplay";
import { DisplayInfoScreenWrapper } from "./DisplayInfoScreen.styles";

export const DisplayInfoScreen: React.FC = () => {
  return (
    <DisplayInfoScreenWrapper>
      <ScreenDisplay secondary>Soy la pantalla secundaria</ScreenDisplay>
    </DisplayInfoScreenWrapper>
  );
};
