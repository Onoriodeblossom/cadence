import React from "react";
import { IntroSectionContainer } from "./styles";
import { FlexibleDiv } from "../../../components/flexibleDiv/flexibleDiv.component";

import { Text } from "../../../components/Text/styles";

export const IntroSection = () => {
  return (
    <IntroSectionContainer>
      <FlexibleDiv flexDirection="column" justifyContent="center">
        <Text size="60px"> The New Cadence / Boys To Men Record</Text>

        <Text size="40px">
          {" "}
          Newly founded by two young Nigerian hip-hop artistes, Emdrey and N9tro
          is a hip-hop branded music record based in Nigeria. The New Cadence is
          set to take over the music scene, raising voices, helping young
          artistes market their music... “READ MORE"
        </Text>
      </FlexibleDiv>
    </IntroSectionContainer>
  );
};
