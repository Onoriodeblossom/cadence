import React from "react";
import { Image, P, Picture1, Section1, Section2, Icon } from "./styles";

import { FlexibleDiv } from "../../../components/flexibleDiv/flexibleDiv.component";

const DoubleSectionContainer = ({
  image,
  text1,
  text2,
  text3,
  flexDirection,
  icon,
}) => {
  return (
    <FlexibleDiv
      flexDirection={flexDirection}
      justifyContent="space-between"
      alignItems="flex-start"
      marginTop="100px"
      // background="orange"
    >
      <Section1>
        <Picture1>
          <Image src={image} alt="image" />
        </Picture1>
      </Section1>
      <Section2>
        <Icon>{icon}</Icon>

        <P color="#ff9900" background="#a2812e">
          {" "}
          {text1}
        </P>
        <P size="48px" align="left" color="#495057" resSize600={"25px"}>
          {text2}
        </P>
        <P size="20px" align="left" fontWeight="400" resSize600={"20px"}>
          {text3}
        </P>
      </Section2>
    </FlexibleDiv>
  );
};
export default DoubleSectionContainer;
