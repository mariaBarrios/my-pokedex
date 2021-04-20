import React from "react";
import { PokedexCase } from "./Pokedex.styles";
import { LightsPannel } from "../components/LightsPannel/LightsPannel";
import { MainScreen } from "../components/MainScreen/MainScreen";
import { EmptyPannel } from "../components/EmptyPannel/EmptyPannel";
import { MiddleSection } from "../components/MiddleSection/MiddleSection";
import { MainControlPannel } from "../components/MainControlPannel/MainControlPannel";
import { DisplayInfoScreen } from "../components/DisplayInfoScreen/DisplayInfoScreen";

export const Pokedex: React.FC = () => {
  return (
    <PokedexCase>
      <>
        <LightsPannel />
        <MainScreen />
        <MainControlPannel />
      </>
      <MiddleSection />
      <>
        <EmptyPannel />
        <DisplayInfoScreen />
      </>
    </PokedexCase>
  );
};
