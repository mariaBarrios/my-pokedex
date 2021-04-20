import React from "react";
import {
  Controler,
  ControlerButton,
  ChooseButton,
  MainControlPannelWrapper,
  MiddleBox,
} from "./MainControlPannel.styles";

export const MainControlPannel: React.FC = () => {
  return (
    <MainControlPannelWrapper>
      <ChooseButton />
      <Controler>
        <ControlerButton position="top" />
        <ControlerButton position="right" />
        <MiddleBox />
        <ControlerButton position="bottom" />
        <ControlerButton position="left" />
      </Controler>
    </MainControlPannelWrapper>
  );
};
