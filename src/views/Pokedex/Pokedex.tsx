import React from "react";
import {
  PokedexCase,
  DisplayInfoScreen,
  MainControlPannelScreen,
  SeparatorBar,
} from "./Pokedex.styles";
import { LightsPannel } from "../components/LightsPannel/LightsPannel";
import { MainScreen } from "../components/MainScreen/MainScreen";
import { ScreenDisplay } from "../../components/common/ScreenDisplay";
import { EmptyPannel } from "../components/EmptyPannel/EmptyPannel";

export const Pokedex: React.FC = () => {
  return (
    <PokedexCase>
      <LightsPannel />
      <EmptyPannel />
      <MainScreen />
      <MainControlPannelScreen>
        Aquí va el panel de control
      </MainControlPannelScreen>
      <SeparatorBar></SeparatorBar>
      <DisplayInfoScreen>
        <ScreenDisplay secondary>Soy la pantalla secundaria</ScreenDisplay>
      </DisplayInfoScreen>
    </PokedexCase>
  );
};
