import React from "react";
import {
  Image,
  P,
  Picture1,
  Picture2,
  Picture3,
  Section1,
  Section2,
  
} from "./styles";

// import { Text } from "../../../components/Text/styles";
// import Pic1 from "../../../assets/em.jpg";
// import Pic2 from "../../../assets/emm.jpg";
import { FlexibleDiv } from "../../../components/flexibleDiv/flexibleDiv.component";

const DoubleSectionContainer = ({
  Pic1,
  Pic2,
  Pic3,
  text1,
  text2,
  text3,
  flexDirection,
}) => {
  return (
    <FlexibleDiv
      // position="relative"
      flexDirection={flexDirection}
      justifyContent="center"
      alignItems="flex-start"
      // marginTop="50px"
    >
       <Section1>
        <Picture1>
          <Image src={Pic1} alt="image" />
        </Picture1>
        <Picture2>
          <Image src={Pic2} alt="image" />
        </Picture2>
        <Picture3>
          <Image src={Pic1} alt="image" />
        </Picture3>
      </Section1>
      <Section2>
        <P color="#ff9900" background="#a2812e">
          {" "}
          {text1}
        </P>
        <P size="48px" align="left" color="#495057"  resSize600="30px">
          {text2}
        </P>
        <P size="20px" align="left" fontWeight="400" align360="center" resSize600={"18px"}>
          {text3}
        </P>
      </Section2>
    </FlexibleDiv>
  );
};
export default DoubleSectionContainer;
