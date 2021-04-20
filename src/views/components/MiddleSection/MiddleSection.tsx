import React from "react";
import { MiddleSectionWrapper, Separator } from "./MiddleSection.styles";

export const MiddleSection: React.FC = () => {
  return (
    <MiddleSectionWrapper>
      <div>
        <Separator />
        <Separator />
      </div>
      <div>
        <Separator />
        <Separator />
      </div>
    </MiddleSectionWrapper>
  );
};
