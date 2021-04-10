import React from "react";
import { Light } from "../../../components/common/Light";
import speaker from "../../../img/speaker.png";
import pikachu from "../../../img/Pokemons/pikachu.png";
import { ScreenDisplay } from "../../../components/common/ScreenDisplay";
import {
  MainScreenWrapper,
  MainScreenContainer,
  UpperLightsWrapper,
  SpeakerWrapper,
} from "./MainScreen.styles";

export const MainScreen: React.FC = () => {
  return (
    <MainScreenWrapper>
      <MainScreenContainer>
        <UpperLightsWrapper>
          <Light color="red" size={10} />
          <Light color="red" size={10} />
        </UpperLightsWrapper>
        <ScreenDisplay>
          <img
            style={{ height: "150px", width: "150px" }}
            src={pikachu}
            alt="Pikachu"
          ></img>
        </ScreenDisplay>
        <SpeakerWrapper>
          <Light color="orange" size={25} isSwitchOn />
          <img
            style={{ height: "30px", width: "30px" }}
            src={speaker}
            alt="Pikachu"
          ></img>
        </SpeakerWrapper>
      </MainScreenContainer>
    </MainScreenWrapper>
  );
};
