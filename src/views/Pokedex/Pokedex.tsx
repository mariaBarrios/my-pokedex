import React from "react";
import { PokedexCase, DisplayInfoScreen } from "./Pokedex.styles";
import { LightsPannel } from "../components/LightsPannel/LightsPannel";
import { MainScreen } from "../components/MainScreen/MainScreen";
import { ScreenDisplay } from "../../components/common/ScreenDisplay";
import { EmptyPannel } from "../components/EmptyPannel/EmptyPannel";
import { MiddleSection } from "../components/MiddleSection/MiddleSection";
import { MainControlPannel } from "../components/MainControlPannel/MainControlPannel";

export const Pokedex: React.FC = () => {
  return (
    <PokedexCase>
      <LightsPannel />
      <EmptyPannel />
      <MainScreen />
      <MainControlPannel />
      <MiddleSection />
      <DisplayInfoScreen>
        <ScreenDisplay secondary>Soy la pantalla secundaria</ScreenDisplay>
      </DisplayInfoScreen>
    </PokedexCase>
  );
};
