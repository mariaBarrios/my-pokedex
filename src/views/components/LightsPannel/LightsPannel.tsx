import React from "react";
import { Light } from "../../../components/common/Light";
import { LightsPannelWrapper, MainLight } from "./LigthsPannel.styles";

export const LightsPannel: React.FC = () => {
  return (
    <LightsPannelWrapper>
      <MainLight />
      <Light color="green" size={25} />
      <Light color="red" size={25} />
      <Light color="yellow" size={25} />
    </LightsPannelWrapper>
  );
};
