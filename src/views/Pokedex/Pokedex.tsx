import React from "react";
import {
  PokedexCase,
  EmptyPannel,
  DisplayInfoScreen,
  MainControlPannelScreen,
  SeparatorBar,
  BackgroundFiller1,
  BackgroundFiller2,
} from "./Pokedex.styles";
import { LightsPannel } from "../components/LightsPannel/LightsPannel";
import { MainScreen } from "../components/MainScreen/MainScreen";
import { ScreenDisplay } from "../../components/common/ScreenDisplay";

export const Pokedex: React.FC = () => {
  return (
    <PokedexCase>
      <LightsPannel />
      <EmptyPannel>
        <BackgroundFiller1 />
        <BackgroundFiller2 />
      </EmptyPannel>
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
